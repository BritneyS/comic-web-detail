import React, { useState } from 'react';
import { 
  Box, 
  Button, 
  Collapsible,
  Grommet, 
  Heading, 
  Layer,
  ResponsiveContext 
} from 'grommet';
import { FormClose } from 'grommet-icons';
import theme from '../src/ui/theme';
import AppBar from '../src/ui/AppBar';
import HeroVillainTabs from '../src/ui/HeroVillianTabs';

function App() {
  const [showSideBar, setShowSidebar] = useState(false);

  return (
    <Grommet theme={theme} full>
      <ResponsiveContext.Consumer>
        {size => (
          <Box fill>
            <AppBar>
              <Heading level='3' margin='none'>HeroDex</Heading>
            </AppBar>
            <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
              <Box flex align='center' justify='center'>
                <HeroVillainTabs
                  showSideBar={() => setShowSidebar(!showSideBar)}
                />
              </Box>
              {(!showSideBar || size !== 'small') ? (
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
              ) : (
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
                      onClick={() => setShowSidebar(false)}
                    />
                  </Box>
                  <Box
                    fill
                    background='light-2'
                    align='center'
                    justify='center'
                  >
                    sidebar
                  </Box>
                </Layer>
              )}
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;
