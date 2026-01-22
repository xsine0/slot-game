import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
export default function ShowUsername({ label, value }) {
    return (
        <div>
            <TextField
                id="input-with-icon-textfield"
                label={label}
                value={value}
                slotProps={{
                    input: {
                        readOnly: true,
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