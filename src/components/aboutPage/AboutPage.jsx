import React from "react";
import MovieIcon from "../../icons/logo.png";


import "./AboutPage.scss";

function AboutPage () {

    return (
        <>
            <div className="about-page">
                <h1 className="about-page__title">Welcome to the <span>Movie Lovers</span> page!</h1>
                <div className="about-page__picture">
                    <img src={MovieIcon} alt="movie-icon" />
                </div>
                <p>This application was developed by student Victor Zdvizhkov using the React library as a final graduation project at the TeachMeSkills programming school.</p>
                <p>Movie Lovers will help you to find movies and series data (year of release, country of production, director, actors, etc.) by title or part of the title, which you can enter in the search bar on the main page.</p>
                <p>As the main idea and data source of movies for the full functioning of this application was used a free RESTful web service of the open database of films and series OMDb API.</p>
                <p>The Movie Lovers application has the following functional pages: "Home", "Favourites", "Packages", and this "About" page with a description of the application.</p>
                <p>On the "Main page" you will find a search bar. This search bar will help you find movies or series that interest you. On each of the resulting pages, you will find up to 10 search results. The next 10 search results can be accessed using the pagination buttons at the bottom of the page.</p>
                <p>By clicking on the poster in the movie card, you can get more detailed information about the selected movie.</p>
                <p>To add a movie to "Favourites", click on the "Add to Favourites" button at the bottom of the card with the movie.</p>
                <p>On the "Favorites" page you will find the results of your search queries added from the "Main page". They will be stored in your local storage and will not disappear from here even if you refresh the page. You can remove from "Favourites" by pressing the special button “Remove from Favourites”.</p>
                <p>The "Packages" page contains tables with options for paid services. At the bottom of the page you will find a form for submitting user data. This form implements functionality for the mandatory filling of some input fields and the selection of check boxes.</p>
                <p>Enjoy!</p>
            </div>
        </>
    );
}

export default AboutPage;