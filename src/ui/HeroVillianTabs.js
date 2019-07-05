import React from 'react';
import { 
// eslint-disable-next-line
  Box,
  Tab,
  Tabs,
// eslint-disable-next-line
  Text,
// eslint-disable-next-line
  Image 
} from 'grommet';

const HeroVillianTabs = (props) => (
    <Tabs height='medium' flex='grow' alignSelf='left'>
        <Tab title='Heroes'></Tab>
        <Tab title='Villains'></Tab>
    </Tabs>
);

export default HeroVillianTabs;