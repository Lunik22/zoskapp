// src/app/(home)/SignInView.tsx

"use client";

import { Box, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import { signIn } from 'next-auth/react';

export default function SignIn() {
  return (
    <Box textAlign="center" mt={5}>
      <Typography variant="h4" gutterBottom>
        Prihlásenie
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => signIn('google')} 
      >
        Prihlásiť sa s Google
      </Button>
    </Box>
  );
}