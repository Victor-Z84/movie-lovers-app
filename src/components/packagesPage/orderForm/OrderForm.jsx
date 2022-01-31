import React,  { useState } from "react";
import { withTranslator } from "../../../hoc/withTranslator";
import { TextField, RadioGroup, Radio, Button, FormControlLabel, FormControl, FormLabel, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import SendIcon from '@mui/icons-material/Send';

import "./OrderForm.scss";

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
});

const OrderForm = ( { translate } ) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [notes, setNotes] = useState('')
    const [nameError, setNameError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [category, setCategory] = useState('PREMIUM')
    const [open, setOpen] = useState(false);

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
            // console.log(name, email, notes, category);
            handleReset()
            setOpen(true);
        }
    };

    const handleReset = () => {
        setName('')
        setEmail('')
        setNotes('')
        setCategory('PREMIUM')
    };

    const handleClose = (reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <>
            <div className="packages-order-form">
                <form noValidate autoComplete="off" onSubmit={handleSubmit} >
                    <FormLabel style={{ color: 'black' }}>{translate("packages.form.invitation")}</FormLabel>
                    <TextField
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        className="packages-order-form__name text-field-data"
                        label={translate("packages.form.name")}
                        variant="outlined"
                        fullWidth
                        required
                        error={nameError}
                    />
                    <TextField
                        onChange={(e) => setEmail(e.target.value)}
                        value={email} 
                        className="packages-order-form__email text-field-data"
                        label="Email"
                        variant="outlined"
                        fullWidth
                        required
                        error={emailError}
                    />
                    <TextField
                        onChange={(e) => setNotes(e.target.value)}
                        value={notes} 
                        className="packages-order-form__additional text-field-data" 
                        label={translate("packages.form.notes")}
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={3}
                    />
                    <div>
                        <FormControl>
                            <FormLabel style={{ color: 'black' }}>{translate("packages.form.select")}</FormLabel>
                            <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
                                <FormControlLabel value="PREMIUM" control={<Radio/>} label={translate("packages.table.premium")}/>
                                <FormControlLabel value="OPTIMAL" control={<Radio/>} label={translate("packages.table.optimal")}/>
                                <FormControlLabel value="LIGHT" control={<Radio/>} label={translate("packages.table.light")}/>
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <div className="packages-order-form__button">
                        <Button
                            type="submit"
                            variant="outlined"
                            endIcon={<SendIcon/>}
                        >
                            {translate("packages.form.submit")}
                        </Button>
                        <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
                            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                                {translate("packages.form.alert")}
                            </Alert>
                        </Snackbar>
                    </div>
                </form>
                
            </div>
        </>
    );
}

export default withTranslator(OrderForm);