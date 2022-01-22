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
    <View style={tailwind('px-2 mt-4')}>
      <React.Fragment>
        <FlatList
          data={titles}
          ListHeaderComponent={<SectionHeader title="Preset sequences" />}
          renderItem={({item}) => (
            <SequenceButton title={item} variant="preset" />
          )}
        />
      </React.Fragment>
    </View>
  );
}
