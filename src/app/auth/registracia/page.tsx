// src/app/auth/registracia/page.tsx

"use client"; // Add this directive to make it a Client Component

import { signIn } from 'next-auth/react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Registracia() {
  return (
    <Box textAlign="center" mt={5}>
      <Typography variant="h4" gutterBottom>
        Registrácia
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => signIn('google')} // This triggers Google login
      >
        Registrovať sa s Google
      </Button>
    </Box>
  );
}
