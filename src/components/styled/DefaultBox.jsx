import { Box } from '@mui/material';
import { styled } from '@mui/material';
import { borderRadius, boxShadow } from '../../styles/theme/properties';

const DefaultBox = styled(Box)(({ hoverBoxShadow, padding }) => ({
   boxShadow:  boxShadow.main,
   padding: padding ? '2rem' : '1rem',
   borderRadius: borderRadius.main,
   transition: 'box-shadow 0.3s ease',
   '&:hover': {
      boxShadow: hoverBoxShadow && boxShadow.secondary,
   },
}));

export default DefaultBox;