import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function WarningDialog({label, showAlert}) {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="warning" onClose={showAlert}>{label}</Alert>
    </Stack>
  );
}