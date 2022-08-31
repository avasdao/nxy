# Asset Exchange

[https://nexa.exchange](https://nexa.exchange)

Nexaverse makes it quick and easy to exchange your assets (incl. cross chain).

__The following asset pairs are currently supported:__
1. NEX/AVAX
2. NEX/BCH
3. NEX/BTC
4. NEX/USDC
5. NEX/USDT

## Market Orders

__NOTE: During ALPHA stage, expect trades to incur above average slippage rates.__

Place market orders to easily and quickly trade your favorite asset pairs.

## Limit Orders

__NOTE: During ALPHA stage, ALL order will automatically expire after 72 hours.__

Trade like a PRO!

## Non-custodial Wallet

All accounts are created using a 3-of-5 multiple signature vault. Account signatures are held by the following public keys:
1. User wallet
2. User wallet or two-factor authentication
3. Shared key
4. Exchange (HSM) enclave _(located in the US)_
5. Exchange (HSM) enclave _(located in the UK)_

### User wallet

This public key is managed by the Nexaverse application.

### Two-factor authentication

Users have the option of multiple 2FA methods:
1. Google Authenticator
2. Yubikey

### Shared key

This key is known to both the User and the Exchange.

The Exchange holds ALL shared keys on a secure container protected by multiple hardware and software firewalls.

In the event that the Exchange keys are compromised, automated protection & recovery procedures will be triggered.

### Exchange (HSM) enclave

These Hardware Security Modules (HSMs) are hardened, physical devices to protect the private keys held by them.

## Web Wallet

A web-based wallet is available at [https://nexa.exchange](https://nexa.exchange).

App users can securely scan into this application to fully access their accounts.

__PLEASE DO NOT USE THIS WALLET ON PUBLIC DEVICES__
