import React from "react";
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import "./AddFavourites.scss";

const AddFavourites = () => {
    return (
        <>
            <div className="add-favourites">
                <Button className="add-favourites__btn"
                    variant="outlined"
                    color="error"
                    fullWidth
                >
                    <span className="add-favourites__text">Add to Favourites</span>
                    <FavoriteIcon className="add-favourites__icon"/>
                </Button>
            </div>
        </>
    )
}

export default AddFavourites;