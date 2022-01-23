import React from 'react';
import {FlatList, View} from 'react-native';
import tailwind from 'tailwind-rn';
import SectionHeader from './SectionHeader';
import SequenceButton from './SequenceButton';

export default function PresetSequences() {
  const titles = [
    'Training sequence 1 Warm-up',
    'Training sequence 1 Left resistance cycling range',
    'Training sequence 3',
    'Training sequence 4',
    'Max power test',
  ];

  return (
    <View style={tailwind('px-2 mt-4 ')}>
      <React.Fragment>
        <FlatList
          data={titles}
          ListHeaderComponent={
            <View style={tailwind('w-1/2')}>
              <SectionHeader title="Preset sequences" />
            </View>
          }
          renderItem={({item}) => (
            <View style={tailwind('w-1/2')}>
              <SequenceButton title={item} variant="preset" />
            </View>
          )}
        />
      </React.Fragment>
    </View>
  );
}
