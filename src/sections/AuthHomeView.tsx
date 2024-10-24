// src/app/(home)/AuthHome.tsx

import Typography from '@mui/material/Typography';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Domov | Zoškapp`,
};

export default function AuthHome({ user }: { user: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
} | undefined }) {

  return (
    <div>
        <Typography variant="h2">Vitaj, {user?.name}!</Typography>
        <Typography variant="h4">
          Domovská stránka - Prihlásený user
        </Typography>
      </div>
  );
}
