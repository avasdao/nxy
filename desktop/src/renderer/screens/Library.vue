<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col">
                <h1>Library</h1>
            </div>
        </div>

        <hr/>

        <div class="row">
            <div class="col">
                <h3
                    class="title-text"
                    v-show="!editTitle"
                    @click="_toggleTitleEditor">{{ title && title || 'Untitled' }}</h3>

                <input
                    ref="titleInput"
                    type="text"
                    class="form-control title-input"
                    v-show="editTitle"
                    v-model="title"
                    @blur="_toggleTitleEditor" />

                <textarea
                    class="form-control body-input"
                    id="snippetBody"
                    rows="10"
                    v-model="body">{{ body }}</textarea>

                <code
                    class="tags-text"
                    v-show="!editTags"
                    @click="_toggleTagsEditor">{{ tags && tags || 'No tags' }}</code>

                <input
                    ref="tagsInput"
                    type="text"
                    class="form-control tags-input"
                    v-show="editTags"
                    v-model="tags"
                    @blur="_toggleTagsEditor" />

                <button class="btn btn-info btn-block" @click="_updateSnippet()">Save</button>

                <button class="btn btn-danger btn-block" @click="_updateSnippet(true)">Delete</button>

                <button
                    class="btn btn-warning btn-block"
                    v-show="isSolidity"
                    @click="_deploy()">
                    Deploy
                </button>
            </div>

            <div class="col-5">
                <ul class="snippets-list list-group">
                    <li v-for="snippet in snippets" class="snippet-item list-group-item">
                        <div @click="_loadSnippet(snippet)">
                            {{ snippet.title && snippet.title || 'Untitled' }}
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        snippets: [],
        id: 0,
        title: '',
        body: '',
        tags: '',
        editTitle: false,
        editTags: false
    }),
    mounted: function () {
        /* Load the active snippets. */
        this._loadSnippets()
    },
    computed: {
        isSolidity: function () {
            if (this.body.slice(0, 15) === 'pragma solidity') {
                return true
            } else {
                return false
            }
        }
    },
    methods: {
        _toggleTitleEditor: function () {
            /* Toggle the editor. */
            this.editTitle = !this.editTitle

            /* Set focus to input (if available). */
            if (this.editTitle) {
                /* Wait until the next tick. */
                this.$nextTick(() => {
                    /* Set the input as focused. */
                    this.$refs.titleInput.focus()
                })
            }
        },
        _toggleTagsEditor: function () {
            /* Toggle the editor. */
            this.editTags = !this.editTags

            /* Set focus to input (if available). */
            if (this.editTags) {
                /* Wait until the next tick to set the input as focused. */
                this.$nextTick(() => this.$refs.tagsInput.focus())
            }
        },
        _loadSnippets: function () {
            const sqlite3 = require('sqlite3').verbose()
            const path = require('path')

            /* Initailize database connection. */
            const db = new sqlite3.Database(path.join(__static, '/db/library.db'))

            /* Initialize sql. */
            const sql = `
                SELECT
                    rowid, Title, Body, Tags, IsActive, DateCreated
                FROM
                    Snippets
                WHERE
                    IsActive = 1`

            /* Clear the current list of snippets. */
            this.snippets = []

            /* Query each record. */
            db.each(sql, (err, row) => {
                if (err) return console.error(err)

                const snippet = {
                    rowid: row.rowid,
                    title: row.Title,
                    body: row.Body,
                    tags: row.Tags,
                    isActive: row.IsActive,
                    dateCreated: row.DateCreated
                }

                /* Add snippet to list. */
                this.snippets.unshift(snippet)
            })

            db.close()
        },
        _loadSnippet: function (_snippet) {
            /* Update snippet id. */
            this.id = _snippet.rowid

            /* Update snippet title. */
            this.title = _snippet.title

            /* Update snippet body. */
            this.body = _snippet.body

            /* Update snippet tags. */
            this.tags = _snippet.tags
        },
        _updateSnippet: function (disableSnippet = false) {
            /* Localize this. */
            const self = this

            /* Are we disabling this snippet. */
            // NOTE Re-enable by setting IsActive to true in latest record.
            if (disableSnippet) {
                /* Display confirmation box. */
                if (!window.confirm('Are you sure you want to disable this snippet?')) {
                    return
                }
            }

            const sqlite3 = require('sqlite3').verbose()
            const path = require('path')
            const moment = require('moment')

            /* Initailize database connection. */
            const db = new sqlite3.Database(path.join(__static, '/db/library.db'))

            /* Initialize serialization. */
            db.serialize(() => {
                /* Update all current rows to inactive. */
                db.run(`
                    UPDATE
                        Snippets
                    SET
                        IsActive = 0
                    WHERE
                        Title = $title`, {
                    $title: self.title
                }, function (err) {
                    if (err) return console.error(err)

                    // console.log('this.lastID A', this.lastID)
                    if (disableSnippet) {
                        /* Initialize ipc renderer. */
                        // const ipc = require('electron').ipcRenderer

                        /* Send message request. */
                        // ipc.send('disable-snippet-success')

                        /* Reload the snippets list. */
                        self._loadSnippets()

                        /* Clear current values. */
                        self.title = ''
                        self.body = ''
                        self.tags = ''
                    }
                })

                if (!disableSnippet) {
                    /* Insert a new database entry. */
                    db.run(`
                        INSERT INTO
                            Snippets (
                            Title, Body, Tags, IsActive, DateCreated
                        ) VALUES ($title, $body, $tags, $isActive, $dateCreated)`, {
                        $title: self.title,
                        $body: self.body,
                        $tags: self.tags,
                        $isActive: 1,
                        $dateCreated: moment().unix()
                    }, function (err) {
                        if (err) return console.error(err)

                        // console.log('this.lastID B', this.lastID)

                        /* Validate successful update. */
                        if (this.changes === 1) {
                            /* Initialize ipc renderer. */
                            const ipc = require('electron').ipcRenderer

                            /* Send message request. */
                            ipc.send('open-message-dialog', 'Library',
                                'Your snippet was added/updated successfully.')

                            /* Reload the snippets list. */
                            self._loadSnippets()
                        }
                    })
                }
            })

            db.close()
        },
        _deploy: async function () {
            /* Initialize ethers module. */
            const ethers = require('ethers')

            /* Initialize the private key. */
            const privateKey = this.$store.getters.getPrivateKey

            // You may specify any of:
            // - boolean; true = ropsten, false = homestead
            // - object; { name: 'ropsten', chainId: 3 } (see ethers.networks);
            // - string; e.g. 'homestead', 'ropsten', 'rinkeby', 'kovan'
            const network = ethers.providers.networks.ropsten

            // Connect to INFUA
            const infuraProvider = new ethers.providers.InfuraProvider(network)

            // Connect to Etherscan
            const etherscanProvider = new ethers.providers.EtherscanProvider(network)

            // Creating a provider to automatically fallback onto Etherscan
            // if INFURA is down
            const provider = new ethers.providers.FallbackProvider([
                infuraProvider,
                etherscanProvider
            ])

            /* Initialize wallet. */
            const wallet = new ethers.Wallet(privateKey, provider)
            console.log('new wallet', wallet)

            const balance = await wallet.getBalance()
            console.log('Wallet balance', balance)

            const ethAmount = ethers.utils.formatEther(balance)
            console.log('ETH amount', ethAmount)

            // The interface from Solidity
            var abi = '[{"inputs":[{"name":"value","type":"string"}],"type":"constructor"}]'

            // The bytecode from Solidity
            var bytecode = '0x6060604052341561000c57fe5b60405161012d38038061012d83398101604052' +
                           '8080518201919050505b806000908051906020019061003f929190610047565b' +
                           '505b506100ec565b828054600181600116156101000203166002900490600052' +
                           '602060002090601f016020900481019282601f1061008857805160ff19168380' +
                           '011785556100b6565b828001600101855582156100b6579182015b8281111561' +
                           '00b557825182559160200191906001019061009a565b5b5090506100c3919061' +
                           '00c7565b5090565b6100e991905b808211156100e55760008160009055506001' +
                           '016100cd565b5090565b90565b6033806100fa6000396000f30060606040525b' +
                           'fe00a165627a7a72305820041f440021b887310055b6f4e647c2844f4e1c8cf1' +
                           'd8e037c72cd7d0aa671e2f0029'

            // Notice we pass in "Hello World" as the parameter to the constructor
            const deployTransaction = ethers.Contract.getDeployTransaction(bytecode, abi, 'Hello World')
            // console.log(deployTransaction)

            // Send the transaction
            const sendPromise = wallet.sendTransaction(deployTransaction)

            // Get the transaction
            sendPromise.then(transaction => {
                console.log('Transaction result', transaction)

                /* Retrieve the hash. */
                const hash = transaction.hash

                /* Initialize ipc renderer. */
                const ipc = require('electron').ipcRenderer

                /* Generate response message. */
                const message = 'Success!\n\n' +
                    'Transaction Hash\n' +
                    '——————————————————————\n' +
                    hash

                /* Send message to system dialog. */
                ipc.send('open-message-dialog', 'Transaction Result', message)
            }).catch(error => {
                console.error(error)

                /* Initialize ipc renderer. */
                const ipc = require('electron').ipcRenderer

                /* Send error to system dialog. */
                ipc.send('open-error-dialog', 'Transaction Error', error.message)
            })
        }
    }
}
</script>

<style>
.snippet-item {
    font-size: 0.9em;
    cursor: pointer;
}

.snippets-list {
    margin-top: 10px;
}

.title-text {
    cursor: pointer;
}

.title-input {
    margin-bottom: 20px;
}

.body-input {
    font-family: monospace;
    white-space:nowrap;
    /* font-size: 1.4em; */
}

code {
    display: inline-block;
    margin: 15px;
}

.tags-text {
    cursor: pointer;
}

.tags-input {
    margin: 20px 0;
}
</style>
