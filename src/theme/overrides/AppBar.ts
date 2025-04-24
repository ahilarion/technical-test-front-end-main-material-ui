import { Components } from '@mui/material/styles';

export const AppBarOverrides: Components['MuiAppBar'] = {
    styleOverrides: {
        root: {
            padding: '1em 1em',
            backgroundColor: 'transparent',
            boxShadow: 'none',
        },
    },
  };