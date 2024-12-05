// src/app/components/Navbar.tsx

"use client";

import * as React from "react";
import { BottomNavigation, BottomNavigationAction, Box, Avatar, useTheme, Theme } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AppsIcon from "@mui/icons-material/Apps";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import LogoutIcon from "@mui/icons-material/Logout";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import InfoIcon from '@mui/icons-material/Info';
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

interface NavbarProps {
  toggleTheme: () => void;
  currentTheme: Theme;
}

export default function Navbar({ toggleTheme, currentTheme }: NavbarProps) {
  const [value, setValue] = React.useState('/');
  const router = useRouter();
  const { data: session, status } = useSession();

  const handleNavigation = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    router.push(newValue);
  };

  const theme = useTheme();

  // Non-authenticated navigation paths
  const nonAuthPaths = [
    { label: "Domov", value: "/", icon: <HomeIcon /> },
    { label: "O nás", value: "/o-nas", icon: <InfoIcon /> },
    { label: "Registrácia", value: "/auth/registracia", icon: <AppRegistrationIcon /> },
    { label: "Prihlásenie", value: "/auth/prihlasenie", icon: <LoginIcon /> }
  ];

  // Authenticated navigation paths
  const authPaths = [
    { label: "Domov", value: "/", icon: <HomeIcon /> },
    { label: "Príspevky", value: "/prispevky", icon: <AppsIcon /> },
    { label: "Pridať", value: "/pridat", icon: <AddCircleIcon /> },
    {
      value: "/profil",
      icon: session?.user?.image ? (
        <Avatar 
          alt={session?.user?.name || "User"} 
          src={session?.user?.image || undefined} 
        />
      ) : (
        <Avatar>{session?.user?.name?.charAt(0) || "U"}</Avatar>
      )
    },
    { label: "Odhlásiť", value: "/auth/odhlasenie", icon: <LogoutIcon /> },
  ];

  // Decide which paths to use based on authentication status
  const navigationPaths = status === "authenticated" ? authPaths : nonAuthPaths;

  return (
    <Box sx={{
      width: '100%',
      position: 'fixed',
      bottom: 0,
      marginBottom: "1rem",
      left: 0, // Align with the left of the viewport
      right: 0, // Align with the right of the viewport
      display: 'flex',
      justifyContent: 'center',
      paddingX: 2,
    }}>
      <Box sx={{
        width: '100%',
        maxWidth: 1200,
        margin: '0 auto',
        paddingX: 2,
      }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={handleNavigation}
          sx={{ paddingY: '2rem', borderRadius: '25px'}}
        >
          {navigationPaths.map((path) => (
            <BottomNavigationAction
              key={path.value}
              label={path.label}
              value={path.value}
              icon={path.icon}
            />
          ))}
          
          {/* Add the theme toggle action as a BottomNavigationAction */}
          <BottomNavigationAction
            label=""
            value=""
            icon={currentTheme.palette.mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
            onClick={toggleTheme}
          />
        </BottomNavigation>
      </Box>
    </Box>
  );
}
