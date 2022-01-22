import React from 'react';
import {FlatList, View} from 'react-native';
import tailwind from 'tailwind-rn';
import SequenceButton from './SequenceButton';

export default function SequencesFooter() {
  const titles = [
    'Training sequence 1 Warm-up',
    'Custom 1',
    'Custom 2',
    'Training sequence 4',
  ];

  return (
    <View style={tailwind('px-2 mt-4')}>
      <React.Fragment>
        <FlatList
          data={titles}
          horizontal
          showsHorizontalScrollIndicator
          renderItem={({item}) => (
            <View>
              <SequenceButton title={item} variant="preset" />
            </View>
          )}
        />
      </React.Fragment>
    </View>
  );
}
