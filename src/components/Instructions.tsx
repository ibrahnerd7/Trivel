import React from 'react';
import {FlatList, Text} from 'react-native';
import tailwind from 'tailwind-rn';

export default function Instructions() {
  const instructions = [
    'Step 1: Choose resistance or assistance mode',
    'Step 2: Select parameters within mode selected',
    'Step 3: Select last two parameters Time and Roadfeel in Start/Stop',
    'Step 4: Press start',
    'Stop-Start: Automatically increment trial number by 1',
    'Stop-Resume: Trial number does not change',
  ];

  return (
    <FlatList
      data={instructions}
      style={tailwind('px-2 my-3')}
      ListHeaderComponent={
        <Text style={tailwind('py-6 font-bold text-xl w-1/2 text-center')}>
          Instructions
        </Text>
      }
      renderItem={({item}) => (
        <Text style={tailwind('text-lg py-1 font-semibold')}>{item}</Text>
      )}
    />
  );
}
