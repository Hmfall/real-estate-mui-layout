import { palette } from '../../styles/theme/properties';
import adp from '../../styles/theme/helpers/adp';

export const styles = {
   sections: {
      marginBottom: 4,
   },
   block: {
      marginBottom: 4,
   },
   loadPhoto: {
      display: 'flex',
      justifyContent: 'center',
      border: `1px dotted ${palette.primary[200]}`,
   },
   loadPhotoInner: {
      flex: '0 1 14rem',
      padding: `${adp(3, 2)} 0`,
   },
   params: {
      marginBottom: 6,
   },
   field: {
      marginRight: 4,
   },
   areaItem: {
      '&::after': {
         content: '"м²"',
         position: 'absolute',
         top: '8px',
         right: '9px',
      },
   },
   price: {
      '&::after': {
         content: '"₽"',
         position: 'absolute',
         top: '8px',
         right: '9px',
      },
   },
   desc: {
      width: '100%',
   },
   textarea: {
      height: '10rem',
      resize: 'none',
      font: 'inherit',
      width: '100%',
      border: '1px solid #c4c4c4',
      borderRadius: '4px',
      padding: '8.5px 14px',
   },
   address: {
      marginBottom: '1rem',
      width: '30%',
   },
};