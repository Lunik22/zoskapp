//src\app\theme.ts

"use client";
import { createTheme } from "@mui/material/styles";
import { Outfit } from "next/font/google";

const outfit = Outfit({
    subsets: ['latin-ext'],
    weight: ['300', '500', '700']
  });
  

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#551CFF',
            light: '#C4B2FF',
            dark: '#06001B',
            contrastText: '#F5F2FF'
        },
        background: {
            default: '#06001B',
            paper: '#200087'
        },
        error: {
            main: '#FF0A64'
        },
        text: {
            primary: '#F5F2FF',
            secondary: '#DCD2FF',
        }
    },
    typography: {
        fontFamily: outfit.style.fontFamily,
        h1:{
            fontWeight: 700,
            fontSize: '3rem'
        }
    }
})

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#551CFF',
            light: '#C4B2FF',
            dark: '#0F0040',
            contrastText: '#F5F2FF'
        },
        background: {
            default: '#F5F2FF',
            paper: '#DCD2FF'
        },
        error: {
            main: '#FF0A64'
        },
        text: {
            primary: '#06001B',
            secondary: '#0B002F',
        }
    },
    typography: {
        fontFamily: outfit.style.fontFamily,
        h1: {
            fontWeight: 700,
            fontSize: '3rem'
        }
    }
})