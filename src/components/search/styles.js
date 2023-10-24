import backImg from '../../assets/img/search3.jpg';
import { theme } from '../../styles/theme/theme';

export const styles = {
   wrapper: {
      padding: { xs: '3rem 0', sm: '6rem 0' },
      backgroundImage: `url(${backImg});`,
      backgroundPositionX: 'center',
      backgroundPositionY: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
   },
   inner: {
      padding: 8,
      borderRadius: '8px',
      backgroundColor: 'rgba(0.49, 0.49, 0.49, 0.7)',
      /*backgroundColor: 'rgba(255, 255, 255, 0.8)',*/
   },
   searchInner: {
      display: 'grid',
      [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
         display: 'flex',
         flexDirection: 'column',
         justifyContent: 'center',
      },
      gridTemplate: 'repeat(2, 1fr) / repeat(8, 1fr)',
      marginTop: '1.5rem',
      columnGap: { xs: 5, sm: 4 },
      rowGap: 6,
   },
   type: {
      gridRow: '1 / 2',
      gridColumn: '3 / 5',
   },
   city: {
      gridRow: '1 / 2',
      gridColumn: '1 / 3',
   },
   rooms: {
      gridRow: '1 / 2',
      gridColumn: '5 / 7',
   },
   price: {
      gridRow: '1 / 2',
      gridColumn: '7 / 9',
   },
   priceStart: {
      width: '50%',
      marginRight: 4,
   },
   priceEnd: {
      width: '50%',
   },
   btn: {
      gridRow: '2 / 3',
      gridColumn: '7 / 9',
   },
};