// src/app/(home)/SignInView.tsx

"use client";

import { Box, Button, Card, Link, TextField, useTheme } from '@mui/material';
import Typography from '@mui/material/Typography';
import { signIn } from 'next-auth/react';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';

function hexToRgb(hex: string) {
  hex = hex.replace('#', '');
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `${r}, ${g}, ${b}`;
}

export default function SignIn() {
  const theme = useTheme();

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
          Prihlásenie
        </Typography>
        <TextField 
          label="Email alebo používateľské meno" 
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
        <Link href="/forgot-password" sx={{
          mt: 1,
          textDecoration: 'none',
          color: theme.palette.text.secondary,
          '&:hover': {
            color: theme.palette.primary.main,
          },
          transition: 'color 0.2s',
        }}>
          Zabudli ste heslo?
        </Link>
        <Button
          variant="contained"
          color="primary"
          onClick={() => signIn('google')}
          sx={{ 
            mt: 2,
            mb: 2,
            width: '100%',
            borderRadius: '25px'
           }} 
        >
          Prihlásiť
        </Button>
        <Button
          variant="contained"
          color="primary"
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
          Prihlásiť sa s Google
        </Button>
        <Button
          variant="contained"
          color="primary"
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
          Prihlásiť sa s GitHub
        </Button>
        <Link href="/auth/registracia" sx={{
          mt: 3,
          textDecoration: 'none',
          color: theme.palette.text.secondary,
          '&:hover': {
            color: theme.palette.primary.main,
          },
          transition: 'color 0.2s',
        }}>
          Nemáte účet? Zaregistrujte sa!
        </Link>
      </Card>
    </Box>
  );
}
