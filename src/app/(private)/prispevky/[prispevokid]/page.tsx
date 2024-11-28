// src/app/prispevok/[id]/page.tsx

import Typography from '@mui/material/Typography';

export const metadata = { title: `Detail prispevku | ZoškApp` };

export default function PostDetail({ params } : { params: { prispevokId: string }; }) {
  return (

    <Typography> Detail prispevku { params.prispevokId } </Typography>
  
  );
}