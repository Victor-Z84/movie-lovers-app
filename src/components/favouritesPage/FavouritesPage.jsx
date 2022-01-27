import React, { useState, useEffect } from 'react';
// import MovieCard from '../movieCard/MovieCard';
import MovieInfoCard from '../movieInfoCard/MovieInfoCard';

import "./FavouritesPage.scss";

function FavouritesPage () {

    // состояние для избранных фильмов
    const [movies, setMovies] = useState([]);

    // состояния для модального окна с подробной информацией
    const [selectedMovie, onMovieSelect] = useState();

    useEffect(() => {
        const getFavouritesMovies = JSON.parse(
            localStorage.getItem('favourites-list')
        );
        setMovies(getFavouritesMovies)
    }, [movies]);

    return (
        <>
            <div className="favourites-page">
            
                <h2 className="favourites-page__title">Your collection of favorites films and series</h2>
                <div className='favourites-movie-list'>
                    {/* Тут пока есть вопросы как будут залетать и рендериться фильмы из LocalStorage */}

                    {/* {movies.map((movie) => 
                        <MovieCard
                            key={movie.imdbID}
                            movie={movie}
                            onMovieSelect={onMovieSelect}
                        />
                    )} */}
                </div>
                {selectedMovie && <MovieInfoCard 
                selectedMovie={selectedMovie}
                onMovieSelect={onMovieSelect}
                />}
            </div>
        </>
    );
}

export default FavouritesPage;