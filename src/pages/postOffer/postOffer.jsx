import React, { useState } from 'react';
import {
   Box,
   Button, Checkbox,
   Container,
   FormControl,
   FormControlLabel,
   Radio,
   RadioGroup, Stack, Switch,
   TextField,
   ToggleButton, ToggleButtonGroup,
   Typography,
} from '@mui/material';

import Wrapper from '../../components/styled/Wrapper';
import DefaultBox from '../../components/styled/DefaultBox';
import { styles } from './styles';
import Flex from '../../components/styled/Flex';
import FlexBetween from '../../components/styled/FlexBetween';
import SearchItem from '../../components/SearchItem';
import ShowMore from '../../components/dataDisplay/ShowMore';

const types = ['Квартира', 'Комната', 'Дача, Дом', 'Гараж', 'Участок', 'Коммерческая'];

const roomsProperties = [
   { rooms: 1, value: '1 комн.' },
   { rooms: 2, value: '2 комн.' },
   { rooms: 3, value: '3 комн.' },
   { rooms: 4, value: '4 комн.' },
   { rooms: 5, value: '5 комн.' },
];

const PostOffer = () => {
   const [checked, setChecked] = useState(false);
   const [rooms, setRooms] = useState('');
   const [renovation, setRenovation] = useState('');
   const [bathroomUnit, setBathroomUnit] = useState('');

   const handleChangeRooms = (event, newAlignment) => {
      setRooms(newAlignment);
   };

   const handleChangeRenovation = (event, newAlignment) => {
      setRenovation(newAlignment);
   };

   const handleChangeBathroomUnit = (event, newAlignment) => {
      setBathroomUnit(newAlignment);
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

   return (
      <Wrapper>
         <Container>
            <DefaultBox padding={1} sx={styles.sections}>
               <FlexBetween>
                  <Box>
                     <Typography variant="h3" sx={{ fontSize: '1.6rem' }} mb={6}>
                        Разместить объявление
                     </Typography>
                  </Box>
                  <Box>
                     <Button variant="outlined">
                        Импортировать XML
                     </Button>
                  </Box>
               </FlexBetween>
               <Box sx={styles.block}>
                  <Typography variant="h4">
                     Выберите цель
                  </Typography>
                  <Box mt={1}>
                     <FormControl>
                        <RadioGroup>
                           <FormControlLabel value="sell" control={<Radio/>} label="Продать"/>
                           <FormControlLabel value="rent" control={<Radio/>} label="Сдать"/>
                        </RadioGroup>
                     </FormControl>
                  </Box>
               </Box>
               <Box>
                  <Typography variant="h4">
                     Выберите тип недвижимости
                  </Typography>
                  <Box mt={1}>
                     <FormControl>
                        <RadioGroup>
                           {types.map((type) => (
                              <FormControlLabel value={type} control={<Radio/>} label={type}/>
                           ))}
                        </RadioGroup>
                     </FormControl>
                  </Box>
               </Box>
            </DefaultBox>
            <DefaultBox padding={1} sx={styles.sections}>
               <Box sx={styles.block}>
                  <Typography variant="h4" mb={3}>
                     Укажите адрес
                  </Typography>
                  <Box sx={styles.address}>
                     <Flex sx={styles.type}>
                        <SearchItem typeValue={'Район субъекта'} properties={roomsProperties}/>
                     </Flex>
                  </Box>
                  <Box sx={styles.address}>
                     <Flex sx={styles.type}>
                        <SearchItem typeValue={'Населенный пункт'} properties={roomsProperties}/>
                     </Flex>
                  </Box>
                  <Box sx={styles.address}>
                     <TextField required label="Улица" variant="outlined" size="small" sx={{ width: '100%' }}/>
                  </Box>
                  <Box sx={styles.address}>
                     <TextField required label="Номер дома" variant="outlined" size="small" sx={{ width: '100%' }}/>
                  </Box>
                  <Box sx={styles.address}>
                     <TextField required label="Номер помещения" variant="outlined" size="small" sx={{ width: '100%' }}/>
                  </Box>
                  <Box sx={styles.address}>
                     <TextField label="Метро" variant="outlined" size="small" sx={{ width: '100%' }}/>
                  </Box>
               </Box>
            </DefaultBox>
            <DefaultBox padding={1} sx={styles.sections}>
               <Box sx={styles.block}>
                  <Typography variant="h4" mb={3}>
                     Фотографии
                  </Typography>
                  {/*                  <Box>
                     photo
                  </Box>*/}
                  <Box sx={styles.loadPhoto}>
                     <Box sx={styles.loadPhotoInner}>
                        <Button variant="outlined">
                           <Box sx={{ width: '18px', height: '18px', marginRight: '0.2rem' }}>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                 <path fill-rule="evenodd"
                                       d="M10.5 3.33a1.2 1.2 0 0 0-1.7 0L5.01 7.1a3.45 3.45 0 0 0 0 4.9 3.5 3.5 0 0 0 4.93 0l1.25-1.24a1 1 0 0 1 1.4 0 .99.99 0 0 1 0 1.4l-1.24 1.24a5.5 5.5 0 0 1-7.75 0 5.43 5.43 0 0 1 0-7.7l3.8-3.77a3.2 3.2 0 0 1 4.5 0l1.2 1.18a3.07 3.07 0 0 1 0 4.36L9.23 11.3a2.5 2.5 0 0 1-3.52 0 2.47 2.47 0 0 1 0-3.5l3.24-3.2a1 1 0 0 1 1.4 0 .99.99 0 0 1 0 1.4L7.12 9.2a.5.5 0 0 0 0 .7c.2.2.51.2.7 0l3.86-3.83a1.1 1.1 0 0 0 0-1.56L10.5 3.33z"
                                       clip-rule="evenodd"></path>
                              </svg>
                           </Box>
                           Прикрепите фото
                        </Button>
                     </Box>
                  </Box>
               </Box>
            </DefaultBox>
            <DefaultBox padding={1} sx={styles.sections}>
               <Box>
                  <Typography variant="h4" mb={3}>
                     Параметры
                  </Typography>
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
                        Площадь
                     </Typography>
                     <Flex sx={{ display: 'flex' }}>
                        <Box sx={{ position: 'relative', ...styles.field }}>
                           <Box sx={styles.areaItem}>
                              <TextField required label="Общая площадь" variant="outlined" size="small"/>
                           </Box>
                        </Box>
                        <Box sx={{ position: 'relative', ...styles.field }}>
                           <Box sx={styles.areaItem}>
                              <TextField label="Жилая площадь" variant="outlined" size="small"/>
                           </Box>
                        </Box>
                        <Box sx={{ position: 'relative', ...styles.field }}>
                           <Box sx={styles.areaItem}>
                              <TextField label="Площадь кухни" variant="outlined" size="small"/>
                           </Box>
                        </Box>
                     </Flex>
                  </Box>
                  <Box sx={styles.params}>
                     <Typography variant="h6" mb={3}>
                        Этаж
                     </Typography>
                     <Flex>
                        <Box sx={styles.field}>
                           <TextField required label="Этаж" variant="outlined" size="small"/>
                        </Box>
                        <Box sx={styles.field}>
                           <TextField required label="Этажей в доме" variant="outlined" size="small"/>
                        </Box>
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
                     <Flex sx={{ alignItems: 'center' }}>
                        <Typography variant="h6" mr={1}>
                           Свободная планировка
                        </Typography>
                        <Flex>
                           <Switch
                              checked={checked}
                              onChange={(event) => setChecked(event.target.checked)}
                           />
                        </Flex>
                     </Flex>
                  </Box>
                  <Flex sx={{ flexDirection: 'column', marginTop: '0.4rem' }}>
                     <Typography variant="h6" mr={1}>
                        Добавить информацию о доме
                     </Typography>
                     <ShowMore/>
                  </Flex>
               </Box>
            </DefaultBox>
            <DefaultBox padding={1} sx={styles.sections}>
               <Box sx={styles.block}>
                  <Typography variant="h4" mb={3}>
                     Укажите цену
                  </Typography>
                  <Box sx={{ position: 'relative', width: '187px' }}>
                     <Box sx={styles.price}>
                        <TextField required label="Цена" variant="outlined" size="small"/>
                     </Box>
                  </Box>
               </Box>
            </DefaultBox>
            <DefaultBox padding={1} sx={styles.sections}>
               <Box sx={styles.block}>
                  <Typography variant="h4" mb={3}>
                     Описание
                  </Typography>
                  <Box>
                  </Box>
                  <textarea
                     maxlength={10000}
                     placeholder="Опишите недвижимость подробнее"
                     style={styles.textarea}>
                  </textarea>
               </Box>
            </DefaultBox>
            {/*       <Button variant="contained" sx={{ width: '20rem' }}>
               Войти или зарегистрироваться
            </Button>*/}
            <Button variant="contained" sx={{ width: '20rem' }}>
               Разместить объявление
            </Button>
         </Container>
         <Stack>
            1
         </Stack>
      </Wrapper>
   );
};

export default PostOffer;