import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import tailwind from 'tailwind-rn';

interface I_PresetSequence {
  title: string;
  variant: 'preset' | 'custom';
}

export default function SequenceButton(props: I_PresetSequence) {
  const {title, variant} = props;

  const backgroundColor = variant === 'preset' ? 'bg-blue-300' : 'bg-blue-200';

  return (
    <View>
      <TouchableOpacity
        style={tailwind(
          `mr-3 border-2 border-yellow-400 ${backgroundColor} rounded-xl my-2  `,
        )}>
        <Text
          style={tailwind(
            'text-center text-white  text-lg font-semibold  mt-2 rounded-lg p-6',
          )}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
