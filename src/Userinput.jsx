import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';

export default function Userinput({ label, handleChange, value }) {
    return (
        <div>
            <TextField
                id="username"
                label={label}
                value={value}
                onChange={(e) => handleChange(e)}
                helperText="Enter a username"
                slotProps={{
                    input: {
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        ),
                    },
                }}
                variant="standard"
            />
        </div>
    )

}