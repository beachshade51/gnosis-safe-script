# Gnosis Safe

## Introduction
Gnosis Safe is a widely used and highly secure smart contract-based wallet for managing digital assets, particularly in the context of decentralized finance (DeFi) and blockchain applications. It is designed to provide users with enhanced security, control, and usability when interacting with cryptocurrencies and decentralized applications (dApps).

The Gnosis Safe wallet is built on the Ethereum blockchain and operates as a multi-signature wallet. This means that it requires multiple parties, known as "owners," to authorize and confirm transactions before they can be executed. The number of required confirmations can be customized based on the users' preferences and security needs, offering flexibility and protection against unauthorized access or malicious actions.

### Setup

``` npx ts-node <filename> ```

## Notes
- Gnosis Safe has a well documented code: https://docs.safe.global/
- check docs to get started: https://docs.safe.global/learn/quickstart/different-ways-to-create-a-safe#safe-core-sdk
- https://github.com/safe-global/safe-core-sdk/tree/main/packages/protocol-kit <br>
The following steps show how to set up the Protocol Kit, deploy a new Safe, create a Safe transaction, generate the required signatures from owners and execute the transaction. However, using the Protocol Kit alone will not allow for the collection of owner signatures off-chain. To do this and be able to see and confirm the pending transactions shown in the Safe Web App, it is recommended that you follow this other guide that covers the use of the Protocol Kit, combined with the API Kit. 
