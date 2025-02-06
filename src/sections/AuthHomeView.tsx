// src/app/(home)/AuthHome.tsx
"use client";
import { Box, Button, useTheme } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Session } from 'next-auth';
import { useRouter } from 'next/navigation';

export default function AuthHome({ session }: { session: Session }) {
  const theme = useTheme();

  const router = useRouter();

  const handlePostRedirect = () => {
    router.push('/prispevky');
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
          Vitaj {session.user?.name}!
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
          Už len stačí prezerať príspevky!
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handlePostRedirect}
          sx={{ 
            my: 3,
            width: '50%',
            height: '15%',
            borderRadius: '25px'
           }} 
        >
          Prejsť na príspevky
        </Button>
      </Box>
    </Box>
    
  );
}
