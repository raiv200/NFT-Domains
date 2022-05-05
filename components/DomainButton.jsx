import React from 'react'
import { CircleIcon } from './CircleIcon'

export  const  DomainButton = ({ text, price }) => {
  return (
    <button type="button" className="button w-40 col-span-1 shadow-2xl">
      <div className="flex flex-col items-center justify-center space-y-3 ">
        <p className="text-2xl font-bold text-indigo-100">{text}</p>
        <div className="flex items-center justify-center space-x-1 sm:ml-3">
          <CircleIcon />
          <p className="text-md font-mono font-extrabold text-indigo-100 md:text-lg ">
            {price}
            <span className="text-sm ml-1 font-bold text-indigo-100 md:text-md">
            ꜩ
            </span>
          </p>
        </div>
      </div>
    </button>
  )
}
