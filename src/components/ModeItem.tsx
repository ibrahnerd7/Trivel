import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import tailwind from 'tailwind-rn';

interface I_ModelItemProps {
  title: string;
  options: Array<{id: string; label: string}>;
}

export default function ModeItem(props: I_ModelItemProps) {
  const {title, options} = props;
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const selectedOption = options[selectedIndex];

  function handleOnPress() {
    let nextIndex = selectedIndex + 1;

    //if we are at the last item, return to first item
    if (nextIndex === options.length) {
      nextIndex = 0;
    }

    setSelectedIndex(nextIndex);
  }

  return (
    <View style={tailwind('mt-3')}>
      <Text style={tailwind('text-lg font-semibold')}>{title}</Text>
      <View style={tailwind('flex-row justify-between')}>
        <Text
          style={tailwind(
            'flex-1 text-center mr-3 text-white border-2 border-blue-400 pt-1 text-lg font-semibold text-center mt-2 rounded-lg bg-blue-300',
          )}>
          {selectedOption.label}
        </Text>
        <TouchableOpacity
          onPress={handleOnPress}
          style={tailwind('border-2 rounded-md')}>
          <Image
            source={require('../images/up-arrow.png')}
            style={tailwind('w-6 h-6')}
          />
          <Image
            source={require('../images/down-arrow.png')}
            style={tailwind('w-6 h-6')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
