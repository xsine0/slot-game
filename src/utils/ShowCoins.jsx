import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
export default function ShowCoins({ label, value }) {
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
                                <PaidOutlinedIcon />
                            </InputAdornment>
                        ),
                    },
                }}
                variant="standard"
            />
        </div>
    )
}