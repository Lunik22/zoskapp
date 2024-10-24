// src/app/auth/prihlasenie/page.tsx

"use client";

import { signIn } from 'next-auth/react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Prihlasenie() {
  return (
    <Box textAlign="center" mt={5}>
      <Typography variant="h4" gutterBottom>
        Prihlásenie
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => signIn('google')} // This triggers Google login
      >
        Prihlásiť sa s Google
      </Button>
    </Box>
  );
}
