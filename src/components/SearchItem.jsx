import React from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const SearchItem = ({ typeValue, properties }) => {
   const [value, setValue] = React.useState('');

   const handleChange = (event) => {
      setValue(event.target.value);
   };

   console.log(value);
   return (
      <FormControl size="small" sx={{ width: '100%' }}>
   {/*      <InputLabel>{typeValue}</InputLabel>*/}
         <Select
            value={value}
           /* label={typeValue}*/
            onChange={handleChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
         >
            <MenuItem value="" disabled>
               <em>{typeValue}</em>
            </MenuItem>
            {properties.map((property) =>
               <MenuItem value={Object.values(property)[0]}>{property.value}</MenuItem>,
            )}
         </Select>
      </FormControl>
   );
};

export default SearchItem;