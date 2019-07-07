import React from 'react';
import { 
    Box,
    Collapsible,
  } from 'grommet';

function CollapsibleDetailView(props) {
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
            </Box>
        </Collapsible>
    );
}

export default CollapsibleDetailView;