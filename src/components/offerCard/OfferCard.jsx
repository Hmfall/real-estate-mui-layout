import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import DoneIcon from '@mui/icons-material/Done';
import BookmarkIcon from '@mui/icons-material/Bookmark';

import Flex from '../styled/Flex';
import DefaultBox from '../styled/DefaultBox';
import Metro from '../offerInfo/Metro';
import Address from '../offerInfo/Address';
import OfferCardResidential from '../offerInfo/offerCardResidential';
import OfferPriceCard from '../offerInfo/OfferPriceCard';
import UserInfo from '../user/UserInfo';
import { styles } from './styles';
import UserPhone from '../user/UserPhone';
import { palette } from '../../styles/theme/properties';
import { useNavigate } from 'react-router-dom';

const images = [
   'https://img.dmclk.ru/c960x640q80/vitrina/owner/2e/53/2e53fa6177fa43728d39a79404ea55f4.webp',
   'https://img.dmclk.ru/s240x160q80/vitrina/owner/22/7e/227e16db032b4b2986db8010570bbc97.webp',
   'https://img.dmclk.ru/c960x640q80/vitrina/owner/57/58/57586abbb56f4526874c868624c2ac51.webp',
   'https://img.dmclk.ru/c960x640q80/vitrina/owner/57/58/57586abbb56f4526874c868624c2ac51.webp',
   'https://img.dmclk.ru/c960x640q80/vitrina/owner/57/58/57586abbb56f4526874c868624c2ac51.webp',
   'https://img.dmclk.ru/c960x640q80/vitrina/owner/57/58/57586abbb56f4526874c868624c2ac51.webp',
   'https://img.dmclk.ru/c960x640q80/vitrina/owner/57/58/57586abbb56f4526874c868624c2ac51.webp',
   'https://img.dmclk.ru/c960x640q80/vitrina/owner/57/58/57586abbb56f4526874c868624c2ac51.webp',
   'https://img.dmclk.ru/c960x640q80/vitrina/owner/57/58/57586abbb56f4526874c868624c2ac51.webp',
   'https://img.dmclk.ru/c960x640q80/vitrina/owner/57/58/57586abbb56f4526874c868624c2ac51.webp',
   'https://img.dmclk.ru/c960x640q80/vitrina/owner/57/58/57586abbb56f4526874c868624c2ac51.webp',
];

const OfferCard = ({ inUserDelete, inUserInfo, isAdmin }) => {
   const navigate = useNavigate();

   return (
      <DefaultBox hoverBoxShadow={1} sx={{ marginBottom: '1rem' }}>
         <Box component="article" sx={styles.container}>
            <Stack sx={styles.photo}>
               <Box sx={styles.photoMain}>
                  <img src={images[0]} alt="..."/>
               </Box>
               <Flex sx={styles.photoSecondary}>
                  {images.slice(0, 12).map((image, i) => (
                     <Box
                        sx={{
                           ...styles.photoSecondaryItems,
                           width: { xs: '92%', sm: '62%', md: i === 2 ? '33.333%' : 'calc(33.333% - 0.5rem)' },
                           marginRight: (i !== images.length - 1 ? '0.5rem' : 0),
                        }}
                     >
                        <img src={image} alt="..."/>
                     </Box>
                  ))}
               </Flex>
            </Stack>
            <Flex sx={styles.info}>
               <Box component="a" onClick={() => navigate('/offers/1')}>
                  <Flex sx={{ gap: 3 }}>
                     <Typography sx={styles.infoText} variant="h4" component="span">
                        1-комн. кв.
                     </Typography>
                     <Typography sx={styles.infoText} variant="h4" component="span">
                        42,93 м²
                     </Typography>
                     <Typography sx={styles.infoText} variant="h4" component="span">
                        23/24 этаж
                     </Typography>
                  </Flex>
               </Box>
               <Box>
                  <Address city={'Санкт-Петербург'} street={'Гражданский проспект'} house={'79к3'}/>
               </Box>
               <Box sx={{ paddingBottom: { xs: '1px', md: 1.5 } }}>
                  <Metro value={'Академическая'}/>
               </Box>
            </Flex>
            <Flex sx={styles.desc}>
               <Typography variant="body2" sx={styles.descText}>
                  Продается однокомнатная квартира. «Веселый поселок» (правобережная часть Невского Района) - современный спальный район
                  города с
                  развитой инфраструктурой и удобным транспортным положением. До центра города 10 минут на метро, 4 км до КАД, 15 минут
                  до Московского вокзала. Рядом, в шаговой доступности:
                  Яблоновский сад, набережная реки Оккервиль, парк Есенина, парк Строителей; гипермаркеты: Максидом, Окей,
                  Карусель, Пятерочка, Магнит; Невский универсам, Невский рынок, бассейн Невская волна; престижные спортивные
                  клубы, Ледовый дворец; рестораны, кафе, банки
               </Typography>
            </Flex>
            <Flex sx={styles.otherInfo}>
               <OfferCardResidential value={'Твоя привелегия'} year={2023}/>
            </Flex>
            <Flex sx={styles.price}>
               <Box>
                  <OfferPriceCard price={'7 340 000'} priceUnit={'170 970'} isResponsive={true}/>
               </Box>
            </Flex>
            {inUserInfo && (
               <Flex sx={styles.userInfo}>
                  <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                     <UserInfo/>
                  </Box>
                  <Box width="100%" mt={{ xs: 2, md: 5 }}>
                     <UserPhone value={'+7 123 456 78 90'}/>
                  </Box>
               </Flex>
            )}
            <Box
               sx={{
                  position: 'absolute',
                  right: '1rem',
               }}
            >
               <Typography fontSize={{ xs: '1.1rem', md: '1.25rem', lg: '1.4rem' }} color={palette.secondary[200]}>
                  <BookmarkIcon/>
               </Typography>
            </Box>
         </Box>
         {inUserDelete && (
            <Box mt={6}>
               <Button variant="outlined" sx={{ border: '1px solid  #770000', color: '#ac0000' }}>
                  <ClearIcon/>
                  Удалить объявление
               </Button>
            </Box>
         )}
         {isAdmin && (
            <Flex mt={8}>
               <Box sx={{ flex: '1 1 50%' }} mr={5}>
                  <Button variant="contained">
                     <DoneIcon/>
                     Принять
                  </Button>
               </Box>
               <Flex sx={{ flex: '1 1 50%' }}>
                  <Button variant="outlined" sx={{ border: '1px solid  #770000', color: '#ac0000' }}>
                     <ClearIcon/>
                     Отклонить
                  </Button>
               </Flex>
            </Flex>
         )}
      </DefaultBox>
   );
};

export default OfferCard;