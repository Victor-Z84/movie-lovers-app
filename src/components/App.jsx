import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom'
import { withTheme } from "../hoc/withTheme"
import Header from "./header/Header";
import MoviePage from "./moviePage/MoviePage";
import PackagesPage from "./packagesPage/PackagesPage";
import AboutPage from "./aboutPage/AboutPage";
import FavouritesPage from "./favouritesPage/FavouritesPage";
import { Navigate } from 'react-router-dom';

import "./App.scss";



function App({setThemeFromStore}) {

  useEffect(() => setThemeFromStore(), []);
  
  return (
    <div className="app">
      <Header/>
        <main className="app-main">
          <Routes>
            <Route path='*' element={<Navigate to='/main-page'/>}/>
            <Route path='/main-page' element={<MoviePage/>}/>
            <Route path='/favourites' element={<FavouritesPage/>}/>
            <Route path='/packages' element={<PackagesPage/>}/>
            <Route path='/about' element={<AboutPage/>}/>
          </Routes>
        </main>
    </div>
  );
}

export default withTheme(App);
