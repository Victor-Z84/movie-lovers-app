import React, { useEffect, useState } from 'react';
import axios from "axios";
import { API_KEY } from '../moviePage/MoviePage';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';

import "./MovieInfoCard.scss";


const MovieInfoCard = (props) => {

    const [movieInfo, setMovieInfo] = useState();
    const { selectedMovie } = props;

    useEffect(() => {
        axios.get(
            `https://www.omdbapi.com/?i=${selectedMovie}&apikey=${API_KEY}`,
        ).then((response) => setMovieInfo(response.data));
    }, [selectedMovie]);
 

    return(

        <div className="movie-info-card">
            <div className="movie-info-card__title">
                <div className="movie-info-card__name">{movieInfo?.Title}</div>
                <div className="movie-info-card__btn" onClick={() => props.onMovieSelect()}>
                    <p>X</p>
                </div>
            </div>
            <div className="movie-info-card__description">
                <div className="movie-info-card__poster">
                    <img className="movie-info-card__img" src={movieInfo?.Poster} alt={movieInfo?.Title}/>
                </div>
                <div className="movie-info-card__info">
                    <p>Type: <span>{movieInfo?.Type}</span></p>
                    <p>IMBD Rating: <span>{movieInfo?.imdbRating}</span></p>
                    <p>Genre: <span>{movieInfo?.Genre}</span></p>
                    <p>Year: <span>{movieInfo?.Year}</span></p>
                    <p>Director: <span>{movieInfo?.Director}</span></p>
                    <p>Country: <span>{movieInfo?.Country}</span></p>
                    <p>Language: <span>{movieInfo?.Language}</span></p>
                    <p>Runtime: <span>{movieInfo?.Runtime}</span></p>
                    <p>Released: <span>{movieInfo?.Released}</span></p>
                    <p>Actors: <span>{movieInfo?.Actors}</span></p>
                    <p>Plot: <span>{movieInfo?.Plot}</span></p>
                </div>
            </div>
            {/* <div className="movie-info-card__fav-btn">
                <Button 
                    onClick={() => console.log('Добавлено в избранное!')}
                    variant="outlined"
                    color="error"
                    fullWidth="true"
                >
                    <FavoriteIcon className="movie-info-card__fav-icon"/>
                </Button>
            </div> */}
        </div>
    );
};

export default MovieInfoCard;

