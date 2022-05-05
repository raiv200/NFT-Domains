import React from 'react'
import { CircleIcon } from './CircleIcon';
import AvailableDomains from "../utils/availableDomains";

export const BuyDomain = ({ userDomain, buyDomainName }) => {
  
  let domainPrice;
  let isValidDomain= false;
  
 AvailableDomains.map((item) => {

  if(userDomain.includes(item.text)){
    isValidDomain= true;
    domainPrice = item.price;
  }
})


  return (
    <div className="mx-auto mt-12 sm:w-[400px] md:mt-16 md:w-[740px]   ">
      <p className="mb-8 text-lg font-medium text-violet-100 md:text-2xl">
        Endings for "{userDomain}"
      </p>

      <div className="mt-2 flex items-center justify-between rounded-md bg-violet-200 p-4 px-4 py-10">
        {isValidDomain? (
          <>
            <div className="ml-4 flex flex-col space-y-2">
              <h2 className="text-lg font-bold text-violet-800 md:text-2xl">
                {userDomain}
              </h2>
              <div className="flex items-center justify-center space-x-1 ">
                <CircleIcon />
                <p className="md:text-md rounded-md bg-green-300 px-2 py-1 text-center text-sm font-semibold text-green-700 ">
                  Available
                </p>
              </div>
            </div>
            <div className="flex flex-col space-y-2 ">
              <p className="flex items-center justify-center text-md font-mono font-extrabold text-indigo-500 md:text-lg ">
                Price: 
                <span className="md:text-lg ml-1 text-sm  font-bold text-indigo-700">
                {domainPrice} ꜩ
                </span>
              </p>
              <button
                onClick={buyDomainName}
                type="button"
                className="trasnsition rounded-lg bg-indigo-300 py-2 px-4 text-sm font-bold text-indigo-500 duration-300 hover:bg-indigo-500 hover:text-indigo-200 md:px-5 md:py-2 md:text-lg "
              >
                Buy Now
              </button>
            </div>
          </>
        ) : (
          <div className=" mx-auto rounded-md bg-violet-200 ">
          <h2 className="text-md font-bold  text-violet-800 md:text-3xl">
           Not a valid Domain
          </h2>
          </div>
        )}
      </div>
    </div>
  )
}
