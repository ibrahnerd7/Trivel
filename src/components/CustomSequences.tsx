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
    <View style={[tailwind('mt-4'), {marginLeft: -200}]}>
      <React.Fragment>
        <FlatList
          data={titles}
          ListHeaderComponent={
            <View style={tailwind('w-3/4')}>
              <SectionHeader title="Custom sequences" />
            </View>
          }
          renderItem={({item}) => (
            <View style={tailwind('w-3/4')}>
              <SequenceButton title={item} variant="custom" />
            </View>
          )}
        />
      </React.Fragment>
    </View>
  );
}
