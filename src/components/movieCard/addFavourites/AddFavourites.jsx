import React from "react";
import { withTranslator } from '../../../hoc/withTranslator';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import "./AddFavourites.scss";

const AddFavourites = ( { translate } ) => {
    return (
        <>
            <div className="add-favourites">
                <Button className="add-favourites__btn"
                    variant="outlined"
                    color="error"
                    fullWidth
                >
                    <span className="add-favourites__text">{translate("movie.card.btn.add")}</span>
                    <FavoriteIcon className="add-favourites__icon"/>
                </Button>
            </div>
        </>
    )
}

export default withTranslator(AddFavourites);