import React from 'react';
import {FlatList, View} from 'react-native';
import tailwind from 'tailwind-rn';
import {
  CustomSequences,
  Resistance,
  SequencesFooter,
  Assistance,
  StartStop,
  PresetSequences,
  Instructions,
} from '../components';

export default function Control() {
  return (
    <View style={tailwind('flex-row')}>
      <FlatList
        data={[]}
        renderItem={({}) => <></>}
        ListHeaderComponent={
          <View style={tailwind('flex-row')}>
            <Assistance />
            <Resistance />
            <StartStop />
            <PresetSequences />
            <CustomSequences />
          </View>
        }
        ListFooterComponent={
          <View style={tailwind('flex-row')}>
            <Instructions />
            <SequencesFooter />
          </View>
        }
      />
    </View>
  );
}
