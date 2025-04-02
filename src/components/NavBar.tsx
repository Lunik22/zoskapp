// src/app/components/Navbar.tsx

"use client";

import * as React from "react";
import { BottomNavigation, BottomNavigationAction, Box, Avatar, useTheme, Theme, Popover, List, ListItemText, ListItemIcon, Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AppsIcon from "@mui/icons-material/Apps";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import LogoutIcon from "@mui/icons-material/Logout";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import InfoIcon from '@mui/icons-material/Info';
import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

interface NavbarProps {
  toggleTheme: () => void;
  currentTheme: Theme;
}

function hexToRgb(hex: string) {
  hex = hex.replace('#', '');
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `${r}, ${g}, ${b}`;
}

export default function Navbar({ toggleTheme, currentTheme }: NavbarProps) {
  const [value, setValue] = React.useState('/');
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const router = useRouter();
  const { data: session, status } = useSession();

  const handleNavigation = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    router.push(newValue);
  };

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
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
    { label: "Hľadať", value: "/hladanie", icon: <SearchIcon /> },
    {
      value: "",
      icon: session?.user?.image ? (
        <Avatar 
          alt={session?.user?.name || "User"} 
          src={session?.user?.image || undefined} 
          onClick={handlePopoverOpen}
        />
      ) : (
        <Avatar onClick={handlePopoverOpen}>{session?.user?.name?.charAt(0) || "U"}</Avatar>
      )
    },
  ];

  // Decide which paths to use based on authentication status
  const navigationPaths = status === "authenticated" ? authPaths : nonAuthPaths;

  const navBarBackColorRgb = hexToRgb(theme.palette.background.paper);

  return (
    <Box sx={{
      width: '100%',
      position: 'fixed',
      bottom: 0,
      marginBottom: "1rem",
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'center',
      paddingX: 2,
    }}>
      <Box sx={{
        width: '100%',
        maxWidth: 1200,
        margin: '0 auto',
        paddingX: 2,
        overflowX: 'auto', // Ensure the container is scrollable
        scrollbarWidth: 'none', // For Firefox
        '&::-webkit-scrollbar': {
          display: 'none', // For Chrome, Safari, and Opera
        },
      }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={handleNavigation}
          sx={{ 
            display: 'flex',
            paddingY: '2rem', 
            minWidth: '100%',
            borderRadius: '25px',
            backdropFilter: 'blur(10px)',
            backgroundColor: `rgba(${navBarBackColorRgb}, 0.7)`,
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            overflowX: 'auto',
            scrollbarWidth: 'none', // For Firefox
            '&::-webkit-scrollbar': {
              display: 'none', // For Chrome, Safari, and Opera
            },
          }}
        >
          {navigationPaths.map((path) => (
            <BottomNavigationAction
              key={path.value}
              label={path.label}
              value={path.value}
              icon={path.icon}
              sx={{
                flexShrink: 0,
                '&:hover': {
                  color: theme.palette.primary.main,
                }
              }}
            />
          ))}
          
          {/* Add the theme toggle action as a BottomNavigationAction */}
          <BottomNavigationAction
            label=""
            value=""
            icon={currentTheme.palette.mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
            onClick={toggleTheme}
            sx={{
              flexShrink: 0,
              '&:hover': {
                color: theme.palette.primary.main,
              }
            }}
          />
        </BottomNavigation>
      </Box>

      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        sx={{
          '& .MuiPaper-root': {
            borderRadius: '25px',
            backdropFilter: 'blur(10px)',
            backgroundColor: `rgba(${navBarBackColorRgb}, 0.7)`,
            padding: 1,
          },
          
        }}
      >
        <List sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <Button 
            onClick={() => {
              router.push(`/profil/cm7vqqcbe00001ip35lu5ygip`);
              handlePopoverClose();
            }} 
            sx={{ color: theme.palette.text.primary }}
          >
            <ListItemIcon>
              <Avatar alt={session?.user?.name || "User"} src={session?.user?.image || undefined} />
            </ListItemIcon>
            <ListItemText primary="Môj profil" />
          </Button>
          <Button onClick={() => router.push("/auth/odhlasenie")} sx={{ color: theme.palette.error.main }}>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Odhlásiť" />
          </Button>
        </List>
      </Popover>
    </Box>
  );
}
