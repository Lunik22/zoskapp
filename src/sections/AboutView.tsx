
"use client"
import { Box, Button, Typography, useTheme } from "@mui/material";


export default function AboutView() {
  const theme = useTheme();

  return (
    <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100vh'
    }}>
      <Typography variant="h2">
        O mne
      </Typography>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: theme.palette.background.paper,
        width: '50%',
        height: '25%',
        padding: '2rem',
        my: 2,
        borderRadius: '25px',
        textAlign: 'center',
      }}>
        <Typography variant="body1">
            Som študentom na Strednej priemyselnej škole elektrotechnickej v Bratislave. Mojou záľubou programovanie a vytváranie webových stránok. Tento projekt vznikol za zámerom vytvoriť webovú stránku pre fotografov, ktorí by mohli zdieľať svoje fotografie s ostatnými používateľmi. Pre akékoľvek otázky ma neváhajte kontaktovať.
        </Typography>
      </Box>
      <Button
        variant="contained"
        color="primary"
        sx={{ 
          width: '20%',
          height: '7.5%',
          borderRadius: '25px'
         }} 
      >
        Kontakt
      </Button>
    </Box>
  );
}