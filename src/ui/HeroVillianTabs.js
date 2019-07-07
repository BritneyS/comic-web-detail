import React from 'react';
import {
  Box,
  Tab,
  Tabs,
  Text,
  Image,
  Button
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

function HeroVillianTabs(props) {
    const imageStyle = {
        width:'100%',
        height: 150
    };

    return (
        <Tabs height='medium' flex='grow' alignSelf='start'>
            <Tab title='Heroes'>
                <Box direction='row'>
                {heroes.map ((hero, index) => {
                    return (
                        <Box
                        key={index}
                        margin='small'
                        pad='small'
                        >
                        <Button
                            icon={
                                <Image
                                    fit='contain'
                                    alignSelf='center'
                                    src={hero.image.url}
                                    style={imageStyle}
                                />
                            }
                            onClick={props.showSideBar}
                        ></Button>
                        <Text alignSelf='center'>{hero.name}</Text>
                    </Box>
                    );
                })}
                </Box>
            </Tab>
            <Tab title='Villains'>
                <Box direction='row'>
                {villains.map ((villain, index) => {
                    return (
                        <Box
                            key={index}
                            margin='small'
                            pad='small'
                        >
                        <Button
                            icon={
                                <Image
                                    fit='contain'
                                    alignSelf='center'
                                    src={villain.image.url}
                                    style={imageStyle}
                                />
                            }
                            onClick={props.showSideBar}
                        ></Button>
                        <Text alignSelf='center'>{villain.name}</Text>
                    </Box>
                    );
                })}
                </Box>
            </Tab>
        </Tabs>
    );
}
export default HeroVillianTabs;