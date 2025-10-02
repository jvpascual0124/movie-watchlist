export default function MovieCard({ movie }) {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "/no-image.jpg";

  return (
    <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transform transition duration-300 w-full max-w-60 mx-auto">

      <img
        src={posterUrl}
        alt={movie.title}
        className="w-full h-72 sm:h-80 object-cover"
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold text-white truncate">
          {movie.title}
        </h3>
        <p className="text-sm text-gray-400">
          {movie.release_date?.split("-")[0]}
        </p>

        <div className="flex justify-between items-center mt-4">
          <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded-full hover:bg-blue-700 transition cursor-pointer">
            Add To Watchlist
          </button>
          <button className="px-3 py-1 text-sm bg-red-600 text-white rounded-full hover:bg-red-700 transition cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}