import React from "react";
import TextField from '@mui/material/TextField';


const SearchBox = (props) => {

    return (
        <div className="search-form" >
            <TextField
                noValidate 
                autoComplete="off"
                label="Start your search here..."
                variant="outlined"
                fullWidth
                value={props.value}
                onChange={(event) => props.setSearchValue(event.target.value)}
            />
        </div>
    )
}

export default SearchBox;