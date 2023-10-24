import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import Flex from '../styled/Flex';
import { styles } from '../../pages/offer/styles';
import { palette } from '../../styles/theme/properties';

const Residential = () => {
   return (
      <Box>
         <Stack>
            <Flex sx={styles.propItem}>
               <Flex component="span" sx={styles.propItemValue}>
                  <Typography variant="body1" sx={{ color: palette.secondary[200] }}>
                     Год сдачи
                  </Typography>
               </Flex>
               <Flex component="span">
                  <Typography variant="body1">
                     2013
                  </Typography>
               </Flex>
            </Flex>
            <Flex sx={styles.propItem}>
               <Flex component="span" sx={styles.propItemValue}>
                  <Typography variant="body1" sx={{ color: palette.secondary[200] }}>
                     Общее количество этажей в доме
                  </Typography>
               </Flex>
               <Flex component="span">
                  <Typography variant="body1">
                     16
                  </Typography>
               </Flex>
            </Flex>
            <Flex sx={styles.propItem}>
               <Flex component="span" sx={styles.propItemValue}>
                  <Typography variant="body1" sx={{ color: palette.secondary[200] }}>
                     Тип дома
                  </Typography>
               </Flex>
               <Flex component="span">
                  <Typography variant="body1">
                     Панельный
                  </Typography>
               </Flex>
            </Flex>
            <Flex sx={{ ...styles.propItem, marginBottom: 0 }}>
               <Flex component="span" sx={styles.propItemValue}>
                  <Typography variant="body1" sx={{ color: palette.secondary[200] }}>
                     Наличие лифта
                  </Typography>
               </Flex>
               <Flex component="span">
                  <Typography variant="body1">
                     Да
                  </Typography>
               </Flex>
            </Flex>
         </Stack>
      </Box>
   );
};

export default Residential;