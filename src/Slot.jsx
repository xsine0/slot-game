import Typography from "@mui/material/Typography"
export default function Slot({ emoji }) {
    return (
        <div>
            <Typography variant="h2" component="h1">
                {emoji}
            </Typography>
        </div>

    )
}