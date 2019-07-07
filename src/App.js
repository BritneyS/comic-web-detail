import React, { useState } from 'react';
import { 
  Box,
  Grommet,
  Heading,
  ResponsiveContext
} from 'grommet';
import theme from '../src/ui/theme';
import AppBar from '../src/ui/AppBar';
import HeroVillainTabs from '../src/ui/HeroVillianTabs';
import CollapsibleDetailView from '../src/ui/sidebar/CollapsibleDetailView';
import LayerDetailView from '../src/ui/sidebar/LayerDetailView';

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
                <CollapsibleDetailView showSideBar={showSideBar} />
              ) : (
                <LayerDetailView setShowSidebar={() => setShowSidebar(false)} />
              )}
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;
