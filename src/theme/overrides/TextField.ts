import { Components } from '@mui/material/styles';

export const TextFieldOverrides: Components['MuiTextField'] = {
  styleOverrides: {
    root: {
      '& .MuiInputBase-root': {
        borderRadius: 0,
        backgroundColor: 'transparent',
        fontFamily: 'Proximanova',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#333',
          borderWidth: '1px',
          borderRadius: 0,
          borderTop: 'none',
          borderLeft: 'none',
          borderRight: 'none',
        },
        '&:hover fieldset': {
          borderColor: '#555',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#71a394',
          borderWidth: '2px',
          borderTop: 'none',
          borderLeft: 'none',
          borderRight: 'none',
        },
      },
      '& .MuiInputBase-input': {
        padding: '10px 0',
        fontSize: '1em',
      },
      '& .MuiFormLabel-root': {
        fontSize: '1em',
        color: '#555',
        '&.Mui-focused': {
          color: '#71a394',
        },
      },
    },
  },
  defaultProps: {
    variant: 'outlined',
    fullWidth: true,
  },
};
