import { palette } from '../../styles/theme/properties';

export const styles = {

   container: {
      display: { xs: 'flex', md: 'grid' },
      position: 'relative',
      minHeight: { xs: 300, md: 340 },
      maxHeight: { xs: 520, md: 340 },
      flexDirection: { xs: 'column' },
      gridTemplateColumns: { md: '300px 2fr 2fr', lg: '340px 2.5fr 1fr' },
      gridTemplateRows: { md: 'repeat(4, 1fr)' },
      columnGap: 4,

   },
   photo: {
      gridRow: { md: '1 / 5' },
      gridColumn: { md: '1 / 2' },
      overflow: 'hidden',
      height: { xs: '300px', md: '100%' },
   },
   photoMain: {
      height: { xs: '75%' },
      borderRadius: '5px',
      overflow: 'hidden',
      display: { xs: 'none', md: 'block' },
   },
   photoSecondary: {
      height: { xs: '100%', md: '25%' },
      overflow: { xs: 'auto', md: 'hidden' },
   },
   photoSecondaryItems: {
      flexShrink: 0,
      borderRadius: '5px',
      overflow: 'hidden',
      height: { xs: '100%', md: 'auto' },
      marginTop: { xs: 0, md: '0.5rem' },
   },
   info: {
      flexDirection: 'column',
      gap: 1.5,
      gridRow: { md: '1 / 2' },
      gridColumn: { md: '2 / 4', lg: '2 / 3' },
      marginTop: { xs: 3, md: 0 },
   },
   infoText: {
      fontSize: { xs: '1.1rem', md: '1.2em', lg: '1.4rem' },
      color: palette.primary[300],
   },
   desc: {
      gap: 3,
      gridRow: { md: '2 / 3' },
      gridColumn: { md: '2 / 4', lg: '2 / 3' },
      marginTop: { xs: 3, md: 0 },
   },
   descText: {
      '-webkit-line-clamp': { xs: '2', md: '4' },
      '-webkit-box-orient': 'vertical',
      display: '-webkit-box',
      overflow: 'hidden',
   },
   otherInfo: {
      gridRow: { md: '4 / 5' },
      gridColumn: { md: '2 / 3' },
      alignItems: 'end',
      marginTop: { xs: 3, md: 0 },
   },
   price: {
      gridRow: { lg: '1 / 3', md: '3 / 4' },
      gridColumn: { lg: '3 / 4', md: '2 / 3' },
      marginTop: { xs: 3, md: 4, lg: 0 },
   },
   userInfo: {
      gridRow: { md: '3 / 5' }, gridColumn: { md: '3 / 4' },
      flexDirection: { xs: 'row', md: 'column' },
      justifyContent: { xs: 'end' },
      alignItems: { md: 'center', lg: 'start' },
      marginTop: { xs: 3, md: 0 },
   },
};