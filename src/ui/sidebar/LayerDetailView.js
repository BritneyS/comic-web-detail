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
                    src={props.character.image.url}
                    style={sidebarImageStyle}
                />
                <Text>{props.character.publisher}</Text>
                <Text>{props.character.name}</Text>
            </Box>
        </Layer>
    );
}

export default LayerDetailView;