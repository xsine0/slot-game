import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import "./styles/StartButton.css"

export default function StartButton({ label = "Click Me", clickFunc }) {
    return (
        <div className='StartButton '>
            <Button variant="contained" endIcon={<SendIcon />} onClick={clickFunc}>
                {label}
            </Button>
        </div>
    )
}