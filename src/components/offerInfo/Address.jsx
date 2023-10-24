import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Box, Typography } from '@mui/material';

import { palette } from '../../styles/theme/properties';

const Address = ({ city, street, house }) => {
   return (
      <Box
         sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            marginLeft: '-2px',
         }}>
         <LocationOnIcon sx={{ width: 19, color: palette.main[200] }}/>
         <Typography variant="body1" component="span" color={palette.main[200]}>
            {city}, {street}, {house}
         </Typography>
      </Box>
   );
};

export default Address;