# Nexaverse Network

### ↳ https://nexaverse.net

Operating the most advanced EVM blockchain powered by [Avalanche Subnets](https://docs.avax.network/subnets).

# Table of contents

- [Introduction](#introduction)
  - [Prerequisites](#prerequisites)
  - [Requirements](#requirements)
- [Getting Started](#getting-started)
  - [Building the workspace](#building-the-workspace)


## Introduction

_TBD_

### Prerequisites

- A dedicated computer system (eg. desktop pc, laptop pc, vps).  
_This computer system should be running 24x7x365._

- Basic knowledge of Window or MacOS.  
_We will be using the File Manager and Terminals for your respective platform._

- You should have some knowledge of how to use a Terminal shell.  
_We will need to issue specific commands that cannot be done from the GUI._

### Requirements

- NodeJS >= 16.0.0 must be installed.
- npm >= 8.15.0 must be installed.
- Hardhat >= 2.10.1 must be installed.


## Getting Started

_TBD_


## Ava's Virtual Machine

Ava's Virtual Machine (AvasVM) is an Avalanche Subnet.

https://github.com/avasdao/avasvm

## Application-specific Gas Fees

Gas fees are dynamically adjusted based on the application and the current load on the network.

> It is highly encouraged to migrate to a private Subnet in the case of consistently high gas fees. The Nexaverse Migration Toolkit (NMT) makes the process effortless for both developers and users.


## MetaMask Setup

It takes less than a minute to get setup. First make sure that you have MetaMask installed.

### Network Name

Nexaverse

### RPC Endpoint

↳ https://nexaverse.net/mainnet _(Mainnet)_

↳ https://nexaverse.net/buckhead _(Buckhead Testnet)_

### Chain ID

Chain ID (Mainnet): __0x1c3b | 7227__
> _NOTE: This ID matches the RPC port number used by the Nexa full node._

Chain ID (Testnet): __0x434b | 17227__

### Token

NEX

### Block Explorer

↳ https://nexaverse.info (Mainnet + All Testnets)


## Mainnet

The main network is for production-ready applications.


## Testnets

There are three (3) "official" testnets for Nexaverse.

### Buckhead (Leading Edge)

↳ https://buckhead.nexaverse.net
> _Chain ID (Testnet): __0x434b | 17227___

A perfect replica/clone of the Mainnet architecture and configuration.

### Peachtree (Bleeding Edge)

Designed to test new VM features and configurations.

↳ https://peachtree.nexaverse.net
> _Chain ID (Testnet): __0x | 27227___

### Alpharetta (Infinity Edge)

↳ https://alpharetta.nexaverse.net
> _Chain ID (Testnet): __0x | 37227___

Designed to simulate stress testing the Mainnet.

This network is automatically reset every 72 hours.

__Objectives of this network include:__

- anti-DDoS development
