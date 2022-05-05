import { SearchIcon } from '@heroicons/react/outline'

export const SearchBar = ({ handleClick, handleKeyPress, domainRef }) => {
  return (
    <div className="align-items mx-auto mt-10 flex justify-between rounded-lg bg-violet-200 px-2 py-2 transition duration-300 ease-in sm:w-[400px] md:mt-6 md:w-[730px] md:py-3 md:px-4">
      <div className="flex items-center justify-center space-x-4 ">
        <SearchIcon className="mt-1 ml-2 h-6 w-6 text-violet-600 " />
        <input
          ref={domainRef}
          onKeyPress={handleKeyPress}
          name="search"
          placeholder="Search ....."
          className=" rounded-md md:w-[500px] bg-violet-200 px-2 py-2 text-lg font-semibold leading-6 text-violet-700 placeholder-violet-600 transition duration-300 ease-in focus:outline-none "
        />
      </div>
      <button
        onClick={handleClick}
        className=" flex h-10 items-center justify-center rounded-md bg-violet-700 px-4 py-2  font-mono text-lg font-medium text-violet-200 shadow-xl transition duration-300 ease-in hover:bg-violet-400 hover:text-violet-900 md:px-6 md:py-6 "
      >
        Search
      </button>
    </div>
  )
}
