import React from 'react';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';

import "./MovieInfoCard.scss";


const MovieInfoCard = (props) => {
    
    
    // тут будет вызов API выбранного фильма, пока лежат статичные данные
    const selectedMovies = [
        {
            "Title": "The Gentlemen",
            "Year": "2019",
            "Rated": "R",
            "Released": "24 Jan 2020",
            "Runtime": "113 min",
            "Genre": "Action, Comedy, Crime",
            "Director": "Guy Ritchie",
            "Writer": "Guy Ritchie, Ivan Atkinson, Marn Davies",
            "Actors": "Matthew McConaughey, Charlie Hunnam, Michelle Dockery",
            "Plot": "An American expat tries to sell off his highly profitable marijuana empire in London, triggering plots, schemes, bribery and blackmail in an attempt to steal his domain out from under him.",
            "Language": "English, Russian, Spanish, Chinese",
            "Country": "United Kingdom, United States",
            "Awards": "1 win & 4 nominations",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTlkMmVmYjktYTc2NC00ZGZjLWEyOWUtMjc2MDMwMjQwOTA5XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "7.8/10"
                },
                {
                    "Source": "Metacritic",
                    "Value": "51/100"
                }
            ],
            "Metascore": "51",
            "imdbRating": "7.8",
            "imdbVotes": "290,203",
            "imdbID": "tt8367814",
            "Type": "movie",
            "DVD": "N/A",
            "BoxOffice": "$36,471,795",
            "Production": "N/A",
            "Website": "N/A",
            "Response": "True"
        }

    ]

    return(

        <div className="movie-info-card">
            <div className="movie-info-card__title">
                <div className="movie-info-card__name">The Gentlemen</div>
                <div className="movie-info-card__btn" onClick={() => props.onMovieSelect()}>
                    <p>X</p>
                </div>
            </div>
            <div className="movie-info-card__description">
                <div className="movie-info-card__poster">
                    <img className="movie-info-card__img" src="https://m.media-amazon.com/images/M/MV5BMTlkMmVmYjktYTc2NC00ZGZjLWEyOWUtMjc2MDMwMjQwOTA5XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg" alt="movie"/>
                </div>
                <div className="movie-info-card__info">
                    <p>Type: <span>movie</span></p>
                    <p>IMBD Rating: <span>7.8</span></p>
                    <p>Genre: <span>Action, Comedy, Crime</span></p>
                    <p>Year: <span>2019</span></p>
                    <p>Director: <span>Guy Ritchie</span></p>
                    <p>Country: <span>United Kingdom, United States</span></p>
                    <p>Language: <span>English, Russian, Spanish, Chinese</span></p>
                    <p>Runtime: <span>113 min</span></p>
                    <p>Released: <span>24 Jan 2020</span></p>
                    <p>Actors: <span>Matthew McConaughey, Charlie Hunnam, Michelle Dockery</span></p>
                    <p>Plot: <span>An American expat tries to sell off his highly profitable marijuana empire in London, triggering plots, schemes, bribery and blackmail in an attempt to steal his domain out from under him.</span></p>
                </div>
            </div>
            <div className="movie-info-card__fav-btn">
                <Button 
                    onClick={() => console.log('Добавлено в избранное!')}
                    variant="outlined"
                    color="error"
                    fullWidth="true"
                >
                    <FavoriteIcon className="movie-info-card__fav-icon"/>
                </Button>
            </div>
        </div>
    );
};

export default MovieInfoCard;

