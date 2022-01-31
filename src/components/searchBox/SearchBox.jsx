import React from "react";
import { withTranslator } from '../../hoc/withTranslator';
import TextField from '@mui/material/TextField';


const SearchBox = ({ translate, ...props }) => {

    return (
        <div className="search-form" >
            <TextField
                noValidate 
                autoComplete="off"
                label={translate("search.box.label")}
                variant="outlined"
                fullWidth
                value={props.value}
                onChange={(event) => props.setSearchValue(event.target.value)}
            />
        </div>
    )
}

export default withTranslator(SearchBox);