export default function Search() {
  return (
    <div className="flex justify-center">
      <div className="flex items-center w-full max-w-md bg-white rounded-full shadow-md px-4 py-2">

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 text-gray-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>

        <input
          type="text"
          placeholder="Search for movies..."
          className="flex-1 ml-3 bg-transparent outline-none text-gray-700 placeholder-gray-400"
        />
      </div>
    </div>
  );
}
