import React, { useState } from 'react';
import {
   Button,
   Checkbox,
   Container,
   Stack,
   ToggleButton,
   ToggleButtonGroup,
   Typography,
} from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import SortIcon from '@mui/icons-material/Sort';

import OfferItem from './offerCard/OfferCard';
import Wrapper from './styled/Wrapper';
import FlexBetween from './styled/FlexBetween';
import Flex from './styled/Flex';
import { palette } from '../styles/theme/properties';
import TuneIcon from '@mui/icons-material/Tune';
import { styles } from '../pages/postOffer/styles';
import SearchItem from './SearchItem';

const loginContainer = {
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: '50%',
   bgcolor: 'background.paper',
   boxShadow: 24,
   padding: '2rem',
   borderRadius: '12px',
};

const typeProperties = [
   { category: 'flat', value: 'Квартира во вторичке и новостройке' },
   { category: 'house', value: 'Дом' },
];

const types = ['Квартира', 'Комната', 'Дача, Дом', 'Гараж', 'Участок', 'Коммерческая'];

const OfferList = () => {
   const [rooms, setRooms] = useState('');
   const [renovation, setRenovation] = useState('');
   const [bathroomUnit, setBathroomUnit] = useState('');
   const [sdelka, setSdelka] = useState('');
   const [vid, setVid] = useState('');
   const [checked, setChecked] = useState(false);

   const handleChangeRooms = (event, newAlignment) => {
      setRooms(newAlignment);
   };

   const handleChangeRenovation = (event, newAlignment) => {
      setRenovation(newAlignment);
   };

   const handleChangeBathroomUnit = (event, newAlignment) => {
      setBathroomUnit(newAlignment);
   };

   const handleChangeType = (event, newAlignment) => {
      setSdelka(newAlignment);
   };

   const roomsVal = [
      <ToggleButton value="0" key="0">
         1
      </ToggleButton>,
      <ToggleButton value="1" key="1">
         2
      </ToggleButton>,
      <ToggleButton value="2" key="2">
         3
      </ToggleButton>,
      <ToggleButton value="3" key="3">
         4
      </ToggleButton>,
      <ToggleButton value="4" key="4">
         5+
      </ToggleButton>,
   ];

   const renovationVal = [
      <ToggleButton value="0" key="0">
         евроремонт
      </ToggleButton>,
      <ToggleButton value="1" key="1">
         косметический
      </ToggleButton>,
      <ToggleButton value="2" key="2">
         дизайнерский
      </ToggleButton>,
      <ToggleButton value="3" key="3">
         требует ремонта
      </ToggleButton>,
   ];

   const bathroomUnitVal = [
      <ToggleButton value="0" key="0">
         совмещенный
      </ToggleButton>,
      <ToggleButton value="1" key="1">
         раздельный
      </ToggleButton>,
   ];

   const sdelkaVal = [
      <ToggleButton value="0" key="0">
         Продажа
      </ToggleButton>,
      <ToggleButton value="1" key="1">
         Аренда
      </ToggleButton>,
   ];

   const controlRooms = {
      value: rooms,
      onChange: handleChangeRooms,
      exclusive: true,
   };

   const controlRenovation = {
      value: renovation,
      onChange: handleChangeRenovation,
      exclusive: true,
   };

   const controlBathroomUnit = {
      value: bathroomUnit,
      onChange: handleChangeBathroomUnit,
      exclusive: true,
   };

   const controlSdelka = {
      value: sdelka,
      onChange: handleChangeType,
      exclusive: true,
   };

   const [open, setOpen] = React.useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);
   return (
      <Box sx={{ minHeight: '100vh' }}>
         <Wrapper>
            <Container>
               <FlexBetween mb={6}>
                  <Flex>
                     <Box>
                        <Button variant="outlined" onClick={handleOpen}>
                           <TuneIcon sx={{
                              marginRight: '8px',
                              width: '20px',
                              color: palette.primary[200],
                           }}/>
                           Фильтры
                        </Button>
                        <Modal open={open} onClose={handleClose}>
                           <Box sx={loginContainer}>
                              <Typography variant="h4" component="h2" mb={8}>
                                 Фильтры
                              </Typography>
                              <Box sx={styles.params}>
                                 <Typography variant="h6" mb={3}>
                                    Тип сделки
                                 </Typography>
                                 <Flex mb={4}>
                                    <ToggleButtonGroup {...controlSdelka} aria-label="Medium sizes">
                                       {sdelkaVal}
                                    </ToggleButtonGroup>
                                 </Flex>
                                 <Box sx={styles.params}>
                                    <Typography variant="h6" mb={3}>
                                       Категория недвижимости
                                    </Typography>
                                    <Flex sx={{ width: 'calc(187px * 2 + 1rem)' }}>
                                       <SearchItem typeValue={'Тип'} properties={typeProperties}/>
                                    </Flex>
                                 </Box>
                                 <Box sx={styles.params}>
                                    <Typography variant="h6" mb={3}>
                                       Количество комнат
                                    </Typography>
                                    <ToggleButtonGroup {...controlRooms} aria-label="Medium sizes">
                                       {roomsVal}
                                    </ToggleButtonGroup>
                                 </Box>
                                 <Box sx={styles.params}>
                                    <Typography variant="h6" mb={3}>
                                       Цена
                                    </Typography>
                                    <TextField label="от" variant="outlined" size="small" sx={{ ...styles.price, marginRight: '1rem' }}/>
                                    <TextField label="до" variant="outlined" size="small" sx={styles.price}/>
                                 </Box>
                                 <Box sx={styles.params}>
                                    <Typography variant="h6" mb={3}>
                                       Площадь
                                    </Typography>
                                    <Flex sx={{ display: 'flex' }}>
                                       <Box sx={{ position: 'relative', ...styles.field }}>
                                          <Typography variant="h6" mb={3}>
                                             Общая площадь
                                          </Typography>
                                          <Box>
                                             <TextField label="от" variant="outlined" size="small"
                                                        sx={{ ...styles.areaItem, marginRight: '1rem' }}/>
                                             <TextField label="до" variant="outlined" size="small" sx={styles.areaItem}/>
                                          </Box>
                                       </Box>
                                    </Flex>
                                 </Box>
                                 <Typography variant="h6" mb={2} sx={{ color: palette.primary[200] }}>
                                    Дополнительно
                                 </Typography>
                                 <Box sx={styles.params}>
                                    <Typography variant="h6" mb={3}>
                                       Тип санузла
                                    </Typography>
                                    <Flex>
                                       <ToggleButtonGroup {...controlBathroomUnit} aria-label="Medium sizes">
                                          {bathroomUnitVal}
                                       </ToggleButtonGroup>
                                    </Flex>
                                 </Box>
                                 <Box sx={styles.params}>
                                    <Typography variant="h6" mb={3}>
                                       Ремонт
                                    </Typography>
                                    <Flex>
                                       <ToggleButtonGroup {...controlRenovation} aria-label="Medium sizes">
                                          {renovationVal}
                                       </ToggleButtonGroup>
                                    </Flex>
                                 </Box>
                                 <Box>
                                    <Typography variant="h6" mb={3}>
                                       Вид из окон
                                    </Typography>
                                    <Stack sx={{ marginLeft: '-10px', marginBottom: 6 }}>
                                       <Flex sx={{ display: 'flex', alignItems: 'center' }}>
                                          <Checkbox label="" defaultChecked/>
                                          <Typography variant="body1">
                                             Двор
                                          </Typography>
                                       </Flex>
                                       <Flex sx={{ display: 'flex', alignItems: 'center' }}>
                                          <Checkbox label="" defaultChecked/>
                                          <Typography variant="body1">
                                             Улица
                                          </Typography>
                                       </Flex>

                                    </Stack>
                                    <FlexBetween>
                                       <Button variant="contained">
                                          Показать
                                       </Button>
                                    </FlexBetween>
                                 </Box>
                              </Box>
                           </Box>
                        </Modal>
                     </Box>
                  </Flex>
                  <Box>
                     <Typography variant="h5">
                        Санкт-Петербург > 1 комн. > Квартира во вторичке и новостройке
                     </Typography>
                  </Box>
                  <Flex>
                     <Button variant="outlined">
                        <SortIcon sx={{ marginRight: '4px' }}/>
                        Сначала дешевые
                        <ChevronRightIcon sx={{
                           marginLeft: '3px',
                           width: '20px',
                           color: palette.primary[200],
                           transform: 'rotate(90deg)',
                        }}/>
                     </Button>
                  </Flex>
               </FlexBetween>
               <OfferItem inUserInfo={true}/>
            </Container>
         </Wrapper>
      </Box>
   );
};

export default OfferList;