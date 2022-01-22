import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import tailwind from 'tailwind-rn';
import {
  CustomSequences,
  Resistance,
  SequencesFooter,
  SideBar,
  Assistance,
  StartStop,
  PresetSequences,
  Instructions,
} from './components';

export default function Home() {
  return (
    <SafeAreaView>
      <View style={tailwind('flex-row')}>
        <SideBar />
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
    </SafeAreaView>
  );
}
