import React from 'react';
import TextField from '@mui/material/TextField';

const InputField = ({ label = "", type = "text", register, registerName, error }) => {
    return (
        <TextField
            label={label}
            variant="outlined"
            type={type}
            helperText={error ? error : ""}
            // helperText={"error"}
            error={!!error} // This adds red border if there's an error
            {...register(registerName)} // Register hook for form validation
            sx={{
                '& .MuiOutlinedInput-root': {
                    color: '#7871fc',
                    fontWeight: '600',
                    '& fieldset': {
                        borderColor: error ? 'red' : '#7871fc', // Red border for error
                    },
                    '&:hover fieldset': {
                        borderColor: error ? 'red' : '#7871fc',
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: error ? 'red' : '#7871fc',
                    },
                },
                '& .MuiInputLabel-root': {
                    color: error ? 'red' : '#7871fc',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                    color: error ? 'red' : '#7871fc',
                },
            }}
        />
    );
};

export default InputField;
