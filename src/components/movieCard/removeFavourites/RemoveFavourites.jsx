import React from "react";
import { withTranslator } from '../../../hoc/withTranslator';
import Button from '@mui/material/Button';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import "./RemoveFavourites.scss";

const RemoveFavourites = ( { translate } ) => {
    return (
        <>
            <div className="remove-favourites">
                <Button className="remove-favourites__btn"
                    variant="outlined"
                    style={{ color: 'rgba(0, 0, 0, 0.54)' }}
                    fullWidth
                >
                    <span className="remove-favourites__text">{translate("movie.card.btn.remove")}</span>
                    <DeleteOutlineIcon className="remove-favourites__icon"/>
                </Button>
            </div>
        </>
    )
}

export default withTranslator(RemoveFavourites);