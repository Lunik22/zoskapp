// src\components\AuthGuard.tsx

"use client";

import React, { ReactNode, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import { Typography } from '@mui/material';

export default function AuthGuard({ children }: { children: ReactNode }) {
  const { status } = useSession();
  const router = useRouter();


  useEffect(() => {
    if (status === "unauthenticated" ) {
      router.push('/auth/registracia');
    }
  }, [status, router]);

  if (status == "loading") {
    return <Typography>Loading...</Typography>
  }

  return <>{children}</>;
}

