import React from 'react';
import Flex from '../styled/Flex';
import { Typography } from '@mui/material';

import { palette } from '../../styles/theme/properties';

const OfferPriceCard = ({ isResponsive = false, price, priceUnit }) => {
   return (
      <React.Fragment>
         <Flex
            sx={{
               flexDirection: isResponsive ? { xs: 'row', md: 'column' } : 'column',
               alignItems: isResponsive ? { xs: 'center', md: 'start' } : 'start',
            }}
         >
            <Typography
               variant="h2"
               sx={{ fontWeight: 800 }}
               color={palette.main[200]} mr={{ xs: 6, md: 0 }}>
               {price} ₽
            </Typography>
            <Typography
               variant="body1"
               sx={{ marginTop: isResponsive ? { xs: 0, md: '0.4rem' } : '0.4rem' }}
               color={palette.main[200]}
            >
               {priceUnit} ₽/м²
            </Typography>
         </Flex>
      </React.Fragment>
   );
};

export default OfferPriceCard;