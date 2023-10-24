import React from 'react';
import { Box, Container, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import DefaultBox from './styled/DefaultBox';
import Flex from './styled/Flex';
import Wrapper from './styled/Wrapper';
import FlexBetween from './styled/FlexBetween';

const MoreOffers = () => {
   return (
      <Wrapper>
         <Container>
            <Flex sx={{ gap: '1rem' }}>
               <Flex sx={{ width: '33.333%' }}>
                  <DefaultBox sx={{ width: '100%' }}>
                     <Typography variant="h5" mb={3}>
                        Аренда квартир
                     </Typography>
                     <Stack>
                        <FlexBetween mb={2}>
                           <Typography variant="body1">
                              1-комнатные
                           </Typography>
                           <Typography variant="body2">
                              6
                           </Typography>
                        </FlexBetween>
                        <FlexBetween mb={2}>
                           <Typography variant="body1">
                              2-комнатные
                           </Typography>
                           <Typography variant="body2">
                              5
                           </Typography>
                        </FlexBetween>
                        <FlexBetween mb={2}>
                           <Typography variant="body1">
                              3-комнатные
                           </Typography>
                           <Typography variant="body2">
                              4
                           </Typography>
                        </FlexBetween>
                        <FlexBetween mb={2}>
                           <Typography variant="body1">
                              Студии
                           </Typography>
                           <Typography variant="body2">
                              2
                           </Typography>
                        </FlexBetween>
                        <FlexBetween>
                           <Typography variant="body1">
                              Комнаты
                           </Typography>
                           <Typography variant="body2">
                              2
                           </Typography>
                        </FlexBetween>
                     </Stack>
                  </DefaultBox>
               </Flex>
               <Flex sx={{ width: '33.333%' }}>
                  <DefaultBox sx={{ width: '100%' }}>
                     <Typography variant="h5" mb={3}>
                        Продажа квартир
                     </Typography>
                     <Stack>
                        <FlexBetween mb={2}>
                           <Typography variant="body1">
                              1-комнатные
                           </Typography>
                           <Typography variant="body2">
                              5
                           </Typography>
                        </FlexBetween>
                        <FlexBetween mb={2}>
                           <Typography variant="body1">
                              2-комнатные
                           </Typography>
                           <Typography variant="body2">
                              5
                           </Typography>
                        </FlexBetween>
                        <FlexBetween mb={2}>
                           <Typography variant="body1">
                              3-комнатные
                           </Typography>
                           <Typography variant="body2">
                              3
                           </Typography>
                        </FlexBetween>
                        <FlexBetween mb={2}>
                           <Typography variant="body1">
                              Студии
                           </Typography>
                           <Typography variant="body2">
                              3
                           </Typography>
                        </FlexBetween>
                        <FlexBetween>
                           <Typography variant="body1">
                              Комнаты
                           </Typography>
                           <Typography variant="body2">
                              3
                           </Typography>
                        </FlexBetween>
                     </Stack>
                  </DefaultBox>
               </Flex>

               <Flex sx={{ width: '33.333%' }}>
                  <DefaultBox sx={{ width: '100%' }}>
                     <Typography variant="h5" mb={3}>
                        Новостройки
                     </Typography>
                     <Stack>
                        <FlexBetween mb={2}>
                           <Typography variant="body1">
                              1-комнатные
                           </Typography>
                           <Typography variant="body2">
                              2
                           </Typography>
                        </FlexBetween>
                        <FlexBetween mb={2}>
                           <Typography variant="body1">
                              2-комнатные
                           </Typography>
                           <Typography variant="body2">
                              2
                           </Typography>
                        </FlexBetween>
                        <FlexBetween mb={2}>
                           <Typography variant="body1">
                              3-комнатные
                           </Typography>
                           <Typography variant="body2">
                              1
                           </Typography>
                        </FlexBetween>
                        <FlexBetween mb={2}>
                           <Typography variant="body1">
                              Студии
                           </Typography>
                           <Typography variant="body2">
                              0
                           </Typography>
                        </FlexBetween>
                     </Stack>
                  </DefaultBox>
               </Flex>
            </Flex>
         </Container>
      </Wrapper>
   );
};

export default MoreOffers;