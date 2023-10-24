import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, Container } from '@mui/material';

import Wrapper from '../../components/styled/Wrapper';
import FlexBetween from '../../components/styled/FlexBetween';
import OfferItem from '../../components/offerCard/OfferCard';
import UserInfo from '../../components/user/UserInfo';
import Flex from '../../components/styled/Flex';

function TabPanel(props) {
   const { children, value, index, ...other } = props;

   return (
      <div
         role="tabpanel"
         hidden={value !== index}
         id={`simple-tabpanel-${index}`}
         aria-labelledby={`simple-tab-${index}`}
         {...other}
      >
         {value === index && (
            <Box sx={{ p: 3 }}>
               <Typography>{children}</Typography>
            </Box>
         )}
      </div>
   );
}

const isEmptyOffers = true;
const isEmptyFav = false;

TabPanel.propTypes = {
   children: PropTypes.node,
   index: PropTypes.number.isRequired,
   value: PropTypes.number.isRequired,
};

function a11yProps(index) {
   return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
   };
}

export default function BasicTabs() {
   const [value, setValue] = React.useState(0);

   const handleChange = (event, newValue) => {
      setValue(newValue);
   };

   return (
      <Wrapper>
         <Container>
            <Box sx={{ width: '100%' }}>
               <FlexBetween sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                     <Tab label="Мои объявления" {...a11yProps(0)} />
                     <Tab label="Избранное" {...a11yProps(1)} />
                     <Tab label="Информация о пользователе" {...a11yProps(2)} />
                  </Tabs>
                  <Flex sx={{ width: '340px' }}>
                     <Box mr={8}>
                        <UserInfo/>
                     </Box>
                     <Button variant="outlined" sx={{ marginLeft: '-12px' }}>
                        Выйти из аккаунта
                     </Button>
                  </Flex>
               </FlexBetween>
               <Box mt={4}>
                  <TabPanel value={value} index={0}>
                     {isEmptyOffers ? (
                        <OfferItem inUserDelete={true}/>
                     ) : (
                        <Typography variant="h6">
                           Ваш список объявлений пуст
                        </Typography>
                     )}
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                     {isEmptyFav ? (
                        <OfferItem/>
                     ) : (
                        <Typography variant="h6">
                           Ваш список избранного пуст
                        </Typography>
                     )}
                  </TabPanel>
                  <TabPanel value={value} index={2}>
                     Информация о пользователе
                  </TabPanel>
               </Box>
            </Box>
         </Container>
      </Wrapper>
   );
}