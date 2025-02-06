// src/app/(home)/UnauthHome.tsx
"use client";

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function UnauthHome() {
  const theme = useTheme();
  const router = useRouter();

  const handleSignInRedirect = () => {
    router.push('/auth/prihlasenie');
  };

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: { xs: 'start', md: 'space-between' },
      flexDirection: { xs: 'column', md: 'row' },
      mt: {xs: 5, md: 0},
      alignItems: 'center',
      width: '100%',
      height: '100vh'
    }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: { xs: '90%', md: '47.5%' },
        height: '50%',
        padding: '2rem',
        borderRadius: '25px',
        justifyContent: 'center',
        backgroundColor: theme.palette.background.paper,
      }}>
        <Typography variant="h1">
          Zažite nový spôsob zdieľania fotiek na Zoškapp!
        </Typography>
      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: { xs: '90%', md: '47.5%' },
        height: '50%',
        padding: '2rem',
        borderRadius: '25px',
        justifyContent: 'center',
        textAlign: 'center'
      }}>
        <Typography variant="h2">
          Už máte účet? Prihláste sa!
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSignInRedirect}
          sx={{ 
            my: 3,
            width: '50%',
            height: '15%',
            borderRadius: '25px'
           }} 
        >
          Prejsť na prihlásenie
        </Button>
        <Typography variant="h2">
          Nemáte účet? Zaregistrujte sa!
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSignInRedirect}
          sx={{ 
            my: 3,
            width: '50%',
            height: '15%',
            borderRadius: '25px'
           }} 
        >
          Prejsť na registráciu
        </Button>
      </Box>
    </Box>
  );
}
