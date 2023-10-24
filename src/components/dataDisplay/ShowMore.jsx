import React from 'react';
import { Typography } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { palette } from '../../styles/theme/properties';
import Flex from '../styled/Flex';

const ShowMore = ({ isClicked = false }) => {
   return (
      <Flex
         sx={{
            alignItems: 'center',
            cursor: 'pointer',
            '&:hover': {
               '& > *': {
                  color: palette.primary[300],
               },
            },
         }}
      >
         <Typography variant="body1" sx={{ color: palette.primary[200] }}>
            {isClicked ? 'Скрыть' : 'Читать полностью'}
         </Typography>
         <ChevronRightIcon
            sx={{
               width: '20px',
               color: palette.primary[200],
               transform: isClicked ? 'rotate(-90deg)' : 'rotate(90deg)',
            }}
         />
      </Flex>
   );
};

export default ShowMore;