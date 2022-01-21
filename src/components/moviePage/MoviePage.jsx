import React, { useState, useEffect } from 'react';
import SearchBox from '../searchBox/SearchBox';
import MovieCard from '../movieCard/MovieCard';
import Loader from '../loader/Loader';
import MovieInfoCard from '../movieInfoCard/MovieInfoCard';
import MoviePagination from '../pagination/MoviePagination';

import "./MoviePage.scss";
import axios from 'axios';


export const API_KEY = 'e6f72b18';

function MoviePage() {

  // состояние для строки ввода данных
  const [searchValue, setSearchValue] = useState("");  

  // состояние для страницы с фильмами
  const [movies, setMovies] = useState([
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
      "Title": "Bohemian Rhapsody",
      "Year": "2018",
      "imdbID": "tt1727824",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTA2NDc3Njg5NDVeQTJeQWpwZ15BbWU4MDc1NDcxNTUz._V1_SX300.jpg"
    },
    {
      "Title": "Sherlock",
      "Year": "2010–2017",
      "imdbID": "tt1475582",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMWY3NTljMjEtYzRiMi00NWM2LTkzNjItZTVmZjE0MTdjMjJhL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTQ4NTc5OTU@._V1_SX300.jpg"
    },
  ]);

  //состояние для Loader
  const [isLoading, setIsLoading] = useState(true);

  //состояние для Error
  const [isError, setIsError] = useState(false);


  //состояние для компонента MoviePagination
  const [page, setPage] = useState(1);

  //состояние количества страниц
  const [numberOfPages, setNumberOfPages] = useState();

  // состояния для модального окна с подробной информацией
  const [selectedMovie, onMovieSelect] = useState();

  // это рабочий код получение запросов динамически, нативным способом:
  const getMovieRequest = async (searchValue) => {
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=${API_KEY}&page=${page}`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
      setNumberOfPages(Number(responseJson.totalResults));
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue, page);
  });



  // попытка получения данных с API с помощью axios

  // useEffect(() => {

  //   async function getMovieRequest () {
      
  //     try {
  //       const getMovies = (searchValue) => axios.get(`https://www.omdbapi.com/?s=${searchValue}&apikey=${API_KEY}&page=${page}`);
  //       const response = await getMovies(); 
  //       const responseJson = await response.json();
  //       setMovies(responseJson.Search);
  //       setNumberOfPages(Number(responseJson.totalResults));
  //     } catch (error) {
  //       setIsError(true);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }
  //   getMovieRequest(searchValue, page);
  // }, [searchValue, page]);

  return (
    <>
      <div className="movie-page">
    
        <div className='search-form'>
          <SearchBox
            searchValue={searchValue}
            setSearchValue={setSearchValue} 
          />
        </div>

        <div className="movie-page__invation">
          <span>...or see our collection</span>
        </div>
        
        <div className="movie-list">

          {/* это НЕрабочий, попытка с axios */}

          {/* {isLoading && <Loader/>}
          {isError && 
            <span className='movie-page__error'>
              Error :-(
            </span>
          }
          {!isLoading && !isError && 
            movies.map((movie) => 
                  <MovieCard key={movie.imdbID} movie={movie} onMovieSelect={onMovieSelect}/>
                )
          } */}


          {/* это рабочий код с нативным запросом данных с API */}
          {movies?.map((movie) => 
            <MovieCard key={movie.imdbID} movie={movie} onMovieSelect={onMovieSelect}/>
          )}
        </div>

        {selectedMovie && <MovieInfoCard 
          selectedMovie={selectedMovie}
          onMovieSelect={onMovieSelect}
        />}
      </div>
      <MoviePagination
        setPage={setPage}
        pageNumber={numberOfPages}
      />
    </>
    
  );
}

export default MoviePage;