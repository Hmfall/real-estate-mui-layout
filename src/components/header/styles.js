import { boxShadow, palette } from '../../styles/theme/properties';
import { theme } from '../../styles/theme/theme';
import adp from '../../styles/theme/helpers/adp';

export const styles = {
   headerContainer: {},
   headerTop: {
      backgroundColor: palette.primary[200],
      boxShadow: boxShadow.main,
   },
   headerTopInner: {
      padding: '1.2rem 0',
      alignItems: 'center',
   },
   headerBottom: {
      boxShadow: boxShadow.main,
   },
   headerBottomInner: {
      padding: { xs: '0.8rem 0', sm: '1.2rem 0' },
   },
   logo: {
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
   },
   logoIcon: {
      marginRight: '0.5rem',
      color: palette.light[200],
   },
   logoText: {
      color: palette.light[200],
   },
   rightItem: {
      marginRight: '1.4rem',
   },
   favoriteInner: {
      display: 'flex',
      cursor: 'pointer',
   },
   favoriteIcon: {
      color: palette.light[200],
      width: 21,
      height: 21,
      marginRight: '0.15rem',
      marginTop: '0.15rem',
   },
   favoriteText: {
      display: { xs: 'none', sm: 'block' },
      color: palette.light[200],
   },
   accountIcon: {
      marginRight: 1,
      width: 22,
      height: 22,
   },
   menuList: {
      display: { xs: 'none', sm: 'flex' },
   },
   menuMobile: {
      display: { xs: 'block', md: 'none' },
   },
   menuItem: {
      marginRight: adp(2, 1.5, theme.breakpoints.values.xl, theme.breakpoints.values.sm),
   },
   menuText: {
      color: palette.main[200],
      '&:hover': {
         color: palette.primary[200],
      },
   },
   menuIcon: {
      display: { xs: 'flex', sm: 'none' },
   },
   menuIconInner: {
      padding: '12px 12px 12px 0',
   },
   addOfferIcon: {
      marginRight: '0.25rem',
   },
};