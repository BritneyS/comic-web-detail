import React from 'react';
import {
  Box,
  Tab,
  Tabs,
  Text,
  Image 
} from 'grommet';

const heroes = [
    {
        name: 'batman',
        image: {
            url: '/images/batman.jpg'
        }
    },
    {
        name: 'superman',
        image: {
            url: '/images/superman.jpg'
        }
    },
    {
        name: 'deadpool',
        image: {
            url: '/images/deadpool.jpg'
        }
    },
    {
        name: 'wonder woman',
        image: {
            url: '/images/wonderwoman.jpg'
        }
    }
];

const villains = [
    {
        name: 'joker',
        image: {
            url: '/images/joker.jpg'
        }
    },
    {
        name: 'mr. freeze',
        image: {
            url: '/images/mrfreeze.png'
        }
    },
    {
        name: 'the penguin',
        image: {
            url: '/images/thepenguin.jpeg'
        }
    },
    {
        name: 'thanos',
        image: {
            url: '/images/thanos.png'
        }
    }
];

const HeroVillianTabs = (props) => (
    <Tabs height='medium' flex='grow' alignSelf='left'>
        <Tab title='Heroes'>
            <Box direction='row'>
            {heroes.map (hero => {
                return (
                    <Box
                    margin='small'
                    pad='small'
                    style={{width:'100%', height: 150}}
                >
                    <Image
                        fit='contain'
                        alignSelf='center'
                        src={hero.image.url}
                    />
                    <Text alignSelf='center'>{hero.name}</Text>
                </Box>
                );
            })}
            </Box>
        </Tab>
        <Tab title='Villains'>
            <Box direction='row'>
            {villains.map (villain => {
                return (
                    <Box
                    margin='small'
                    pad='small'
                    style={{width:'100%', height: 150}}
                >
                    <Image
                        fit='contain'
                        alignSelf='center'
                        src={villain.image.url}
                    />
                    <Text alignSelf='center'>{villain.name}</Text>
                </Box>
                );
            })}
            </Box>
        </Tab>
    </Tabs>
);

export default HeroVillianTabs;