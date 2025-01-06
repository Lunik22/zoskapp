//src/sections/SignOutView.tsx

"use client";

import { Box, Button, Card, useTheme } from '@mui/material';
import Typography from '@mui/material/Typography';
import { signOut } from 'next-auth/react';

function hexToRgb(hex: string) {
  hex = hex.replace('#', '');
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `${r}, ${g}, ${b}`;
}

export default function SignOut() {
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
          Odhlásenie
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => signOut({ callbackUrl: '/' })}
          sx={{ 
            mt: 2,
            mb: 2,
            width: '100%',
            borderRadius: '25px'
           }} 
        >
          Naozaj sa chcete odhlásiť?
        </Button>
        
      </Card>
    </Box>
  );
}