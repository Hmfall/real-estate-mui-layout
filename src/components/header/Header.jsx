import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Container, Menu, MenuItem, Typography } from '@mui/material';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import IconButton from '@mui/material/IconButton';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import MenuIcon from '@mui/icons-material/Menu';

import FlexBetween from '../styled/FlexBetween';
import { styles } from './styles';

const pages = ['Продажа', 'Аренда', 'Коммерческая'];

const Header = () => {
   const navigate = useNavigate();
   const [elNav, setElNav] = useState(null);

   const handlePage = (page) => {
      navigate(page);
      console.log(page);
   };

   const handleCloseMenu = () => {
      setElNav(null);
   };

   return (
      <React.Fragment>
         <Box component="header" sx={styles.headerContainer}>
            <Box sx={styles.headerTop}>
               <Container>
                  <FlexBetween sx={{ ...styles.headerTopInner, height: '5rem' }}>
                     <Box sx={styles.logo} onClick={() => navigate('/')}>
                        <HomeWorkIcon sx={styles.logoIcon}/>
                        <Typography variant="h2" sx={styles.logoText}>
                           REALTY
                        </Typography>
                     </Box>
                     <FlexBetween sx={{ alignItems: 'center' }}>
                        <Box sx={styles.rightItem}>
                           <Link to="/favorite">
                              <Box sx={styles.favoriteInner}>
                                 <BookmarkIcon sx={styles.favoriteIcon}/>
                                 <Typography variant="h6" sx={styles.favoriteText}>
                                    Избранное
                                 </Typography>
                              </Box>
                           </Link>
                        </Box>
                     </FlexBetween>
                  </FlexBetween>
               </Container>
            </Box>
            <Box sx={{ ...styles.headerBottom, height: '5rem' }}>
               <Container>
                  <FlexBetween sx={styles.headerBottomInner}>
                     <Box sx={styles.menuIcon}>
                        <IconButton
                           size="large"
                           aria-label="account of current user"
                           aria-controls="menu-appbar"
                           aria-haspopup="true"
                           onClick={(event) => setElNav(event.currentTarget)}
                           color="inherit"
                           sx={styles.menuIconInner}
                        >
                           <MenuIcon/>
                        </IconButton>
                     </Box>
                     <Menu
                        anchorEl={elNav}
                        open={Boolean(elNav)}
                        onClose={handleCloseMenu}
                        sx={styles.menuMobile}
                     >
                        {pages.map((page) => (
                           <MenuItem
                              key={page}
                              onClick={() => {
                                 handlePage(page);
                                 handleCloseMenu();
                              }}
                           >
                              <Typography component="a" variant="body1" textAlign="center">
                                 {page}
                              </Typography>
                           </MenuItem>
                        ))}
                     </Menu>
                     <Box>
                        <Box component="ul" sx={styles.menuList}>
                           {pages.map((page) =>
                              <Box component="li" sx={styles.menuItem}>
                                 <Typography
                                    component="a"
                                    variant="h6"
                                    onClick={() => handlePage(page)}
                                    key={page}
                                    sx={styles.menuText}
                                 >
                                    {page}
                                 </Typography>
                              </Box>,
                           )}
                        </Box>
                     </Box>
                     <FlexBetween>
                        <Button variant="contained" onClick={() => navigate('/add-offer')}>
                           <PlaylistAddIcon sx={styles.addOfferIcon}/>
                           Разместить объявление
                        </Button>
                     </FlexBetween>
                  </FlexBetween>
               </Container>
            </Box>
         </Box>
      </React.Fragment>
   );
};

export default Header;