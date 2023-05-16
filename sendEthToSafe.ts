
import { ethers } from 'ethers'
import { EthersAdapter, SafeFactory, SafeAccountConfig } from '@safe-global/protocol-kit'
require("dotenv").config()


const safeAddress = "0x8fb0d99aE852aaFc8b26D0bdAf3B65547260De26"

const sendEthToSafe = async () => {
  // Set up your Ethereum provider
  const RPC_URL='https://eth-goerli.public.blastapi.io'
  const provider = new ethers.providers.JsonRpcProvider(RPC_URL)

  // Initialize signers
  const owner1Signer = new ethers.Wallet(process.env.OWNER_1_PRIVATE_KEY!, provider)
  const owner2Signer = new ethers.Wallet(process.env.OWNER_2_PRIVATE_KEY!, provider)
  const owner3Signer = new ethers.Wallet(process.env.OWNER_3_PRIVATE_KEY!, provider)

  const ethAdapterOwner1 = new EthersAdapter({
    ethers,
    signerOrProvider: owner1Signer
  })


  const safeFactory = await SafeFactory.create({ ethAdapter: ethAdapterOwner1 })

  const safeAccountConfig: SafeAccountConfig = {
    owners: [
      await owner1Signer.getAddress(),
      await owner2Signer.getAddress(),
      await owner3Signer.getAddress()
    ],
    threshold: 2,
    // ... (Optional parameters such as fallbackHandler, modules, etc.)
  }

    const safeAmount = ethers.utils.parseUnits('0.01', 'ether').toHexString()

    const transactionParameters = {
    to: safeAddress,
    value: safeAmount
    }

    const tx = await owner1Signer.sendTransaction(transactionParameters)

    console.log('Sending Eth to safe.')
    console.log(`Deposit Transaction: https://goerli.etherscan.io/tx/${tx.hash}`)
}

sendEthToSafe()
