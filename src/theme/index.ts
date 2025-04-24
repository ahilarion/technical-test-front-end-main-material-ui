import { createTheme } from '@mui/material/styles';

import { components } from './overrides';

const palette = {
    primary: {
        main: '#70AF9B',
        light: '#8CBCAB',
        dark: '#5D9A87',
        contrastText: '#FFFFFF',
    },
    secondary: {
        main: '#2D2D2D',
        light: '#4D4D4D',
        dark: '#1A1A1A',
        contrastText: '#FFFFFF',
    },
    background: {
        default: '#F8F6F1',
        paper: '#FFFFFF',
    },
    text: {
        primary: '#2D2D2D',
        secondary: '#666666',
    },
}

const typography = {
    fontFamily: 'Proximanova, Nohemi, Inter',
}

export const theme = createTheme({
    palette,
    typography,
    components,
});
