import '../styles/globals.css'
import {
  getStorage,
  connectWallet,
  getActiveAccount,
  disconnectWallet,
} from '../utils/wallet'
import {addDomainName} from "../utils/wallet";
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  const [walletAddress, setWalletAddress] = useState()
  const domainRef = useRef(null)
  const [userDomain, setUserDomain] = useState()
  const [ownedDomain, setOwnedDomain] = useState(" ")

  const handleConnectWallet = async () => {
    const { wallet } = await connectWallet()
    setWalletAddress(wallet)
  }
  const handleDisconnectWallet = async () => {
    const { wallet } = await disconnectWallet()
    setWalletAddress(wallet)
  }
 
    const handleGetStorage = async () => {
    const  storageData = await getStorage()
    const  domain = storageData.valueMap.get(`"${walletAddress}"`)
    return domain;
    }

  const buyDomainName = async () => {
    await addDomainName(`${userDomain}`, `${walletAddress}`).then(() => router.push("/mydomains"));
   };

  

  useEffect(() => {
    const func = async () => {
      const account = await getActiveAccount()
      if (account) {
        setWalletAddress(account.address);
      }
    }
    func();

  }, [])

if(walletAddress) {
  handleGetStorage().then((item) => setOwnedDomain(item));
  console.log(ownedDomain);
}
  ///// Search Bar functions
 

  function handleClick() {
    setUserDomain(domainRef.current.value)
    router.push('/search-domains')
  }

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      setUserDomain(domainRef.current.value)
      router.push('/search-domains')
    }
  }

  return (
    <Component
      buyDomainName={buyDomainName}
      ownedDomain={ownedDomain}
      walletAddress={walletAddress}
      domainRef={domainRef}
      userDomain={userDomain}
      handleClick={handleClick}
      handleKeyPress={handleKeyPress}
      handleDisconnectWallet={handleDisconnectWallet}
      handleConnectWallet={handleConnectWallet}
      {...pageProps}
    />
  )
}

export default MyApp

