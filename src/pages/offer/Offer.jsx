import React, { useState } from 'react';
import { Box, Container, Stack, Typography } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import Wrapper from '../../components/styled/Wrapper';
import Flex from '../../components/styled/Flex';
import DefaultBox from '../../components/styled/DefaultBox';
import FlexBetween from '../../components/styled/FlexBetween';
import { palette } from '../../styles/theme/properties';
import { styles } from './styles';
import OfferPriceCard from '../../components/offerInfo/OfferPriceCard';
import UserInfo from '../../components/user/UserInfo';
import Metro from '../../components/offerInfo/Metro';
import Address from '../../components/offerInfo/Address';
import ShowMore from '../../components/dataDisplay/ShowMore';
import Favorite from '../../components/dataDisplay/Favorite';
import UserPhone from '../../components/user/UserPhone';
import Residential from '../../components/residential/Residential';

const backImg = [
   'https://img.dmclk.ru/s1200x800q80/vitrina/owner/c3/14/c314603048354a68987bc75a7f11fe06.webp',
   'https://img.dmclk.ru/s1200x800q80/vitrina/owner/bd/3c/bd3c9fbe2d7840aab8418c49317aeb03.webp',
   'https://img.dmclk.ru/s1200x800q80/vitrina/owner/02/5b/025b3de869c246ff81fe6c6338aff334.webp',
   'https://img.dmclk.ru/s1200x800q80/vitrina/owner/18/81/1881a70c3ad34cfab678496719ae3082.webp',
   'https://img.dmclk.ru/s1200x800q80/vitrina/owner/58/ab/58ab48a9136e43e190e68f7a5eaa9367.webp',
]

const properties = ['Тип жилья', 'Площадь кухни', 'Свободная планировка', 'Ремонт', 'Тип санузла', 'Вид из окон'];

const properties_value = ['Вторичная', '14квм', 'Нет', 'Без ремонта', 'Вторичная', 'Вторичная'];

