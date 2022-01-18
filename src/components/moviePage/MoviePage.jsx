import React from 'react';
import SearchBox from '../searchBox/SearchBox';
import MovieCard from '../movieCard/MovieCard';
import MovieInfoCard from '../movieInfoCard/MovieInfoCard';


import "./MoviePage.scss";
import { useState } from 'react';

function MoviePage() {

  // состояние для списка с фильмами
  const [searchQuery, updateSearchQuery] = useState();

  // состояния для модального окна с подробной информацией
  const [selectedMovie, onMovieSelect] = useState();

  // статичные данные с фильмами, тут будет API
  const movies = [
    
    {
      "Title": "The Gentlemen",
      "Year": "2019",
      "imdbID": "tt8367814",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTlkMmVmYjktYTc2NC00ZGZjLWEyOWUtMjc2MDMwMjQwOTA5XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg"
    },
    {
      "Title": "Knockin' on Heaven's Door",
      "Year": "1997",
      "imdbID": "tt0119472",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTk2MjcxNjMzN15BMl5BanBnXkFtZTgwMTE3OTEwNjE@._V1_SX300.jpg"
    },
    {
      "Title": "One Flew Over the Cuckoo's Nest",
      "Year": "1975",
      "imdbID": "tt0073486",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
    {
      "Title": "Sherlock",
      "Year": "2010–2017",
      "imdbID": "tt1475582",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMWY3NTljMjEtYzRiMi00NWM2LTkzNjItZTVmZjE0MTdjMjJhL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTQ4NTc5OTU@._V1_SX300.jpg"
    },
    {
      "Title": "Chernobyl",
      "Year": "2019",
      "imdbID": "tt7366338",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZGQ2YmMxZmEtYjI5OS00NzlkLTlkNTEtYWMyMzkyMzc2MDU5XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_SX300.jpg"
    },
    {
        "Title": "Sex & Drugs & Rock & Roll",
        "Year": "2010",
        "imdbID": "tt1393020",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjA4NjI1MzAyMF5BMl5BanBnXkFtZTcwMTEyNzUyNA@@._V1_SX300.jpg"
    },
    {
      "Title": "The Intouchables",
      "Year": "2011",
      "imdbID": "tt1675434",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_SX300.jpg"
    },
    {
      "Title": "Snatch",
      "Year": "2000",
      "imdbID": "tt0208092",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTA2NDYxOGYtYjU1Mi00Y2QzLTgxMTQtMWI1MGI0ZGQ5MmU4XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
    },
    {
      "Title": "Bohemian Rhapsody",
      "Year": "2018",
      "imdbID": "tt1727824",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTA2NDc3Njg5NDVeQTJeQWpwZ15BbWU4MDc1NDcxNTUz._V1_SX300.jpg"
    },
    {
      "Title": "Unbroken",
      "Year": "2014",
      "imdbID": "tt1809398",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTY3ODg2OTgyOF5BMl5BanBnXkFtZTgwODk1OTAwMzE@._V1_SX300.jpg"
    },
  ];

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

  return (
    <div className="movie-page">
    
      <div className='search-form'>
        <SearchBox/>
      </div>
      
      <div className="movie-list">
        {movies.map((movie) => 
          <MovieCard key={movie.imdbID} movie={movie} onMovieSelect={onMovieSelect}/>
        )}
      </div>
      {selectedMovie && <MovieInfoCard 
        
        selectedMovie={selectedMovie}
        onMovieSelect={onMovieSelect}
      />}
    </div>
  );
}

export default MoviePage;