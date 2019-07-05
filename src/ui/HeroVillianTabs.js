import React from 'react';
import {
  Box,
  Tab,
  Tabs,
  Text,
// eslint-disable-next-line
  Image 
} from 'grommet';

const heroes = [
    {
        name: 'batman'
    },
    {
        name: 'superman'
    },
    {
        name: 'deadpool'
    }
];

const villains = [
    {
        name: 'joker'
    },
    {
        name: 'mr. freeze'
    },
    {
        name: 'the penguin'
    }
];

const HeroVillianTabs = (props) => (
    <Tabs height='medium' flex='grow' alignSelf='left'>
        <Tab title='Heroes'>
            {heroes.map (hero => {
                return (
                    <Box
                    margin='small'
                    pad='small'
                >
                    <Text>{hero.name}</Text>
                </Box>
                );
            })}
        </Tab>
        <Tab title='Villains'>
            {villains.map (villain => {
                return (
                    <Box
                    margin='small'
                    pad='small'
                >
                    <Text>{villain.name}</Text>
                </Box>
                );
            })}
        </Tab>
    </Tabs>
);

export default HeroVillianTabs;