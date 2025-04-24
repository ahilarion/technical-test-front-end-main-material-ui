import { Components } from '@mui/material/styles';

export const ButtonOverrides: Components['MuiButton'] = {
    styleOverrides: {
        root: {
            borderRadius: 50,
            textTransform: 'none',
            fontFamily: 'Proximanova',
        },
        text: {
            fontSize: '1.3em',
            padding: '0em 1em',
        },
        contained: {
            boxShadow: 'none',
            fontSize: '1.4em',
            fontWeight: 500,
            height: '64px',
            padding: '0em 2em',
        },
    },
    defaultProps: {
        disableElevation: true,
    },
  };