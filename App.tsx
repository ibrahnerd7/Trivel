import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {SideBar} from './src/components';
import tailwind from 'tailwind-rn';
import {I_NavigationDestination} from './src/components/SideBar';
import {Control, Dashboard, Settings} from './src/screens';

const App = () => {
  const destinations: Array<I_NavigationDestination> = [
    {
      index: 0,
      label: 'Control',
      component: Control,
    },
    {
      index: 1,
      label: 'Dashboard',
      component: Dashboard,
    },
    {
      index: 2,
      label: 'Settings',
      component: Settings,
    },
  ];

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const selectedDestination = destinations.find(
    destination => destination.index === selectedIndex,
  );

  return (
    <SafeAreaView>
      <View style={tailwind('flex-row')}>
        <SideBar
          destinations={destinations}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <ScrollView horizontal>{selectedDestination?.component()}</ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default App;
