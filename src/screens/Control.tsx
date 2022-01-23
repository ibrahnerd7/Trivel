import React from 'react';
import {ScrollView, View} from 'react-native';
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
      <ScrollView>
        <ScrollView horizontal contentContainerStyle={tailwind('flex-col')}>
          <View style={tailwind('flex-row')}>
            <Assistance />
            <Resistance />
            <StartStop />
            <PresetSequences />
            <CustomSequences />
          </View>
          <View style={tailwind('flex-row')}>
            <Instructions />
            <SequencesFooter />
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
}
