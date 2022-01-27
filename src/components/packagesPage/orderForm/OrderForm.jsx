import React,  { useState } from "react";
import { TextField, RadioGroup, Radio, Button, FormControlLabel, FormControl, FormLabel } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

import "./OrderForm.scss";

function OrderForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [notes, setNotes] = useState('')
    const [nameError, setNameError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [category, setCategory] = useState('PREMIUM')

    const handleSubmit = (e) => {
        e.preventDefault()
        setNameError(false)
        setEmailError(false)

        if (name === '') {
            setNameError(true)
        }

        if (email === '') {
            setEmailError(true)
        }

        if (name && email) {
            console.log(name, email, notes, category);
        }
    }

    return (
        <>
            <div className="packages-order-form">
                <form noValidate autoComplete="off" onSubmit={handleSubmit} >
                    <FormLabel>You can make your order here:</FormLabel>
                    <TextField
                        onChange={(e) => setName(e.target.value)} 
                        className="packages-order-form__name text-field-data"
                        label="Name Surname"
                        variant="outlined"
                        fullWidth
                        required
                        error={nameError}
                    />
                    <TextField
                        onChange={(e) => setEmail(e.target.value)} 
                        className="packages-order-form__email text-field-data"
                        label="Email"
                        variant="outlined"
                        fullWidth
                        required
                        error={emailError}
                    />
                    <TextField
                        onChange={(e) => setNotes(e.target.value)} 
                        className="packages-order-form__additional text-field-data" 
                        label="Additional Notes"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={3}
                    />
                    <div>
                        <FormControl>
                            <FormLabel>Please select a service package:</FormLabel>
                            <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
                                <FormControlLabel value="PREMIUM" control={<Radio/>} label="PREMIUM"/>
                                <FormControlLabel value="OPTIMAL" control={<Radio/>} label="OPTIMAL"/>
                                <FormControlLabel value="LIGHT" control={<Radio/>} label="LIGHT"/>
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <div className="packages-order-form__button">
                        <Button
                            type="submit"
                            variant="outlined"
                            endIcon={<SendIcon/>}
                        >
                            Submit
                        </Button>
                    </div>
                    
                </form>
            </div>
        </>
    );
}

export default OrderForm;