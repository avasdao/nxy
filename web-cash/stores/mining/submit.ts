/* Import modules. */
import {
    decodeAddress,
    encodeAddress,
} from '@nexajs/address'

import {
    ripemd160,
    sha256,
} from '@nexajs/crypto'

/* Import library modules. */
import { getCoins } from '@nexajs/purse'

import { getTip } from '@nexajs/rostrum'

import {
    getTokens,
    sendTokens,
} from '@nexajs/token'

import {
    binToHex,
    hexToBin,
} from '@nexajs/utils'

/* Import (individual) modules. */
import {
    encodeDataPush,
    encodeNullData,
    OP,
} from '@nexajs/script'

// nexa:tp0jg4h6gj5gcj5rrf9h6xclxstk52dr72yyttmrn6umrjyd6sqqqsy86tk9q
const NXY_ID_HEX = '5f2456fa44a88c4a831a4b7d1b1f34176a29a3f28845af639eb9b1c88dd40000' // NXY

const POLYMORPH_HEX = '76009c630500f2052a010320fd0051023905148c26e10aa399c5e2d4ff7c449c7279a5b5708f0f08ffffffffffffff008103ffff00815854c0c7517f7c76010087636d00677f7501207f7568c0cdc0c788c45279a169c47b9c6353cd517f7c76010087636d00677f7501207f756881009d685a7aa9557a88c0c85a7a7c7e5a7a7ea7a9577f7501007e81567a6351b27554795379965479a46ea1697567765579a169681480631ec9fe69de771ccc67adce8dd81b2225259051cd827751cd7c0114947f7788040084d71751cd517f7c76010087636d00677f77517f7c76010087636d00677f75816868a16951cd517f7c76010087636d00677f7501207f7568527988557a567a968b567a7c965853797eea9d52cd517f7c76010087636d00677f7501207f75687b886d6d7567519d14bbbc1d4bd17736410896da4e12cd686864e7038b51c7517f7c76010087636d00677f75820120876375006868a98868'

/* Initialize globals. */
let coins
let contractAddress
let contractCoins
let contractTokens
let contractUnspent
let nullData
let parsed
let platformAddress
let publicKey
let publicKeyHash
let prefix
let miningAddress
let providerAddress
let receivers
let response
let tokenid
let tokenidHex
let tokens
let txResult


/**
 * Submit Mining Candidate
 *
 */
