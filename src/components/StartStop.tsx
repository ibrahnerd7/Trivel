import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import tailwind from 'tailwind-rn';
import ModeItem from './ModeItem';
import SectionHeader from './SectionHeader';

function StartStopHero() {
  return (
    <View style={tailwind('flex-row')}>
      <View style={tailwind('flex-col')}>
        <Text style={tailwind('font-semibold')}>UserID</Text>
        <Text
          style={tailwind(
            'text-center mr-3 text-white border-2 border-blue-400 pt-1 px-6 text-lg font-bold text-center mt-2 rounded-lg bg-yellow-300',
          )}>
          ABO1
        </Text>
      </View>
      <View style={tailwind('flex-col')}>
        <Text style={tailwind('font-semibold')}>Trial Num</Text>
        <Text
          style={tailwind(
            'text-center mr-3 text-white border-2 border-blue-400 pt-1 px-6 text-lg font-bold text-center mt-2 rounded-lg bg-yellow-300',
          )}>
          12
        </Text>
      </View>
    </View>
  );
}

function StartStopFooter() {
  return (
    <TouchableOpacity style={tailwind('flex-row mt-3')}>
      <View style={tailwind('bg-blue-400 px-2 py-1 rounded')}>
        <Image
          source={require('../images/start-sequence.png')}
          style={tailwind('w-8 h-8')}
        />
      </View>
      <Text style={tailwind('font-semibold text-xl p-1')}>Start sequence</Text>
    </TouchableOpacity>
  );
}

function StartStopBody() {
  const exerciseTimeOptions: Array<{id: string; label: string}> = Array(10)
    .fill(' ')
    .map((_, index) => {
      const value = (index * 5).toString();
      return {
        id: value,
        label: value,
      };
    });

  const roadFeelOptions: Array<{id: string; label: string}> = [
    {
      id: '1',
      label: 'Cobblestone',
    },
    {
      id: '2',
      label: 'Moderate',
    },
    {
      id: '1',
      label: 'Pyramid',
    },
  ];

  const recordSequenceOptions: Array<{id: string; label: string}> = [
    {
      id: '1',
      label: 'Yes',
    },
    {
      id: '2',
      label: 'No',
    },
  ];

  const savePresetSequenceOptions: Array<{id: string; label: string}> = [
    {
      id: '1',
      label: '1',
    },
    {
      id: '2',
      label: '2',
    },
  ];

  const saveCustomSequenceOptions: Array<{id: string; label: string}> = [
    {
      id: '1',
      label: '1',
    },
    {
      id: '2',
      label: '2',
    },
  ];

  return (
    <View
      style={tailwind(
        'border-4 bg-blue-50 border-blue-400  rounded-3xl mt-3 py-3 px-2',
      )}>
      <StartStopHero />
      <ModeItem title="Exercise time (min)" options={exerciseTimeOptions} />
      <ModeItem title="Road feel" options={roadFeelOptions} />
      <ModeItem title="Record sequence" options={recordSequenceOptions} />
      <ModeItem title="Save preset seq" options={savePresetSequenceOptions} />
      <ModeItem title="Save custom seq" options={saveCustomSequenceOptions} />
      <StartStopFooter />
    </View>
  );
}

export default function StartStop() {
  return (
    <View style={tailwind('px-2 mt-4 mt-4 mr-16')}>
      <SectionHeader title="Start/Stop" />
      <StartStopBody />
    </View>
  );
}
