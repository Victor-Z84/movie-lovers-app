import React, { useState } from "react";

import "./MovieCard.scss";

const MovieCard = (props) => {
    const FavouriteComponent = props.favouriteComponent;
    const RemoveComponent = props.removeComponent;

    // состояние для кнопки ДОБАВИТЬ В ИЗБРАННОЕ
    const [addMovie, setAddMovie] = useState(true);

    // состояние для кнопки УДАЛИТЬ ИЗ ИЗБРАННОГО
    const [deleteMovie, setDeleteMovie] = useState(false);
 
    const { Title, Year, imdbID, Type, Poster } = props.movie;

    return(
        <>
            <div className="movie-card">
                <div className="movie-card__poster" onClick={() => props.onMovieSelect(imdbID)}>
                    <img className="movie-card__img" src={Poster} alt={Title}/>
                </div>
                <div className="movie-card__description">
                    <p className="movie-card__title">{Title}</p>
                    <div className="movie-card__info">
                        <div className="movie-card__year">
                            <span>Year: {Year}</span>
                        </div>
                        <div className="movie-card__type">
                            <span >Type: {Type}</span>
                        </div>
                    </div>
                </div>
                <div className="movie-card__btn" onClick={() => {props.handleFavouritesClick(props.movie); setAddMovie(false); setDeleteMovie(true)}}>
                    
                    {addMovie && <FavouriteComponent />}
                </div>
                <div className="movie-card__btn" onClick={() => {props.handleRemoveClick(props.movie); setDeleteMovie(false); setAddMovie(true)}}>
                    
                    {deleteMovie && <RemoveComponent />}
                </div>
            </div>
        </>
    );
};

export default MovieCard;