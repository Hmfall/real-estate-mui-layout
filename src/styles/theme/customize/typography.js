import { palette } from '../properties';

const typography = {
   typography: {
      htmlFontSize: 14,
      fontFamily: [
         'Nunito Sans', 'sans-serif',
      ].join(','),
      h2: {
         fontSize: '1.5rem',
         fontWeight: 800,
         color: palette.main[200],
      },
      h3: {
         fontSize: '1.4rem',
         fontWeight: 600,
         color: palette.main[200],
      },
      h4: {
         fontSize: '1.3rem',
         fontWeight: 600,
         color: palette.main[200],
      },
      h5: {
         fontSize: '1.2rem',
         fontWeight: 600,
         color: palette.main[200],
      },
      h6: {
         fontSize: '1.1rem',
         fontWeight: 500,
         color: palette.main[200],
      },
      body1: {
         fontSize: '1rem',
         fontWeight: 500,
         color: palette.main[200],
         lineHeight: 1.6,
      },
      body2: {
         fontSize: '1rem',
         fontWeight: 400,
         color: palette.secondary[300],
         lineHeight: 1.5,
      },
   },
};

export default typography;