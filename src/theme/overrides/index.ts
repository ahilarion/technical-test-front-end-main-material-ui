import { Components } from '@mui/material/styles';
import { ButtonOverrides } from './Button';
import { AppBarOverrides } from './AppBar';
import { TypographyOverrides } from './Typography';
import { TextFieldOverrides } from './TextField';

export const components: Components = {
  MuiButton: ButtonOverrides,
  MuiAppBar: AppBarOverrides,
  MuiTypography: TypographyOverrides,
  MuiTextField: TextFieldOverrides,
};
