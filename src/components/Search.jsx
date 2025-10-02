import { useState } from "react";

export default function Search({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery.trim());
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);

    // If the input is cleared, trigger search with empty query to show all movies
    if (value === '') {
      onSearch('');
    }
  };

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSearch} className="w-full max-w-md">
        <div className="flex items-center w-full bg-white rounded-full shadow-md px-4 py-2">
          <button type="submit" className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-gray-500 hover:text-gray-700 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>

          <input
            type="text"
            value={searchQuery}
            onChange={handleInputChange}
            placeholder="Search for movies..."
            className="flex-1 ml-3 bg-transparent outline-none text-gray-700 placeholder-gray-400"
          />
        </div>
      </form>
    </div>
  );
}