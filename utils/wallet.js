import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import config from "./config";

// const storageAPI="https://api.ithacanet.tzkt.io/v1/contracts/KT1PaxgyVLyWJ7zBNWikVuiJ3zQorgqxB722/storage";

const preferredNetwork = "ithacanet";
const options = {
  name: "NFTDomains",
  iconUrl: "https://tezostaquito.io/img/favicon.png",
  preferredNetwork: preferredNetwork,
};
const rpcURL = "https://ithacanet.smartpy.io/";
const wallet = new BeaconWallet(options);

const getActiveAccount = async () => {
  return await wallet.client.getActiveAccount();
};

const getStorage = async () => {
  const wallet = new BeaconWallet(options);
  const response = await checkIfWalletConnected(wallet);

  if (response.success) {
         const tezos = new TezosToolkit(rpcURL);
         tezos.setWalletProvider(wallet);
         const contract = await tezos.wallet.at(config.contractAddress);
         const storage = contract.storage();
         return storage;
  }
}

const connectWallet = async () => {
  let account = await wallet.client.getActiveAccount();
  
  if (!account) {
    await wallet.requestPermissions({
      network: { type: preferredNetwork },
    });
    account = await wallet.client.getActiveAccount();
  }
  return { success: true, wallet: account.address };
};

const disconnectWallet = async () => {
  await wallet.disconnect();
  return { success: true, wallet: null };
};

const checkIfWalletConnected = async (wallet) => {
  try {
    const activeAccount = await wallet.client.getActiveAccount();
    if (!activeAccount) {
      await wallet.client.requestPermissions({
        type: { network: preferredNetwork },
      });
    }
    return {
      success: true,
    };
  } catch (error) {
    return {
      success: false,
      error,
    };
  }
};

export const addDomainName = async (domain , walletAddress) => {
     const wallet = new BeaconWallet(options);
     const response = await checkIfWalletConnected(wallet);

  if (response.success) {
    const tezos = new TezosToolkit(rpcURL);
    tezos.setWalletProvider(wallet);
    const contract = await tezos.wallet.at(config.contractAddress);
    const operation = await contract.methods.default(walletAddress ,domain).send();
    const result = await operation.confirmation();
    console.log(result);
  }
};

export {
  wallet,
  getStorage,
  connectWallet,
  disconnectWallet,
  getActiveAccount,
  checkIfWalletConnected,
};
