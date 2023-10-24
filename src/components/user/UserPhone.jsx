import React, { useState } from 'react';
import { Button } from '@mui/material';

const UserPhone = ({ value }) => {
   const [visible, setVisible] = useState(false);

   return (
      <Button variant="contained" onClick={() => setVisible(!visible)}>
         {visible ? value : '  Показать телефон'}
      </Button>
   );
};

export default UserPhone;