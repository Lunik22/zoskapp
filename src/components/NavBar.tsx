//src/components/NavBar.tsx
'use client';
import React, { useState } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PostAddRoundedIcon from '@mui/icons-material/PostAddRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import AppRegistrationRoundedIcon from '@mui/icons-material/AppRegistrationRounded';
import Link from 'next/link';
import { blue } from '@mui/material/colors';

const NavBar = () => {
  const [value, setValue] = useState(0);

  return (
    <BottomNavigation
      sx={{ width: '100%', position: 'fixed', bottom: 0 }}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <Link href="/" passHref>
        <BottomNavigationAction
          label="Domov"
          icon={<HomeRoundedIcon />}
          sx={{
            '& .MuiSvgIcon-root': {
              fontSize: 24,
              transition: 'font-size 0.3s, color 0.3s',
            },
            '&:hover .MuiSvgIcon-root': {
              fontSize: 30,
              color: blue,
            },
          }}
        />
      </Link>
      <Link href="/prispevok" passHref>
        <BottomNavigationAction
          label="Príspevok"
          icon={<PostAddRoundedIcon />}
          sx={{
            '& .MuiSvgIcon-root': {
              fontSize: 24,
              transition: 'font-size 0.3s, color 0.3s',
            },
            '&:hover .MuiSvgIcon-root': {
              fontSize: 30,
              color: blue,
            },
          }}
        />
      </Link>
      <Link href="/notifikacia" passHref>
        <BottomNavigationAction
          label="Notifikácia"
          icon={<NotificationsRoundedIcon />}
          sx={{
            '& .MuiSvgIcon-root': {
              fontSize: 24,
              transition: 'font-size 0.3s, color 0.3s',
            },
            '&:hover .MuiSvgIcon-root': {
              fontSize: 30,
              color: blue,
            },
          }}
        />
      </Link>
      <Link href="/auth/prihlasenie" passHref>
        <BottomNavigationAction
          label="Prihlásenie"
          icon={<LoginRoundedIcon />}
          sx={{
            '& .MuiSvgIcon-root': {
              fontSize: 24,
              transition: 'font-size 0.3s, color 0.3s',
            },
            '&:hover .MuiSvgIcon-root': {
              fontSize: 30,
              color: blue,
            },
          }}
        />
      </Link>
      <Link href="/auth/registracia" passHref>
        <BottomNavigationAction
          label="Registrácia"
          icon={<AppRegistrationRoundedIcon />}
          sx={{
            '& .MuiSvgIcon-root': {
              fontSize: 24,
              transition: 'font-size 0.3s, color 0.3s',
            },
            '&:hover .MuiSvgIcon-root': {
              fontSize: 30,
              color: blue,
            },
          }}
        />
      </Link>
    </BottomNavigation>
  );
};

export default NavBar;