import React, { useState, useEffect } from 'react';
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
import { useSelector } from 'react-redux';

// Goal: Use redux to track/update state from main view to detail view
const characters = {
  heroes: [
    {
        name: 'batman',
        image: {
            url: '/images/batman.jpg'
        },
        publisher: 'DC Comics'
    },
    {
        name: 'superman',
        image: {
            url: '/images/superman.jpg'
        },
        publisher: 'DC Comics'
    },
    {
        name: 'deadpool',
        image: {
            url: '/images/deadpool.jpg'
        },
        publisher: 'Marvel Comics'
    },
    {
        name: 'wonder woman',
        image: {
            url: '/images/wonderwoman.jpg'
        },
        publisher: 'DC Comics'
    }
  ],
  villains: [
    {
        name: 'joker',
        image: {
            url: '/images/joker.jpg'
        },
        publisher: 'DC Comics'
    },
    {
        name: 'mr. freeze',
        image: {
            url: '/images/mrfreeze.png'
        },
        publisher: 'DC Comics'
    },
    {
        name: 'the penguin',
        image: {
            url: '/images/thepenguin.jpeg'
        },
        publisher: 'DC Comics'
    },
    {
        name: 'thanos',
        image: {
            url: '/images/thanos.png'
        },
        publisher: 'Marvel Comics'
    }
  ]
};

function App() {
  const [showSideBar, setShowSidebar] = useState(false);

  // useSelector to get state from store
  const characterState = useSelector(
    state => ({
        name: state.name,
        image: state.image,
        publisher: state.publisher
    })
  );

  useEffect(
    () => {
      console.log(`🦸🏾‍♀️Character: ${characterState.name}`);
    },
    [characterState]
  );

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
                  characters={characters}
                />
              </Box>
              {(!showSideBar || size !== 'small') ? (
                <CollapsibleDetailView
                  showSideBar={showSideBar}
                  character={characterState}
                />
              ) : (
                <LayerDetailView
                  closeSidebar={() => setShowSidebar(false)}
                  character={characterState}
                />
              )}
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;
