import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import tailwind from 'tailwind-rn';

export interface I_NavigationDestination {
  index: number;
  label: string;
  component: () => JSX.Element;
}

interface I_SideBarProps {
  destinations: Array<I_NavigationDestination>;
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
}

export default function SideBar(props: I_SideBarProps) {
  const {destinations, selectedIndex, setSelectedIndex} = props;

  return (
    <View style={tailwind('flex-col bg-gray-200 w-1/4 h-full justify-around')}>
      <Image source={require('../images/logo.png')} />
      <View style={tailwind('flex-row justify-between')}>
        <TouchableOpacity>
          <Image
            source={require('../images/pause-button.png')}
            style={tailwind('w-24 h-24 mx-2')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../images/play-button.png')}
            style={tailwind('w-24 h-24 mx-2')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../images/stop-button.png')}
            style={tailwind('w-24 h-24 mx-2')}
          />
        </TouchableOpacity>
      </View>
      <View style={tailwind('pl-4 flex-col mb-12')}>
        {destinations.map((destination, index) => {
          const isCurrentScreen = destination.index === selectedIndex;

          const backgroundColor = isCurrentScreen
            ? 'bg-blue-500'
            : 'bg-blue-200';

          return (
            <TouchableOpacity
              key={index}
              onPress={() => setSelectedIndex(index)}>
              <Text
                style={tailwind(
                  `${backgroundColor} py-12 text-center text-lg text-white font-semibold my-1`,
                )}>
                {destination.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
