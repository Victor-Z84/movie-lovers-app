import React from "react";
import Pagination from '@mui/material/Pagination';
import "./MoviePagination.scss";

const MoviePagination = ({ setPage, pageNumber }) => {
    
    const handleChange = (page) => {
        setPage(page);
    };

    return (
        <div className="movie-pag-container">
            <div className="movie-pag-container__root">
                <Pagination className="movie-pag__pag-element"
                    onChange={(e) => handleChange(e.target.textContent)}
                    variant="outlined"
                    count={pageNumber}
                    shape="rounded"
                    size="small"
                />
            </div>
        </div>
    )
}

export default MoviePagination;