import { boxShadow, palette } from '../properties';
import { borderRadius } from '../theme';

export const MuiButton = {
   MuiButton: {
      styleOverrides: {
         root: {
            width: '100%',
            borderRadius: 4,
            textTransform: 'inherit',
            fontSize: '1rem',
            minWidth: 110,
            height: '2.5rem',
         },
      },
      variants: [
         {
            props: { variant: 'contained' },
            style: {
               color: palette.light[200],
               backgroundColor: palette.primary[200],
               '&:hover': {
                  backgroundColor: palette.primary[300],
               },
            },
         },
         {
            props: { variant: 'outlined' },
            style: {
               color: palette.primary[200],
               backgroundColor: palette.light[200],
               border: `1px solid ${palette.primary[200]}`,
               boxShadow: boxShadow.main
            },
         },
         {
            props: { variant: 'outlined-in-primary' },
            style: {
               color: palette.primary[200],
               backgroundColor: palette.light[200],
               border: 0,
               '&:hover': {
                  backgroundColor: palette.light[100],
               },
            },
         },
         {
            props: { variant: 'outlined-in-secondary' },
            style: {
               color: palette.light[200],
               backgroundColor: palette.primary[200],
               border: 0,
               '&:hover': {
                  backgroundColor: palette.primary[100],
               },
            },
         },
      ],
   },
};

export default MuiButton;