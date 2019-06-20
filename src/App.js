import React, { useState } from 'react';
import { Box, Button, Collapsible, Heading, Grommet } from 'grommet';
import { Notification } from 'grommet-icons';

const theme = {
  global: {
    colors: {
      brand: '#f44283'
    },
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px'
    },
  },
};

const AppBar = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: '1' }}
    {...props}
  />
);

function App() {
  const [showSideBar, setShowSidebar] = useState(false);

  return (
    <Grommet theme={theme} full>
      <Box fill>
        <AppBar>
          <Heading level='3' margin='none'>My App</Heading>
          <Button icon={<Notification />} onClick={() => setShowSidebar(!showSideBar)} />
        </AppBar>
        <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
          <Box flex align='center' justify='center'>
            app body
          </Box>
          {showSideBar && (
            <Collapsible direction="horizontal" open={showSideBar}>
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
          )}
        </Box>
      </Box>
    </Grommet>
  );
}

export default App;
