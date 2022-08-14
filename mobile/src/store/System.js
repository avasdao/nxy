/* Import modules. */
import React from 'react'

import { action, makeObservable, observable } from 'mobx'
import { persist } from 'mobx-persist'

/**
 * System Store
 *
 * Manages the application's (system) settings.
 */
class System {
    /* Constructor. */
    constructor() {
        makeObservable(this)

        /* Request quotes. */
        this.requestQuote('AVAX') // Avalanche
        this.requestQuote('BTC') // Bitcoin
        this.requestQuote('ETH') // Ethereum

        /* Set quote update. */
        setInterval(() => {
            /* Request quotes. */
            this.requestQuote('AVAX') // Avalanche
            this.requestQuote('BTC') // Bitcoin
            this.requestQuote('ETH') // Ethereum
        }, 30000)
    }

    /* Initialize (observable) variables. */
    @observable DEBUG = false
    @observable quotes = {}

    /* Initialize (persistent) variables. */
    @persist @observable sessionid = null
    @persist @observable darkMode = false

    /**
     * Request Quote
     *
     * Retrieves the latest USD quote.
     */
    @action.bound
    async requestQuote(_asset) {
        /* Set URL. */
        const url = `https://api.telr.io/v1/ticker/quote/${_asset}`

        /* Request quote. */
        const response = await fetch(url)
            .catch(err => console.error(err))

        /* Decode response. */
        const quote = await response.json()
            .catch(err => console.error(err))
        // console.log('QUOTE', quote)

        /* Save quote. */
        this.quotes[_asset] = quote
    }

    @action.bound
    saveSessionid(_sessionid) {
        this.sessionid = _sessionid
    }

    @action.bound
    saveDarkMode(_darkMode) {
        this.darkMode = _darkMode
    }

    @action.bound
    price(_asset) {
        if (this.quotes[_asset]) {
            return this.quotes[_asset].price
        } else {
            return 0
        }
    }

    @action.bound
    quote(_asset) {
        if (this.quotes[_asset]) {
            return this.quotes[_asset]
        } else {
            return null
        }
    }

}

const Store = new System()
const Context = React.createContext(Store)

/* Export store and context. */
export default {
    Store,
    Context,
}
