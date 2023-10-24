import { createTheme } from '@mui/material';
import typography from './customize/typography';
import MuiContainer from './customize/MuiContainer';
import MuiButton from './customize/MuiButton';
import MuiFormControl from './customize/MuiFormControl';

export const theme = createTheme({
   spacing: (factor) => `${0.25 * factor}rem`,
   breakpoints: {
      values: {
         xs: 0,
         sm: 576,
         md: 768,
         lg: 992,
         xl: 1200,
      },
   },
   ...typography,
   components: {
      ...MuiButton,
      ...MuiContainer,
      ...MuiFormControl,
      MuiToggleButton: {
         styleOverrides: {
            root: {
               textTransform: 'none',
            },
         },
      },
   },
});

