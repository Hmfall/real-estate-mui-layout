import React from 'react';
import { Button, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { styles } from '../header/styles';
import Flex from '../styled/Flex';
import { palette } from '../../styles/theme/properties';

const UserLogin = ({ handleOpenLogin, isAuth = false }) => {
   return (
      <React.Fragment>
         <Button variant="outlined-in-primary" onClick={handleOpenLogin}>
            <AccountCircleIcon sx={styles.accountIcon}/>
            Войти
         </Button>
         <Flex>
            <AccountCircleIcon
               sx={{
                  marginRight: 1,
                  width: 22,
                  height: 22,
                  color: palette.light[200],
               }}
            />
            <Typography variant="h6" sx={{ color: palette.light[200] }}>
               Личный кабинет
            </Typography>
         </Flex>;
      </React.Fragment>
   );
};

export default UserLogin;