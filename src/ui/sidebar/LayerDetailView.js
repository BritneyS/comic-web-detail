import React from 'react';
import { 
    Box,
    Button,
    Image,
    Layer,
    Text
  } from 'grommet';
  import { FormClose } from 'grommet-icons';

function LayerDetailView(props) {
    const sidebarImageStyle = {
        width:'100%',
        height: 150
    };

    return (
        <Layer>
            <Box
                background='light-2'
                tag='header'
                justify='end'
                align='center'
                direction='row'
            >
            <Button
                icon={<FormClose />}
                onClick={props.closeSidebar}
            />
            </Box>
            <Box
                fill
                background='light-2'
                align='center'
                justify='center'
            >
                <Image
                    fit='contain'
                    alignSelf='center'
                    src={props.heroDetails[0].image.url}
                    style={sidebarImageStyle}
                />
                <Text>{props.heroDetails[0].name}</Text>
                <Text>{props.heroDetails[0].publisher}</Text>
            </Box>
        </Layer>
    );
}

export default LayerDetailView;