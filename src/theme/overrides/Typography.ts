import { Components } from '@mui/material/styles';

export const TypographyOverrides: Components['MuiTypography'] = {
    styleOverrides: {
        root: {
            borderRadius: 50,
            textTransform: 'none',
        },
        h1: {
            fontSize: '4em',
            fontWeight: 600,
            color: '#2D2D2D',
            fontFamily: 'Nohemi',
        },
        h2: {
            fontSize: '3em',
            fontWeight: 600,
            color: '#2D2D2D',
            fontFamily: 'Nohemi',
        },
        h3: {
            fontSize: '2em',
            fontWeight: 600,
            color: '#2D2D2D',
            fontFamily: 'Nohemi',
        },
        h4: {
            fontSize: '1.6em',
            fontWeight: 600,
            fontFamily: 'Nohemi',
        },
        h5: {
            fontSize: '1.3em',
            fontWeight: 600,
            fontFamily: 'Nohemi',
        },
        h6: {
            fontSize: '1.2em',
            fontWeight: 600,
            fontFamily: 'Nohemi',
        },
        body1: {
            fontSize: '1.3em',
            fontWeight: "normal",
            fontFamily: 'Inter',
        },
        body2: {
            fontSize: '0.8em',
            fontWeight: "normal",
        }
    }
  };