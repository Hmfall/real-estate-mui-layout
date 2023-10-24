import React from 'react';
import { Typography } from '@mui/material';

import { palette } from '../../styles/theme/properties';
import Flex from '../styled/Flex';

const OfferCardResidential = ({ value, year }) => {
   return (
      <Flex sx={{ flexDirection: { xs: 'row', md: 'column' } }}>
         <Typography
            variant="body1"
            color={palette.primary[200]}
            mr={{ xs: 3, md: 0 }}
            sx={{
               fontWeight: '600',
            }}
         >
            ЖК “{value}”
         </Typography>
         <Typography
            variant="body1"
            color={palette.primary[200]}
            sx={{
               fontWeight: '600',
            }}
         >
            Год сдачи: {year}
         </Typography>
      </Flex>
   );
};

export default OfferCardResidential;