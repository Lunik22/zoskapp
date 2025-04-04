// src/app/(home)/page.tsx

import AuthHome from '../../sections/AuthHomeView';
import UnauthHome from '../../sections/UnauthHomeView';
import { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/authOptions';
import { Stack } from '@mui/material';

export const metadata: Metadata = {
  title: `Domov | Zoškapp`,
};

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session) {
    return(
      <AuthHome session={session} />
    );
  }

  return(
    <Stack spacing={2}>
      <UnauthHome />
    </Stack>
  );
  
  
}
