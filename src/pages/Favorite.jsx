import React from 'react';
import { Box, Container, Stack, Typography } from '@mui/material';

import Wrapper from '../components/styled/Wrapper';
import OfferItem from '../components/offerCard/OfferCard';

const Favorite = () => {
   return (
      <Wrapper>
         <Container>
            <Box mb={6}>
               <Typography variant="h3">
                  Избранное
               </Typography>
            </Box>
            <Stack>
               <OfferItem inUserInfo={false}/>
            </Stack>
         </Container>
      </Wrapper>
   );
};

export default Favorite;