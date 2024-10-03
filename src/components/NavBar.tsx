//src/components/NavBar.tsx
'use client';
import { useRouter } from 'next/navigation';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import PostAddIcon from '@mui/icons-material/PostAdd';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import * as React from 'react';

const navItems = [
  { label: 'Home', icon: <HomeIcon />, path: '/' },
  { label: 'Profil', icon: <PeopleIcon />, path: '/profil' },
  { label: 'Prispevok', icon: <PostAddIcon />, path: '/prispevok' },
  { label: 'Prihlásenie', icon: <LoginIcon />, path: '/auth/prihlasenie' },
  { label: 'Registrácia', icon: <PersonAddIcon />, path: '/auth/registracia' },
];

export default function NavMobile() {
  const router = useRouter();
  const [value, setValue] = React.useState(0);
  

  const handleNavigation = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    router.push(navItems[newValue].path);
  };

  return (
    <BottomNavigation showLabels value={value} onChange={handleNavigation} sx={{ position: 'fixed', width: '100%', bottom: 0 }}>
      {navItems.map((item, index) => (
        <BottomNavigationAction key={index} label={item.label} icon={item.icon}/>
      ))}
    </BottomNavigation>
  );
}
