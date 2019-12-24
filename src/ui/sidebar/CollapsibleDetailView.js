import React from 'react';
import { 
    Box,
    Collapsible,
    Image,
    Text
  } from 'grommet';



function CollapsibleDetailView(props) {
    const sidebarImageStyle = {
        width:'100%',
        height: 150
    };

    return (
        <Collapsible direction="horizontal" open={props.showSideBar}>
            <Box
                flex
                width='medium'
                background='light-2'
                elevation='small'
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
        </Collapsible>
    );
}

export default CollapsibleDetailView;