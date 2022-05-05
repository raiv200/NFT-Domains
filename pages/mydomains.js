import Link from 'next/link'
import React from 'react'

const mydomains = ({
  ownedDomain,
  walletAddress,
  handleConnectWallet,
  handleDisconnectWallet,
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-200 to-violet-700 p-12">
      <header className="pt- mx-auto mb-4 flex items-center justify-between md:mb-10 md:w-[1200px] lg:pt-2">
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
      {ownedDomain  ? (
        <div className="mx-auto mt-12 sm:w-[400px] md:mt-16 md:w-[740px]">
          <p className="mb-8 text-lg font-medium text-violet-600 md:text-3xl">
            Owned Domains
          </p>
          <div className="mt-2  flex items-center justify-between rounded-md bg-violet-200 p-4 px-4 py-10 shadow-2xl">
            <div className="ml-4 flex flex-col space-y-2">
              <h2 className="text-md font-bold text-violet-800 md:text-2xl">
                {ownedDomain ? ownedDomain : ' No domain bought yet.'}
              </h2>
            </div>
            <div>
              <div className="my-4 text-center text-sm font-normal text-indigo-100 lg:text-lg ">
                {walletAddress && (
                  <span className="ml-2 rounded-xl bg-indigo-200 px-2 py-1 text-sm font-bold text-indigo-600 lg:text-lg">
                    {walletAddress?.substring(0, 8)}...
                    {walletAddress?.substring(walletAddress?.length - 7)}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="pt-40 flex flex-col justify-center items-center ">
          <svg
            className="-ml-1 mr-3 h-8 w-8 animate-spin text-indigo-800"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <div className=" mt-10 mx-auto ">
          <h2 className="text-md font-bold  text-violet-800 md:text-3xl">
              Can't find your domain.
              Please buy a domain name before viewing  My Domains page.
          </h2>
          </div>
        </div>
      )}
    </div>
  )
}

export default mydomains
