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
                sidebar
                <Image
                    fit='contain'
                    alignSelf='center'
                    src={props.heroDetails[0].image.url}
                    style={sidebarImageStyle}
                />
                <Text>{props.heroDetails[0].name}</Text>
                <Text>{props.heroDetails[0].publisher}</Text>
            </Box>
        </Collapsible>
    );
}

export default CollapsibleDetailView;