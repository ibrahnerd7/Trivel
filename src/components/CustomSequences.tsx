import React from 'react';
import {FlatList, View} from 'react-native';
import tailwind from 'tailwind-rn';
import SectionHeader from './SectionHeader';
import SequenceButton from './SequenceButton';

export default function CustomSequences() {
  const titles = [
    'Custom 1',
    'Custom 2',
    'Custom sequence 3',
    'Custom sequence 4',
    'Custom 5',
  ];

  return (
    <View style={tailwind('px-2 mt-4')}>
      <React.Fragment>
        <FlatList
          data={titles}
          ListHeaderComponent={<SectionHeader title="Custom sequences" />}
          renderItem={({item}) => (
            <SequenceButton title={item} variant="custom" />
          )}
        />
      </React.Fragment>
    </View>
  );
}
