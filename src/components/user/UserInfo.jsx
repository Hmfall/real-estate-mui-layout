import React from 'react';
import Flex from '../styled/Flex';
import { Box, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const UserInfo = () => {
   return (
      <Flex sx={{ alignItems: 'center' }}>
         <Box sx={{ marginRight: 3, borderRadius: '50%', overflow: 'hidden' }}>
            <Box
               sx={{
                  height: 40,
                  width: 40,
               }}>
               <AccountCircleIcon sx={{
                  height: '100%',
                  width: '100%',
               }}/>
            </Box>
         </Box>
         <Typography variant="h6">
            Александр
         </Typography>
      </Flex>
   );
};

export default UserInfo;