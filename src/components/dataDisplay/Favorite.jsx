import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';

import { palette } from '../../styles/theme/properties';
import { useMediaQuery } from 'react-responsive';
import { theme } from '../../styles/theme/theme';

const Favorite = () => {
   const [favorite, setFavorite] = useState(false);
   const isMobile = useMediaQuery({ maxWidth: theme.breakpoints.values.lg });

   return (
      <Button
         variant="outlined"
         onClick={() => setFavorite(!favorite)}
         sx={{ minWidth: '56px' }}
      >
         {isMobile ? (
            <Box sx={{ display: { xs: 'flex', lg: 'none' } }}>
               {favorite ? <BookmarkAddedIcon/> : <BookmarkBorderIcon/>}
            </Box>
         ) : (
            <Typography
               sx={{
                  display: { xs: 'none', lg: 'block' },
                  color: palette.primary[200],
               }}
            >
               {favorite
                  ? (
                     <React.Fragment>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                           <BookmarkAddedIcon sx={{ marginRight: 0.8, height: '22px'}}/>
                           Сохранено
                        </Box>
                     </React.Fragment>
                  ) : 'В избранное'
               }
            </Typography>
         )}
      </Button>
   );
};

export default Favorite;