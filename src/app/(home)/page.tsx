// src/app/(home)/page.tsx

"use client";

import { useSession } from 'next-auth/react';
import AuthHome from '../../sections/AuthHomeView';
import UnauthHome from '../../sections/UnauthHomeView';
import Typography from '@mui/material/Typography';


export default function Home() {
  const { data: session, status } = useSession();

  // Display a loading message while checking the session
  if (status === 'loading') {
    return <Typography>Loading...</Typography>;
  }

  // If user is authenticated, show the AuthenticatedHome component
  if (session) {
    return <AuthHome user={session.user} />;
  }

  // If user is not authenticated, show the UnauthenticatedHome component
  return <UnauthHome />;
}
