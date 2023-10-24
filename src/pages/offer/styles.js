import { palette } from '../../styles/theme/properties';
import { theme } from '../../styles/theme/theme';

export const styles = {
   offerContainer: {
      display: { xs: 'block', lg: 'grid' },
      gridTemplate: '1fr / 2.5fr 1fr', gap: '1rem',
   },
   section: {
      marginBottom: 4,
   },
   sectionTitle: {
      marginBottom: 3,
      marginTop: 1,
   },
   photo: {
      width: '100%', height: { xs: '400px', sm: '500px' },
      position: 'relative'
   },
   secPhoto: {
      margin: '0.8rem 0.8rem 0 0',
      width: '100%',
      height: 'calc(100% - 0.8rem)',
      backgroundPositionX: 'center',
      backgroundPositionY: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      borderRadius: '4px'
   },
   info: {
      marginTop: 2.5,
      flexWrap: 'wrap',
   },
   infoText: {
      flexDirection: 'column',
      alignItems: 'center',
      marginRight: '2.5rem',
      paddingTop: '0.4rem',
   },
   price: {
      display: { xs: 'none', lg: 'block' },
   },
   priceIsMobile: {
      display: { xs: 'block', lg: 'none' },
      marginTop: 3,
   },
   address: {
      marginTop: 3,
   },
   metro: {
      marginTop: 3,
   },
   desc: {
      overflow: 'hidden',
      transition: 'all 0.3s ease',
   },
   userIsMobile: {
      display: { xs: 'block', lg: 'none' },

   },
   buttons: {
      flexDirection: { xs: 'row', lg: 'column' },
      position: { xs: 'fixed', lg: 'relative' },
      zIndex: '10',
      marginTop: { xs: 0, lg: 5 },
      padding: { xs: '1rem', lg: 0 },
      boxShadow: { xs: '0 -4px 10px 0 #00000012', lg: 'none' },
      backgroundColor: palette.light[200],
      bottom: 0,
      left: 0,
      width: '100%',
   },
   phoneButton: {
      flex: '1 0 auto',
      marginRight: { xs: '1rem', lg: 0 },
   },
   favoriteButton: {
      flex: '0 0 56px', [`@media (min-width: ${theme.breakpoints.values.lg}px)`]: {
         position: 'absolute', width: 'calc(100% + 2rem)', left: '-1rem', top: 'calc(100% + 2rem)',
      },
   },
   propItem: {
      marginBottom: '0.5rem',
   },
   propItemValue: {
      width: { xs: '100%', sm: '18rem' },
   },
};
