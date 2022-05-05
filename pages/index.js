import Head from 'next/head'
import Link from 'next/link'
import AvailableDomains from '../utils/availableDomains'
import { DomainButton } from '../components/DomainButton'
import { SearchBar } from '../components/SearchBar'

export default function Home({
  walletAddress,
  domainRef,
  handleClick,
  handleKeyPress,
  handleDisconnectWallet,
  handleConnectWallet,
}) {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* left  */}
      <div className="flex h-screen flex-col lg:grid lg:grid-cols-10">
        <div className="bg-gradient-to-br from-violet-300 to-indigo-500 pt-8 lg:col-span-4 lg:pt-0">
          <div className="flex flex-col items-center py-2 md:pt-8 lg:min-h-screen ">
            <div className="overflow-hidden rounded-xl">
              <div className=" flex flex-col items-center justify-center space-y-4 px-4 py-10">
                <h2 className=" trasnsition rounded-lg py-2 px-4  text-5xl font-bold text-indigo-100 md:text-6xl lg:px-5 lg:py-3">
                  NFT Domains
                </h2>
                <div className="bg-gradient-to-r from-purple-600 to-violet-700 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                  No Renewal Fees Ever
                </div>
              </div>
            </div>
            <div className="mb-4 overflow-hidden lg:mb-2">
              <img
                className=" h-[12rem] w-[12rem] object-cover transition duration-300 hover:rotate-12 lg:h-[22rem] lg:w-[22rem]"
                src="./dapp-logo.svg"
                alt=""
              />
            </div>
            <div className="space-y-2 p-5 text-center ">
              <h4 className=" text-md font-medium text-indigo-100 lg:text-3xl ">
                Building decentralized digital identities for the world.
              </h4>
            </div>
          </div>
        </div>

        {/* Right  */}

        <div className="flex flex-1 flex-col bg-gradient-to-br from-indigo-200 to-violet-700 p-12 lg:col-span-6  ">
          {/* Header  */}
          <header className=" flex items-center justify-between ">
            <Link href="/mydomains">
                <h3 className="cursor-pointer transition duration-300 ease-in hover:bg-indigo-500 px-2 py-1 rounded-md text-lg font-bold text-indigo-500 hover:text-indigo-100  md:text-xl">
                  My Domains
                </h3>
            </Link>
            <button
              onClick={() =>
                walletAddress ? handleDisconnectWallet() : handleConnectWallet()
              }
              className="trasnsition rounded-lg bg-indigo-300 py-2 px-4 text-sm font-bold text-indigo-500 duration-300 hover:bg-indigo-500 hover:text-indigo-200 md:px-5 md:py-3 md:text-lg"
            >
              {walletAddress ? 'Disconnect Wallet' : 'Connect Wallet'}
            </button>
          </header>

          <hr className="border-1 my-4 border-indigo-500 " />

          <div className="my-4 text-center text-sm font-normal text-indigo-100 lg:text-lg ">
            <p className="mb-3">You are Logged In with Wallet</p>
            {walletAddress && (
              <span className="ml-2 rounded-xl bg-indigo-200 px-2 py-1 text-sm font-bold text-indigo-600 lg:text-lg">
                {walletAddress?.substring(0, 8)}...
                {walletAddress?.substring(walletAddress?.length - 7)}
              </span>
            )}
          </div>

          <SearchBar
            domainRef={domainRef}
            handleClick={handleClick}
            handleKeyPress={handleKeyPress}
          />
          {/* Content  */}
          <div className="mt-10 flex flex-col items-center space-y-6 md:mt-16 md:justify-center md:space-y-4">
            <h1 className="text-3xl font-bold text-indigo-100 lg:text-3xl lg:font-extrabold ">
              Available List of Domains
            </h1>
            <div className="grid w-full grid-cols-2 gap-8 rounded-md border-[5px] border-violet-800 px-4 py-4 md:grid-cols-4 ">
              {AvailableDomains.map((item) => (
                <DomainButton key={item.text} text={item.text} price={item.price} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
