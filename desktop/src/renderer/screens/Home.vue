<template>
    <div>
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 class="h2">Dashboard</h1>

            <div class="btn-toolbar mb-2 mb-md-0">
                <div class="btn-group mr-2">
                    <button class="btn btn-sm btn-outline-secondary">Share</button>
                    <button class="btn btn-sm btn-outline-secondary">Export</button>
                </div>

                <button class="btn btn-sm btn-outline-secondary dropdown-toggle">
                    <span data-feather="calendar"></span>
                    This week
                </button>
            </div>
        </div>

        <div class="row">
            <div class="col">
                <div class="row">
                    <div class="col text-right">
                        Wallet Address
                    </div>
                    <div class="col">
                        <strong class="text-info">{{ _displayAddress }}</strong>
                    </div>
                </div>

                <div class="row">
                    <div class="col text-right">
                        Wallet Balance
                    </div>
                    <div class="col">
                        <strong class="text-info">Ξ{{ accountBalanceEth }}</strong>
                    </div>
                </div>
            </div>

            <div class="col-5 text-right">
                <h5>Ξ1.00 = <strong class="text-info">${{ ethPrice.toFixed(2) }}</strong></h5>

                <h5>{{ _remainingDisplay }}</h5>

                <div><strong class="text-info">{{ _totalScanned }}</strong> blocks scanned</div>

                <div>Scanning block #{{ lastScannedBlock }}</div>

                <ul class="logs-list list-group">
                    <li v-for="tx in txs" class="log-item list-group-item">
                        <div @click="_loadLog(log)">
                            {{ tx.hash.slice(0, 6) }} | {{ _showWhen(tx.timestamp) }}
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
        /* Account balance in ether. */
        accountBalanceEth: 0,

        /* Account balance in wei. */
        accountBalanceWei: 0,

        /* The current exchange rate of ETH to USD. */
        ethPrice: 0,

        /* Initialize scanning flag. */
        isScanningEnabled: true,

        /* Initialize scanning batch size. */
        batchSize: 500,

        /* Initialize remaining blocks to be scanned. */
        blocksRemaining: 0,

        /* Initialize scanned blocks. */
        latestScannedBlock: null,
        oldestScannedBlock: null,
        lastScannedBlock: null,

        /* Initialize transactons. */
        txs: []
    }),
    mounted: function () {
        /* Load quotes. */
        this._loadQuotes()

        /* Wait a bit before requesting txs. */
        setTimeout(() => {
            /* Load saved transactions. */
            this._loadSavedTxs()

            /* Update the blockchain state. */
            this._updateBlockState()

            /* Initialize blockchain scanning. */
            this._initScanning()
        }, 2000)
    },
    computed: {
        _address: function () {
            if (this.$store.getters.getAccount !== null) {
                /* Retrieve account. */
                const account = this.$store.getters.getAccount
                console.log('account', account)

                /* Retrieve address. */
                const address = account.address

                /* Return the address. */
                return address
            } else {
                return ''
            }
        },
        _remainingDisplay: function () {
            const numeral = require('numeral')

            if (this.blocksRemaining > 0) {
                return numeral(this.blocksRemaining).format('0,0') + ' blocks left'
            } else {
                return 'Done!'
            }
        },
        _totalScanned: function () {
            const numeral = require('numeral')

            const numScanned = (this.latestScannedBlock - this.oldestScannedBlock) +
                (this.batchSize - this.blocksRemaining)

            return numeral(numScanned).format('0,0')
        },
        _displayAddress: function () {
            if (this.$store.getters.getAccount) {
                /* Shorten address. */
                const abbr = this._address.slice(0, 6) + '...' + this._address.slice(-4)

                /* Return abbreviated address. */
                return abbr
            } else {
                return 'loading...'
            }
        }
    },
    methods: {
        _showWhen: function (_time) {
            // console.log('time', _time)
            const moment = require('moment')

            return moment.unix(_time).fromNow()
        },
        _loadQuotes: async function () {
            // return

            /* Fetch Bitcoin (BTC) last price in USD. */
            // let btcUsd = await cmc.fetchTicker('BTC/USD')
            // console.log('DEBUG', btcUsd)
            // btcUsd = btcUsd.last
            // console.log('BTC => USD', btcUsd)

            /* Fetch Bitcoin (BTC) last price in USD. */
            // let ethUsd = await cmc.fetchTicker('ETH/USD')
            // ethUsd = ethUsd.last
            // console.log('ETH => USD', ethUsd)

            /* Set display. */
            // this.ethPrice = ethUsd

            /* Fetch Bitcoin to Ethereum exchange rate. */
            // let btcEth = await cmc.fetchTicker('BTC/ETH')
            // btcEth = btcEth.last
            // console.log('BTC => ETH', btcEth)
        },
        _loadSavedTxs: function () {
            const sqlite3 = require('sqlite3').verbose()
            const path = require('path')

            /* Initailize database connection. */
            const db = new sqlite3.Database(path.join(__static, '/db/ropsten.db'))

            /* Initialize sql. */
            const sql = `
                SELECT
                    rowid, Hash, Timestamp
                FROM
                    Chaindata
                WHERE
                    Account = $account
                ORDER BY
                    BlockNumber`

            /* Clear the current list of snippets. */
            this.txs = []

            /* Query each record. */
            db.each(sql, {
                $account: this._address
            }, (err, row) => {
                if (err) return console.error(err)

                const tx = {
                    rowid: row.rowid,
                    hash: row.Hash,
                    timestamp: row.Timestamp
                }

                /* Add snippet to list. */
                this.txs.unshift(tx)
            })

            db.close()
        },
        _updateBlockState: async function () {
            /* Initialize ethers module. */
            const ethers = require('ethers')

            /* Initialize the private key. */
            const privateKey = this.$store.getters.getPrivateKey

            // You may specify any of:
            // - boolean; true = ropsten, false = homestead
            // - object; { name: 'ropsten', chainId: 3 } (see ethers.networks)
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
            // console.log('new wallet', wallet)

            /* Request account update. */
            this.$store.dispatch('updateAccount', wallet)

            const balance = await wallet.getBalance()
            // console.log('Wallet balance', balance)

            const ethAmount = ethers.utils.formatEther(balance)
            // console.log('ETH amount', ethAmount)

            /* Format the amount and re-covert to decimal. */
            const ethFormatted = parseFloat(parseFloat(ethAmount).toFixed(4))

            /* Update the state. */
            this.accountBalanceEth = ethFormatted
        },
        _initScanning: function () {
            /* Localize this. */
            const self = this

            const sqlite3 = require('sqlite3').verbose()
            const path = require('path')

            /* Initailize database connection. */
            const db = new sqlite3.Database(path.join(__static, '/db/ropsten.db'))

            /* Initialize sql. */
            const sql = `
                SELECT
                    OldestBlock, LatestBlock
                FROM
                    Scanner
                WHERE
                    Account = $account`

            /* Query each record. */
            db.get(sql, {
                $account: this._address
            }, function (err, row) {
                if (err) return console.error(err)

                if (row !== null) {
                    console.log('found record', row)

                    /* Update latest block. */
                    self.latestScannedBlock = row.LatestBlock

                    /* Update oldest block. */
                    self.oldestScannedBlock = row.OldestBlock

                    /* Request the transaction history. */
                    // self._getTxHistory()
                } else {
                    /* Initialize ipc renderer. */
                    const ipc = require('electron').ipcRenderer

                    /* Send message request. */
                    ipc.send('open-message-dialog', 'Scanner',
                        'No scanner history found.')
                }
            })

            db.close()
        },
        _getTxHistory: async function () {
            /* Localize this. */
            const self = this

            /* Initialize numeral module. */
            const numeral = require('numeral')

            // const Web3 = require('web3')
            // const web3 = new Web3('https://ropsten.infura.io/')

            // const lastBlock = await web3.eth.getBlockNumber()
            const lastBlock = 1337
            console.log('Most recent block [ %s ] ', lastBlock)

            // const myaccount = '*'
            const myaccount = '0x0'
            let startingBlock = self.oldestScannedBlock - 1
            let oldestBlock = startingBlock - self.batchSize

            console.log('Searching for transactions to/from account "' +
                myaccount + '" within ' + (startingBlock - oldestBlock) + ' blocks ' +
                oldestBlock + ' and ' +
                startingBlock)

            for (let i = startingBlock; i >= oldestBlock; i--) {
                /* Calculate remaining blocks. */
                const remaining = (i - oldestBlock)

                /* Update state. */
                this.blocksRemaining = remaining
                this.lastScannedBlock = numeral(i).format('0,0')

                /* Request the "full" block info. */
                // var block = await web3.eth.getBlock(i, true)
                var block = null
                // console.log(block)

                /* Validate block. */
                if (block !== null && block.transactions !== null) {
                    /* Parse each block. */
                    block.transactions.forEach(function (e) {
                        /* Match block activity to account. */
                        if (myaccount === '*' || myaccount === e.from || myaccount === e.to) {
                            /* Add block timestamp to data. */
                            e.timestamp = block.timestamp

                            self.txs.push(e)

                            self._addTx(e)
                            // console.log(
                            //     '  tx hash          : ' + e.hash + '\n' +
                            //     '   nonce           : ' + e.nonce + '\n' +
                            //     '   blockHash       : ' + e.blockHash + '\n' +
                            //     '   blockNumber     : ' + e.blockNumber + '\n' +
                            //     '   transactionIndex: ' + e.transactionIndex + '\n' +
                            //     '   from            : ' + e.from + '\n' +
                            //     '   to              : ' + e.to + '\n' +
                            //     '   value           : ' + e.value + '\n' +
                            //     '   time            : ' + block.timestamp + ' ' + new Date(block.timestamp * 1000).toGMTString() + '\n' +
                            //     '   gasPrice        : ' + e.gasPrice + '\n' +
                            //     '   gas             : ' + e.gas + '\n' +
                            //     '   input           : ' + e.input)
                        }
                    })
                }

                /* Validate scanning availability. */
                if (!self.isScanningEnabled) {
                    console.error('Scanning has been disabled')

                    break
                }
            }

            if (self.isScanningEnabled) {
                console.log('[OLDER] Scanning complete.')

                /* Update the scanning state (older scan). */
                self._updateScanner(self.latestScannedBlock, oldestBlock)
            }
        },
        _addTx: function (_transaction) {
            /* Localize this. */
            const self = this

            const sqlite3 = require('sqlite3').verbose()
            const path = require('path')

            /* Initailize database connection. */
            const db = new sqlite3.Database(path.join(__static, '/db/ropsten.db'))

            /* Insert a new database entry. */
            db.run(`
                INSERT INTO
                    Chaindata (
                    Hash, Nonce, BlockHash, BlockNumber, TransactionIndex,
                    Account, Receiver, Value, Timestamp, GasPrice, Gas, Input
                ) VALUES (
                    $hash, $nonce, $blockHash, $blockNumber, $transactionIndex,
                    $account, $receiver, $value, $timestamp, $gasPrice, $gas, $input
                )`, {
                $hash: _transaction.hash,
                $nonce: _transaction.nonce,
                $blockHash: _transaction.blockHash,
                $blockNumber: _transaction.blockNumber,
                $transactionIndex: _transaction.transactionIndex,
                $account: _transaction.from,
                $receiver: _transaction.to,
                $value: _transaction.value,
                $timestamp: _transaction.timestamp,
                $gasPrice: _transaction.gasPrice,
                $gas: _transaction.gas,
                $input: _transaction.input
            }, function (err) {
                if (err) {
                    console.error(err)

                    /* Disable scanning. */
                    self.isScanningEnabled = false

                    /* Initialize ipc renderer. */
                    const ipc = require('electron').ipcRenderer

                    /* Send message request. */
                    ipc.send('open-error-dialog', 'Scanner', err.message)

                    /* Terminate processing. */
                    return
                }

                /* Validate successful update. */
                if (this.changes === 1) {
                    /* Update the scanning state (older scan). */
                    self._updateScanner(
                        self.latestScannedBlock, _transaction.blockNumber)

                    /* Initialize ipc renderer. */
                    const ipc = require('electron').ipcRenderer

                    /* Send message request. */
                    ipc.send('open-message-dialog', 'Scanner',
                        'Transaction added to db\n' + _transaction.hash)
                }
            })

            db.close()
        },
        _updateScanner: function (_latestBlock, _oldestBlock) {
            /* Localize this. */
            const self = this

            const sqlite3 = require('sqlite3').verbose()
            const path = require('path')

            /* Initailize database connection. */
            const db = new sqlite3.Database(path.join(__static, '/db/ropsten.db'))

            /* Update the scanning record. */
            db.run(`
                UPDATE
                    Scanner
                SET
                    LatestBlock = $latestBlock,
                    OldestBlock = $oldestBlock
                WHERE
                    Account = $account`, {
                $account: self._address,
                $latestBlock: _latestBlock,
                $oldestBlock: _oldestBlock
            }, function (err) {
                if (err) return console.error(err)

                /* Update state. */
                self.latestScannedBlock = _latestBlock
                self.oldestScannedBlock = _oldestBlock

                console.log('Scanner has been updated to ' +
                        _latestBlock + ' / ' + _oldestBlock)
            })

            db.close()
        }
    }
}
</script>
