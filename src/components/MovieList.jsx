import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

export default function MovieList() {
    const [errorMessage, setErrorMessage] = useState('');
    const [movieList, setMovieList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const API_KEY = import.meta.env.VITE_API_KEY;
    const API_OPTIONS = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_KEY}`
        }
    }

    const fetchMovies = async () => {
        setIsLoading(true);
        setErrorMessage('');

        try {
            const endpoint = `${BASE_URL}/discover/movie?sort_by=popularity.desc`;
            const response = await fetch(endpoint, API_OPTIONS)

            if (!response.ok) {
                throw new Error('Failed to fetch movies.')
            }

            const data = await response.json();

            if (data.response === 'False') {
                setErrorMessage(data.error || 'Failed to fetch movies.');
                setMovieList([]);
                return;
            }

            setMovieList(data.results || []);
        } catch (error) {
            console.log(`Error fetching movies: ${error}`);
            setErrorMessage('Error fetching movies. Please try again later.')
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchMovies();
    }, []);

    return (
        <div className="movie-list-container mt-20 mb-20">
            {isLoading ? (
                <p className="text-white">Loading...</p>
            ) : errorMessage ? (
                <p className="text-red-500">{errorMessage}</p>
            ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {movieList.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            )}
        </div>
    );
}
