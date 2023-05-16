import { ethers } from 'ethers'
import { EthersAdapter, SafeFactory, SafeAccountConfig } from '@safe-global/protocol-kit'
require("dotenv").config()

const createSafe = async () => {
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

  const safeSdkOwner1 = await safeFactory.deploySafe({ safeAccountConfig })
  const safeAddress = await safeSdkOwner1.getAddress()

  console.log('Your Safe has been deployed:')
  console.log(`https://goerli.etherscan.io/address/${safeAddress}`)
  console.log(`https://app.safe.global/gor:${safeAddress}`)
}

// Call the createSafe function
createSafe()
