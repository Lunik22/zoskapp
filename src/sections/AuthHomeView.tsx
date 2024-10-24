// src/app/(home)/AuthHome.tsx

import Typography from '@mui/material/Typography';
import { Session } from 'next-auth';

export default function AuthHome({ session }: { session: Session }) {

  return (
    <div>
        <Typography variant="h2">Vitaj, {session.user?.name}!</Typography>
        <Typography variant="h4">
          Domovská stránka - Prihlásený user
        </Typography>
      </div>
  );
}