export default async function (_wallet, _miner, _candidate) {
    let allCoins
    let allTokens
    let argsData
    let baseServiceFee
    let blockHeight
    let blockHeightScript
    let contractCoins
    let contractScript
    let constraintData
    let constraintHash

    let delegateConstraint

    let fee
    let headersTip
    let lockingScript
    let lockTime

    let namespace

    let providerPubKeyHash

    let rate

    let scriptData
    let scriptHash
    let scriptPubKey
    let sellerPubKeyHash
    let tradeCeiling
    let tradeFloor

    let unlockingScript
    let unspentTokens
    let userData

    console.log('WALLET', _wallet)

    prefix = 'nexa'

    /* Build script public key. */
    scriptPubKey = new Uint8Array([
        OP.ZERO, // groupid or empty stack item
        OP.ONE, // script template (type)
        ...encodeDataPush(hexToBin(_miner)), // FIXME why convert???
    ])
    console.info('\nSCRIPT PUBLIC KEY', binToHex(scriptPubKey))

    /* Encode the (target) mining address. */
    miningAddress = encodeAddress(
        prefix,
        'TEMPLATE',
        scriptPubKey,
    )
    console.info('\n(MINING) ADDRESS', miningAddress)

    /* Set provider address. */
    // FIXME Retrieve this value from the enclave.
    providerAddress = 'nexa:nqtsq5g5sp33aj07d808w8xvv7kuarwcrv3z2fvskw2ej7dj'
    console.info('\n(PROVIDER) ADDRESS', providerAddress)

    /* Set contract script. */
    contractScript = hexToBin(POLYMORPH_HEX)
    console.info('\nCONTRACT SCRIPT', binToHex(contractScript))

    /* Set namespace. */
    // NOTE: We MUST truncate the OP_RETURN prefix.
    namespace = encodeNullData('POLYPOW01').slice(2)
    console.log('NAMESPACE', binToHex(namespace))

    /* Build locking script. */
    // NOTE: The NexScript v0.1.0 compiler generates a less-than optimized
    //       version of this (script) contract (there is an unnecessary
    //       addition of `OP_SWAP`).
    lockingScript = new Uint8Array([
        ...encodeDataPush(namespace),
        OP.DROP,
        OP._1NEGATE,
        OP.PLACE,
        OP.HASH160,
        OP.FROMALTSTACK,
        OP.EQUALVERIFY,
        // NOTE: All Script parameters [...] MUST be inserted here
        //       during transaction execution (as per `OP_EXEC` specs).
        //       Add `OP.FROMALTSTACK` calls equal to the
        //       # of *hidden* constraints.
        OP.EXEC,
    ])
    console.info('\nDELEGATE TEMPLATE', binToHex(lockingScript))

    /* Calculate script hash. */
    scriptHash = ripemd160(sha256(lockingScript))
    console.log('\nTEMPLATE HASH', binToHex(scriptHash))

    /* Calculate delegate constraint. */
    delegateConstraint = ripemd160(sha256(contractScript))
    console.log('DELEGATE CONSTRAINT', binToHex(delegateConstraint))

    /* Build script public key. */
    scriptPubKey = new Uint8Array([
        OP.ZERO, // groupid or empty stack item
        ...encodeDataPush(scriptHash), // script hash
        OP.ZERO, // arguments hash or empty stack item
        // NOTE: Insert other constraints here...
        ...encodeDataPush(delegateConstraint), // *** DELEGATE CONSTRAINT MUST BE THE LAST DATA PUSH, LEFT AT THE TOP OF THE STACK ***
    ])
    console.info('\nSCRIPT PUBLIC KEY', binToHex(scriptPubKey))

    /* Encode the public key hash into a P2PKH nexa address. */
    contractAddress = encodeAddress(
        prefix,
        'TEMPLATE',
        scriptPubKey,
    )
    console.info('\n(CONTRACT) ADDRESS', contractAddress)

    /* Set unlocking script. */
    // NOTE: Index of (executed) contract method.
    unlockingScript = new Uint8Array([
        OP.ZERO, // Script template placeholder

        /* Contract Parameters */
        OP.ZERO, // contract function index
        ...encodeDataPush(hexToBin('0b500c7d2dfcbb5dc8c5fb218f33ec5da451a22d')), // bytes20 access HASH160<"Merhaba Satoshi!">
        ...encodeDataPush(_miner), // bytes20 miner
        ...encodeDataPush(_candidate), // bytes32 candidate

        OP.FOUR, // # params
        OP.ZERO, // # returns
        ...encodeDataPush(contractScript),
    ])
    // console.log('UNLOCKING', binToHex(unlockingScript));

    /* Retrieve (unspent) coins. */
    coins = await getCoins(_wallet.wif)
        .catch(err => console.error(err))
    console.log('\nCOINS', coins)

    /* Retrieve (unspent) tokens. */
    contractTokens = await getTokens(_wallet.wif, scriptPubKey)
        .catch(err => console.error(err))
    console.log('\nCONTRACT TOKENS', contractTokens)

    /* Validate tokens. */
    if (contractTokens.length) {
        // FOR DEV PURPOSES ONLY -- take the LARGEST input
        contractTokens = [contractTokens.sort((a, b) => Number(b.tokens) - Number(a.tokens))[0]]
        // FOR DEV PURPOSES ONLY -- add scripts
        contractTokens[0].locking = lockingScript
        contractTokens[0].unlocking = unlockingScript
    }
    console.log('\n(CONTRACT) UNSPENT', contractTokens)

    /* Calculate the total balance of the unspent outputs. */
    // FIXME: Add support for BigInt.
    unspentTokens = contractTokens
    // unspentTokens = allTokens
        .reduce(
            (totalValue, unspentOutput) => (totalValue + unspentOutput.tokens), BigInt(0)
        )
    console.log('\nUNSPENT TOKENS', unspentTokens)


    /* Initialize receivers. */
    receivers = []

    /* Add contract. */
    // NOTE: Only the Manager can set the contract to Output #0
    receivers.push({
        address: contractAddress,
        tokenid: NXY_ID_HEX, // TODO Allow auto-format conversion.
        tokens: BigInt(0xd000000000000000), // Mint + Baton permissions
    })

    /* Add tribute. */
    receivers.push({
        address: providerAddress,
        tokenid: NXY_ID_HEX, // TODO Allow auto-format conversion.
        tokens: BigInt(400000000),
    })

    /* Add mining reward. */
    receivers.push({
        // address: miningAddress, // TODO Add support for 3rd-party wallets.
        address: _wallet.address,
        tokenid: NXY_ID_HEX, // TODO Allow auto-format conversion.
        tokens: BigInt(4600000000),
    })

    // NOTE: Change MUST be last output.
    receivers.push({
        address: _wallet.address,
    })
    console.log('\n  Receivers:', receivers)

    /* Reques header's tip. */
    headersTip = await getTip()

    lockTime = headersTip.height
    // console.log('LOCK TIME', lockTime)
// return 'WAIT!!'
    /* Send UTXO request. */
    response = await sendTokens({
        coins,
        tokens: contractTokens,
        receivers,
        lockTime,
        sequence: 0x01,
    })
    console.log('Send UTXO (response):', response)

    try {
        txResult = JSON.parse(response)
        console.log('TX RESULT', txResult)

        if (txResult.error) {
            console.error(txResult.error)
        }
    } catch (err) {
        console.error(err)
    }

    return txResult
}
