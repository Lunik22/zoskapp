// src/app/(home)/SignInView.tsx

"use client";

import { AlertProps, Box, Button, Card, Checkbox, FormControlLabel, Link, Snackbar, TextField, useTheme } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';
import { signIn } from 'next-auth/react';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useState } from 'react';
import React from 'react';

function hexToRgb(hex: string) {
  hex = hex.replace('#', '');
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `${r}, ${g}, ${b}`;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SignIn() {
  const theme = useTheme();
  const [isChecked, setIsChecked] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);


  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const handleButtonClick = () => {
    if (!isChecked) {
      setSnackbarOpen(true);
    } else {
      // Handle button click logic here
    }
  };

  const handleSnackbarClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  const backgroundColorRgb = hexToRgb(theme.palette.background.paper);

  return (
    <Box sx={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      width: '100%',
      height: '100vh'
    }}>
      <Card sx={{ 
        maxWidth: 450, 
        width: 450,
        padding: '2rem', 
        borderRadius: '25px',
        background: theme.palette.background.paper,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        backdropFilter: 'blur(10px)',
        backgroundColor: `rgba(${backgroundColorRgb}, 0.7)`,
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
      }}>
        <Typography variant="h2" gutterBottom>
          Registrácia
        </Typography>
        <TextField 
          label="Používateľské meno" 
          variant="outlined"
          sx={{ 
            mt: 2,
            mb: 1,
            width: '100%',
            '& .MuiOutlinedInput-root': {
              borderRadius: '25px',
            },
          }}  
        />
        <TextField 
          label="Email" 
          variant="outlined"
          sx={{ 
            mb: 1,
            width: '100%',
            '& .MuiOutlinedInput-root': {
              borderRadius: '25px',
            },
          }}  
        />
        <TextField 
          label="Heslo" 
          type="password" 
          variant="outlined" 
          fullWidth 
          sx={{
            mb: 1,
            width: '100%',
            '& .MuiOutlinedInput-root': {
              borderRadius: '25px',
            },
          }}
        />
        <FormControlLabel
          control={<Checkbox checked={isChecked} onChange={handleCheckboxChange} />}
          label={<span>Súhlasím s <Link href="/gdpr">GDPR</Link> a <Link href="/podmienky">obchodnými podmienkami</Link></span>}
          sx={{
            mt: 1,
            color: theme.palette.text.secondary,
            '& .MuiCheckbox-root': {
              color: theme.palette.primary.main,
            },
          }}
        />
        <div onClick={handleButtonClick} style={{ width: '100%' }}>
          <Button
            variant="contained"
            color="primary"
            disabled={!isChecked}
            sx={{ 
              mt: 2,
              mb: 2,
              width: '100%',
              borderRadius: '25px'
             }} 
          >
            Registrovať
          </Button>
        </div>
        <div onClick={handleButtonClick} style={{ width: '100%' }}>
          <Button
            variant="contained"
            color="primary"
            disabled={!isChecked}
            onClick={() => signIn('google')}
            sx={{ 
              mt: 2,
              width: '100%',
              borderRadius: '25px',
              backgroundColor: '#4285F4',
              color: '#fff',
              '&:hover': {
                backgroundColor: theme.palette.primary.dark,
              },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }} 
          >
            <GoogleIcon sx={{ mr: 1 }} />
            Registrovať sa s Google
          </Button>
        </div>
        <div onClick={handleButtonClick} style={{ width: '100%' }}>
          <Button
            variant="contained"
            color="primary"
            disabled={!isChecked}
            onClick={() => signIn('github')}
            sx={{ 
              mt: 2,
              width: '100%',
              borderRadius: '25px',
              backgroundColor: '#333', 
              color: '#fff',
              '&:hover': {
                backgroundColor: theme.palette.primary.dark, 
              },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }} 
          >
            <GitHubIcon sx={{ mr: 1 }} />
            Registrovať sa s GitHub
          </Button>
        </div>
        <Link href="/auth/prihlasenie" sx={{
          mt: 3,
          textDecoration: 'none',
          color: theme.palette.text.secondary,
          '&:hover': {
            color: theme.palette.primary.main,
          },
          transition: 'color 0.2s',
        }}>
          Máte už účet? Prihláste sa!
        </Link>
        <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
          <Alert onClose={handleSnackbarClose} severity="error">
            Na prihlásenie prosím súhlaste s <Link href="/gdpr">GDPR</Link> a <Link href="/podmienky">obchodnými podmienkami!</Link>
          </Alert>
        </Snackbar>
      </Card>
    </Box>
  );
}
