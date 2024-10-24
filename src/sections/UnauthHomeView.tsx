// src/app/(home)/UnauthHome.tsx

import Typography from '@mui/material/Typography';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Domov | Zoškapp`,
};

export default function UnauthHome() {

  return (
    <div>
      <Typography variant="h4">Domovská stránka - Neregistrovaný user</Typography>
      <Typography variant="body1">
        Zaregistrujte sa alebo prihláste, aby ste mohli vidieť obsah.
      </Typography>
    </div>
  );
}
