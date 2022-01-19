import React from "react";

import "./MovieCard.scss";

const MovieCard = (props) => {
 
    const { Title, Year, imdbID, Type, Poster } = props.movie;

    return(
        <>
            <div className="movie-card" onClick={() => props.onMovieSelect(imdbID)} >
                <div className="movie-card__poster">
                    <img className="movie-card__img" src={Poster} alt="movie"/>
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
            </div>
        </>
    );
};

export default MovieCard;