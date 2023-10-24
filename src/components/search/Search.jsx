import React, { useState } from 'react';
import { Box, Button, Container, Stack, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { palette } from '../../styles/theme/properties';
import { styles } from './styles';
import SearchItem from '../SearchItem';
import Flex from '../styled/Flex';

const offers = ['Купить', 'Снять'];

const typeProperties = [
   { category: 'flat', value: 'Квартира во вторичке и новостройке' },
   { category: 'house', value: 'Дом' },
];

const roomsProperties = [
   { rooms: 1, value: '1 комн.' },
   { rooms: 2, value: '2 комн.' },
   { rooms: 3, value: '3 комн.' },
   { rooms: 4, value: '4 комн.' },
   { rooms: 5, value: '5 комн.' },
];

const cityProperties = [
   { id: 1, value: 'Москва' },
   { id: 2, value: 'Санкт-Петербург' },
];

const Search = () => {
   const [activeOffer, setActiveOffer] = useState('Купить');
   const navigate = useNavigate();

   return (
      <Box sx={styles.wrapper}>
         <Container>
            <Box>
               <Stack sx={styles.inner}>
                  <Box
                     sx={{
                        display: 'flex',
                     }}
                  >
                     {offers.map((offer, index) => (
                        <Button
                           variant={activeOffer === offer ? 'outlined-in-secondary' : 'outlined-in-primary'}
                           key={offer}
                           onClick={() => setActiveOffer(offer)}
                           sx={{
                              display: 'flex',
                              width: '50%',
                              justifyContent: 'center',
                              alignItems: 'center',
                              backgroundColor: (activeOffer === offer) ? palette.primary[200] : palette.light[200],
                              borderRadius: (!index ? '4px 0 0 4px' : '0 4px 4px 0'),
                           }}
                        >
                           <Typography
                              variant="h6"
                              sx={{
                                 color: (activeOffer === offer) ? palette.light[200] : palette.primary[200],
                              }}>
                              {offer}
                           </Typography>
                        </Button>
                     ))}
                  </Box>
                  <Box sx={styles.searchInner}>
                     <Flex sx={styles.type}>
                        <SearchItem typeValue={'Тип'} properties={typeProperties}/>
                     </Flex>
                     <Box sx={styles.city}>
                        <SearchItem typeValue={'Город'} properties={cityProperties}/>
                     </Box>
                     <Box sx={styles.rooms}>
                        <SearchItem typeValue={'Комнат'} properties={roomsProperties}/>
                     </Box>
                     <Flex sx={styles.price}>
                        <Box sx={styles.priceStart}>
                           <TextField label="Цена от" variant="outlined" size="small" sx={{ width: '100%' }}/>
                        </Box>
                        <Box sx={styles.priceEnd}>
                           <TextField label="Цена до" variant="outlined" size="small" sx={{ width: '100%' }}/>
                        </Box>
                     </Flex>
                     <Box sx={styles.btn}>
                        <Button variant="contained" onClick={() => navigate('/offers')}>
                           Найти
                        </Button>
                     </Box>
                  </Box>
               </Stack>
            </Box>
         </Container>
      </Box>
   );
};

export default Search;