const Offer = () => {
   const [showMore, setShowMore] = useState(false);

   return (
      <Wrapper pb={44}>
         <Container>
            <Box sx={styles.offerContainer}>
               <Stack>
                  <DefaultBox sx={styles.section}>
                     <Stack sx={styles.photo}>
                        <FlexBetween
                           sx={{
                              width: '100%',
                              top: '35%',
                              padding: '1rem',
                              position: 'absolute',
                           }}
                        >
                           <Flex sx={{ width: '25px', height: '25px', borderRadius: '50%', backgroundColor: palette.light[200] }}>
                              <ChevronRightIcon sx={{
                                 marginLeft: '3px',
                                 width: '20px',
                                 color: palette.primary[200],
                                 transform: 'rotate(180deg)',
                              }}/>
                           </Flex>
                           <Flex sx={{ width: '25px', height: '25px', borderRadius: '50%', backgroundColor: palette.light[200] }}>
                              <ChevronRightIcon sx={{
                                 marginLeft: '3px',
                                 width: '20px',
                                 color: palette.primary[200],
                                 transform: 'rotate(0)',
                              }}/>
                           </Flex>
                        </FlexBetween>
                        <Flex sx={{ ...styles.secPhoto, margin: 0, backgroundImage: `url(${backImg[0]});`, height: '400px' }}></Flex>
                        <Flex sx={{ width: '100%', '&:not(:last-child)': { opacity: 0 } }}>
                           <Flex sx={{ width: '100%', height: '100px', overflow: 'hidden' }}>
                              <Flex
                                 sx={{
                                    ...styles.secPhoto,
                                    border: `3px solid ${palette.primary[200]}`,
                                    backgroundImage: `url(${backImg[0]});`,
                                 }}>
                              </Flex>
                           </Flex>
                           <Flex sx={{ width: '100%', height: '100px', overflow: 'hidden' }}>
                              <Box sx={{ ...styles.secPhoto, backgroundImage: `url(${backImg[1]});` }}></Box>
                           </Flex>
                           <Flex sx={{ width: '100%', height: '100px', overflow: 'hidden' }}>
                              <Box sx={{ ...styles.secPhoto, backgroundImage: `url(${backImg[2]});` }}></Box>
                           </Flex>
                           <Flex sx={{ width: '100%', height: '100px', overflow: 'hidden' }}>
                              <Box sx={{ ...styles.secPhoto, backgroundImage: `url(${backImg[3]});` }}></Box>
                           </Flex>
                           <Flex sx={{ width: '100%', height: '100px', overflow: 'hidden' }}>
                              <Box sx={{ ...styles.secPhoto, margin: '0.8rem 0 0 0', backgroundImage: `url(${backImg[4]});` }}></Box>
                           </Flex>
                        </Flex>
                     </Stack>
                     <Flex sx={styles.info}>
                        <Flex sx={styles.infoText}>
                           <Typography variant="h6">
                              1-комн.
                           </Typography>
                           <Typography>
                              квартира
                           </Typography>
                        </Flex>
                        <Flex sx={styles.infoText}>
                           <Typography variant="h6">
                              55,31 м²
                           </Typography>
                           <Typography>
                              Площадь
                           </Typography>
                        </Flex>
                        <Flex sx={styles.infoText}>
                           <Typography variant="h6">
                              12/16
                           </Typography>
                           <Typography>
                              Этаж
                           </Typography>
                        </Flex>
                     </Flex>
                     <Box sx={styles.priceIsMobile}>
                        <OfferPriceCard price={'8 950 000'} priceUnit={'211 000'} isResponsive={false}/>
                     </Box>
                     <Box sx={styles.address}>
                        <Address city={'Санкт-Петербург'} street={'Фермское шоссе'} house={'20к1'}/>
                     </Box>
                     <Box sx={styles.metro}>
                        <Metro value={'Удельная'}/>
                     </Box>
                  </DefaultBox>
                  <DefaultBox sx={styles.section}>
                     <Typography variant="h3" sx={styles.sectionTitle}>
                        Описание
                     </Typography>
                     <Box sx={{ ...styles.desc, maxHeight: showMore ? '80rem' : '12.5rem' }}>
                        <Typography variant="body1">
                           Продаётся однокомнатная квартира в ЖК «Невский стиль» с видом на Удельный парк. В шаговой доступности находится ст.м.
                           Удельная. Район отличается благоприятной экологической обстановкой.
                           Квартира находится на 12 этаже кирпичного дома, светлая и теплая. Продается с мебелью и техникой, готова к проживанию. В
                           санузлах и на лоджии установлен теплый пол. Высота потолков 2,75 см.
                           Прямая продажа, один собственник с момента постройки дома.
                        </Typography>
                     </Box>
                     <Box mt={3} onClick={() => setShowMore(!showMore)}>
                        <ShowMore isClicked={showMore}/>
                     </Box>
                  </DefaultBox>
                  <DefaultBox sx={styles.section}>
                     <Typography variant="h3" sx={styles.sectionTitle}>
                        Общая информация
                     </Typography>
                     <Stack>
                        <Flex sx={styles.propItem}>
                           <Flex component="span" sx={styles.propItemValue}>
                              <Typography variant="body1" sx={{ color: palette.secondary[200] }}>
                                 Тип жилья
                              </Typography>
                           </Flex>
                           <Flex component="span">
                              <Typography variant="body1">
                                 Вторичная
                              </Typography>
                           </Flex>
                        </Flex>
                        <Flex sx={styles.propItem}>
                           <Flex component="span" sx={styles.propItemValue}>
                              <Typography variant="body1" sx={{ color: palette.secondary[200] }}>
                                 Площадь кухни
                              </Typography>
                           </Flex>
                           <Flex component="span">
                              <Typography variant="body1">
                                 18 м²
                              </Typography>
                           </Flex>
                        </Flex>
                        <Flex sx={styles.propItem}>
                           <Flex component="span" sx={styles.propItemValue}>
                              <Typography variant="body1" sx={{ color: palette.secondary[200] }}>
                                 Ремонт
                              </Typography>
                           </Flex>
                           <Flex component="span">
                              <Typography variant="body1">
                                 Евроремонт
                              </Typography>
                           </Flex>
                        </Flex>
                        <Flex sx={styles.propItem}>
                           <Flex component="span" sx={styles.propItemValue}>
                              <Typography variant="body1" sx={{ color: palette.secondary[200] }}>
                                 Тип санузла
                              </Typography>
                           </Flex>
                           <Flex component="span">
                              <Typography variant="body1">
                                 Совмещенный
                              </Typography>
                           </Flex>
                        </Flex>
                        <Flex sx={styles.propItem}>
                           <Flex component="span" sx={styles.propItemValue}>
                              <Typography variant="body1" sx={{ color: palette.secondary[200] }}>
                                 Вид из окон
                              </Typography>
                           </Flex>
                           <Flex component="span">
                              <Typography variant="body1">
                                 Двор
                              </Typography>
                           </Flex>
                        </Flex>
                        <Flex sx={{ ...styles.propItem, marginBottom: 0 }}>
                           <Flex component="span" sx={styles.propItemValue}>
                              <Typography variant="body1" sx={{ color: palette.secondary[200] }}>
                                 Свободная планировка
                              </Typography>
                           </Flex>
                           <Flex component="span">
                              <Typography variant="body1">
                                 Нет
                              </Typography>
                           </Flex>
                        </Flex>
                     </Stack>
                     <Flex>
                     </Flex>
                  </DefaultBox>
                  <DefaultBox>
                     <Typography variant="h3" sx={styles.sectionTitle}>
                        О доме
                     </Typography>
                     <Residential/>
                  </DefaultBox>
                  <DefaultBox sx={styles.userIsMobile}>
                     <Typography variant="h3">
                        Объявление разместил
                     </Typography>
                     <Box mt={3}>
                        <UserInfo/>
                     </Box>
                  </DefaultBox>
               </Stack>
               <Stack>
                  <DefaultBox p={{ xs: 0, lg: 4 }}>
                     <Stack>
                        <Box sx={styles.price}>
                           <Box>
                              <OfferPriceCard price={'8 950 000'} priceUnit={'211 000'} isResponsive={false}/>
                           </Box>
                           <Box mt={5}>
                              <UserInfo/>
                           </Box>
                        </Box>
                        <Flex sx={styles.buttons}>
                           <Flex sx={styles.phoneButton}>
                              <UserPhone value={'+7 123 456 78 90'}/>
                           </Flex>
                           <Flex sx={styles.favoriteButton}>
                              <Favorite/>
                           </Flex>
                        </Flex>
                     </Stack>
                  </DefaultBox>
               </Stack>
            </Box>
         </Container>
      </Wrapper>
   );
};

export default Offer;