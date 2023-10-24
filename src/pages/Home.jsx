import React from 'react';

import Search from '../components/search/Search';
import MoreOffers from '../components/MoreOffers';

const Home = () => {
   return (
      <React.Fragment>
         <Search/>
         <MoreOffers/>
      </React.Fragment>
   );
};

export default Home;