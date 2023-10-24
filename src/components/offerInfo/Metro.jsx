import React from 'react';
import { Typography } from '@mui/material';

import Flex from '../styled/Flex';

const Metro = ({ value }) => {
   return (
      <Flex sx={{ alignItems: 'center', filter: 'saturate(0)' }}>
         <Flex sx={{ marginRight: 1.5, alignItems: 'center' }}>
            <svg width="20" height="20" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path
                  d="M12.5634 13.0129H12.0132L12.4504 12.2937L12.7015 13.0129H12.5634ZM10.4765 15.5407L12.0037 13.0286V13.5726V15.1307V15.6904H12.5634H18.75H19.3097V15.1307V13.5726V13.0129H18.75H17.9269L13.9717 3.01133L13.5431 1.92757L12.9652 2.93959L9.99849 8.13432L7.03494 2.9398L6.45732 1.92734L6.02834 3.01118L2.06969 13.0129H1.25H0.69028V13.5726V15.1307V15.6904H1.25H7.43658H7.9963V15.1307V13.5726V13.0309L9.51979 15.5404L9.99792 16.328L10.4765 15.5407ZM7.43658 13.0129H7.29848L7.5493 12.2946L7.98536 13.0129H7.43658Z"
                  fill="#009A49" stroke="white" stroke-width="1.4"></path>
            </svg>
         </Flex>
         <Typography variant="body1" component="span">
            {value}
         </Typography>
      </Flex>
   );
};

export default Metro;