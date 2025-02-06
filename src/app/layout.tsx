// src/app/layout.tsx
"use client";

import "./globals.css";
import Navbar from "@/components/NavBar";
import AuthProvider from "../components/AuthProvider";
import { Container, CssBaseline, ThemeProvider, Typography } from "@mui/material";
import { darkTheme, lightTheme } from './theme'
import { useEffect, useState } from "react";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    const currentTheme = theme.palette.mode === 'light' ? darkTheme : lightTheme;
    setTheme(currentTheme) 
    localStorage.setItem('currentTheme', currentTheme.palette.mode)
  };

  useEffect(() => {
    const currentTheme = localStorage.getItem('currentTheme')
    if (currentTheme){
      setTheme(currentTheme === 'dark' ? darkTheme : lightTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches){
      setTheme(darkTheme)
    }
  }, []);
    
  
 


  return (
    <html lang="sk">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AuthProvider>
            <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
              <main style={{ flexGrow: 1 }}>
                <Container>
                  <Typography
                    variant="h1"
                    sx={{  
                      my: 2,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      position: 'absolute', 
                    }}
                  >
                    Zoškapp
                  </Typography>
                  {children}
                  <Navbar toggleTheme={toggleTheme} currentTheme={theme} />
                </Container>
              </main>
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}