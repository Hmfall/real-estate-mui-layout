import { borderRadius, palette } from '../properties';

const MuiFormControl = {
   MuiFormControl: {
      styleOverrides: {
         root: {
            backgroundColor: palette.light[200],
            borderRadius: '4px',
         },
      },
   },
   MuiFormControlLabel: {
      styleOverrides: {
         root: {},
      },
   },
   MuiFormLabel: {
      styleOverrides: {
         root: {},
      },
   },
};

export default MuiFormControl;