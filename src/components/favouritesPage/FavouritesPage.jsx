import React, { useState, useEffect } from 'react';
import { withTranslator } from '../../hoc/withTranslator';
import MovieInfoCard from '../movieInfoCard/MovieInfoCard';
import FavouriteMovieCard from '../favouriteMovieCard/FavouriteMovieCard';
import RemoveFavourites from '../movieCard/removeFavourites/RemoveFavourites';

import "./FavouritesPage.scss";

function FavouritesPage ({ translate }) {

    // состояние для избранных фильмов
    const [favourites, setFavourites] = useState([]);

    // состояния для модального окна с подробной информацией
    const [selectedMovie, onMovieSelect] = useState();


    useEffect(() => {
        const movieFavourites = JSON.parse(
            localStorage.getItem('favourites-list')
        );
        setFavourites(movieFavourites);
    }, []);

    const saveToLocalStorage = (items) => {
        localStorage.setItem('favourites-list', JSON.stringify(items));
    };

    const removeFavouriteMovie = (movie) => {
        const newFavouriteList = favourites.filter((favourite) => favourite.imdbID !== movie.imdbID);
        setFavourites(newFavouriteList);
        saveToLocalStorage(newFavouriteList);
    }

    return (
        <>
            <div className="favourites-page">
                <h2 className="favourites-page__title">{translate("favourite.page.title")}</h2>
                <div className='favourites-movie-list'>
                    
                    {favourites.map((favourite) =>
                        <FavouriteMovieCard 
                        key={favourite.imdbID} 
                        favourite={favourite}
                        onMovieSelect={onMovieSelect}

                        removeComponent={RemoveFavourites}
                        handleRemoveClick={removeFavouriteMovie}
                        
                        />
                        )
                    }
                </div>
                {selectedMovie && <MovieInfoCard 
                selectedMovie={selectedMovie}
                onMovieSelect={onMovieSelect}
                />}
            </div>
        </>
    );
}

export default withTranslator(FavouritesPage);