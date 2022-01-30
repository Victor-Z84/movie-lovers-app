import React, { useState } from "react";

import "./FavouriteMovieCard.scss";

const FavouriteMovieCard = (props) => {
    
    const RemoveComponent = props.removeComponent;

    // состояние для кнопки УДАЛИТЬ ИЗ ИЗБРАННОГО
    const [deleteMovie, setDeleteMovie] = useState(true);
 
    const { Title, Year, imdbID, Type, Poster } = props.favourite;

    return(
        <>
            <div className="favourite-movie-card">
                <div className="favourite-movie-card__poster" onClick={() => props.onMovieSelect(imdbID)}>
                    <img className="favourite-movie-card__img" src={Poster} alt="movie"/>
                </div>
                <div className="favourite-movie-card__description">
                    <p className="favourite-movie-card__title">{Title}</p>
                    <div className="favourite-movie-card__info">
                        <div className="favourite-movie-card__year">
                            <span>Year: {Year}</span>
                        </div>
                        <div className="favourite-movie-card__type">
                            <span >Type: {Type}</span>
                        </div>
                    </div>
                </div>
                <div className="favourite-movie-card__btn" onClick={() => {props.handleRemoveClick(props.favourite); setDeleteMovie(false)}}>
                    {deleteMovie && <RemoveComponent/>}
                </div>
            </div>
        </>
    );
};

export default FavouriteMovieCard;