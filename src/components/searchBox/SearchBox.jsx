import React from "react";
import TextField from '@mui/material/TextField';

const SearchBox = () => {

    return (

        <div className="search-form" >
            <TextField
                noValidate autoComplete="off"
                label="Start your search here..."
                variant="outlined"
                fullWidth
            />
        </div>
    )
}

export default SearchBox;