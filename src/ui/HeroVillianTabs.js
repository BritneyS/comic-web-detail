import React from 'react';
import {
  Box,
  Tab,
  Tabs,
  Text,
  Image,
  Button
} from 'grommet';

function HeroVillianTabs(props) {
    const imageStyle = {
        width:'100%',
        height: 150
    };

    return (
        <Tabs height='medium' flex='grow' alignSelf='start'>
            <Tab title='Heroes'>
                <Box direction='row'>
                {props.characters.heroes.map ((hero, index) => {
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
                {props.characters.villains.map ((villain, index) => {
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