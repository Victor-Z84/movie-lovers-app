import React, { useState, useEffect } from 'react';
import { withTranslator } from '../../hoc/withTranslator';
import SearchBox from '../searchBox/SearchBox';
import MovieCard from '../movieCard/MovieCard';
import Loader from '../loader/Loader';
import MovieInfoCard from '../movieInfoCard/MovieInfoCard';
import MoviePagination from '../pagination/MoviePagination';
import AddFavourites from '../movieCard/addFavourites/AddFavourites';
import RemoveFavourites from '../movieCard/removeFavourites/RemoveFavourites';

import "./MoviePage.scss";
import axios from 'axios';
export const API_KEY = 'e6f72b18';


function MoviePage( { translate } ) {

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

  // состояние для строки ввода данных
  const [searchValue, setSearchValue] = useState("");
  
  // состояние для избранных фильмов
  const [favourites, setFavourites] = useState([]);

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


  useEffect(() => {

    async function getMovieRequest() {

      try {
        const getMovies = (searchValue) => axios.get(`https://www.omdbapi.com/?s=${searchValue}&apikey=${API_KEY}&page=${page}`);
        const response = await getMovies(searchValue);
        if (!response.data.Error) {
          setMovies(response.data.Search);
          setNumberOfPages(Number(response.data.totalResults));
        } 
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getMovieRequest(searchValue, page);
  }, [searchValue, page]);

  const saveToLocalStorage = (items) => {
    localStorage.setItem('favourites-list', JSON.stringify(items));
  };

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter((favourite) => favourite.imdbID !== movie.imdbID);
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  }

  return (
    <>
      <div className="movie-page">
    
        <div className='search-form'>
          <SearchBox
            serchValue={setSearchValue} 
            setSearchValue = {setSearchValue}
          />
        </div>

        <div className="movie-page__invation">
          <span>{translate("movie.page.span")}</span>
        </div>
        
        <div className="movie-list">

          {isLoading && <Loader/>}
          {isError && 
            <span className='movie-page__error'>
              Error :-(
            </span>
          }
          {!isLoading && !isError && 
            movies.map((movie) => 
                  <MovieCard 
                  key={movie.imdbID} 
                  movie={movie} 
                  onMovieSelect={onMovieSelect}
                  
                  favouriteComponent={AddFavourites}
                  handleFavouritesClick={addFavouriteMovie}
                  

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
      <MoviePagination
        setPage={setPage}
        pageNumber={numberOfPages}
      />
    </>
    
  );
}

export default withTranslator(MoviePage);