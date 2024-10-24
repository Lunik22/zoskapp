//src/sections/SignOutView.tsx

"use client";

import { Box, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import { signOut } from 'next-auth/react';

export default function SignOut() {
  return (
    <Box textAlign="center" mt={5}>
      <Typography variant="h4" gutterBottom>
        Odhlásenie
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => signOut({ callbackUrl: '/' })}
      >
        Odhlásenie
      </Button>
    </Box>
  );
}