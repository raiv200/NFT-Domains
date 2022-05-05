import Link from 'next/link'
import React from 'react'
import { BuyDomain } from '../components/BuyDomain'
import { SearchBar } from '../components/SearchBar'

const searchDomains = ({
  walletAddress,
  buyDomainName,
  domainRef,
  handleClick,
  handleKeyPress,
  handleDisconnectWallet,
  handleConnectWallet,
  userDomain,
}) => {
  if (!walletAddress) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-violet-300 to-indigo-500 ">
        <p className="t pt-10 text-center text-4xl font-bold text-violet-700 md:text-5xl">
          Please connect your Wallet.
        </p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-300 to-indigo-500 ">
      <header className="mx-auto mb-4 flex items-center justify-between pt-4 md:mb-10 md:w-[1200px] lg:pt-8">
        <Link href="/">
          <h1 className="text-md w-52 cursor-pointer font-semibold text-gray-100 sm:w-80  lg:text-4xl ">
            {'  '}
            <span className="mr-1 text-xl font-extrabold text-indigo-500 decoration-indigo-200  lg:text-5xl">
              NFT
            </span>
            {'  '}
            Domains
          </h1>
        </Link>
        <div className=" flex items-center justify-center space-x-10">
          <div className="my-4 text-center text-sm font-normal text-indigo-100 lg:text-lg ">
            {walletAddress && (
              <span className="ml-2 rounded-xl bg-indigo-200 px-2 py-1 text-sm font-bold text-indigo-600 lg:text-lg">
                {walletAddress?.substring(0, 8)}...
                {walletAddress?.substring(walletAddress?.length - 7)}
              </span>
            )}
          </div>
          <button
            onClick={() =>
              walletAddress ? handleDisconnectWallet() : handleConnectWallet()
            }
            className="trasnsition rounded-lg bg-indigo-300 py-2 px-4 text-sm font-bold text-indigo-500 duration-300 hover:bg-indigo-500 hover:text-indigo-200 md:px-5 md:py-3 md:text-lg"
          >
            {walletAddress ? 'Disconnect Wallet' : 'Connect Wallet'}
          </button>
        </div>
      </header>
      <SearchBar
        domainRef={domainRef}
        handleClick={handleClick}
        handleKeyPress={handleKeyPress}
      />
      {userDomain && (
        <BuyDomain 
        userDomain={userDomain} 
        buyDomainName={buyDomainName} 
        />
      )}
      
    </div>
  )
}

export default searchDomains
