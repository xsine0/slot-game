import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import CheckIcon from '@mui/icons-material/Check';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';

export default function WinningAlert({alertLabel, alertTitel="TEST"}) {
    return (
        <div>
            <Alert severity="success" icon={<CurrencyExchangeIcon fontSize="inherit" />}>
                <AlertTitle>{alertTitel}</AlertTitle>
                {alertLabel}
            </Alert>
        </div>
    )
}