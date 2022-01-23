import React from 'react';
import {Text, View} from 'react-native';
import tailwind from 'tailwind-rn';
import ModeItem from './ModeItem';
import SectionHeader from './SectionHeader';

interface I_ResistanceSectionProps {
  title: string;
}

function ResistanceSection(props: I_ResistanceSectionProps) {
  const {title} = props;

  const pedalDirectionoptions: Array<{id: string; label: string}> = [
    {
      id: '1',
      label: 'Forward',
    },
    {
      id: '2',
      label: 'Backward',
    },
    {
      id: '3',
      label: 'Left',
    },
    {
      id: '4',
      label: 'Right',
    },
  ];

  const speedAndVariationOptions: Array<{id: string; label: string}> = Array(10)
    .fill(' ')
    .map((_, index) => {
      const value = (index * 10).toString();
      return {
        id: value,
        label: value,
      };
    });

  const variationForms: Array<{id: string; label: string}> = [
    {
      id: '1',
      label: 'None',
    },
    {
      id: '2',
      label: 'Sine',
    },
    {
      id: '1',
      label: 'Pyramid',
    },
  ];

  const cyclingRangeOptions: Array<{id: string; label: string}> = [
    {
      id: '1',
      label: '50-100',
    },
    {
      id: '2',
      label: '101-200',
    },
    {
      id: '3',
      label: '201-300',
    },
  ];

  return (
    <View>
      <Text style={tailwind('text-2xl font-semibold pt-2 pl-2')}>{title}</Text>
      <ModeItem title="Max Resistance(N-m)" options={pedalDirectionoptions} />
      <ModeItem
        title="Min Resistance(N-m)"
        options={speedAndVariationOptions}
      />
      <ModeItem title="Variation form" options={variationForms} />
      <ModeItem title="Variation period" options={speedAndVariationOptions} />
      <ModeItem title="Cycling range" options={cyclingRangeOptions} />
      <ModeItem title="Repetitions" options={speedAndVariationOptions} />
    </View>
  );
}

function ModeBody() {
  return (
    <View
      style={tailwind(
        'flex-row border-4 bg-blue-50 border-blue-400  rounded-3xl mt-3 py-3 px-2',
      )}>
      <ResistanceSection title="Left" />
      <View style={tailwind('w-8')} />
      <ResistanceSection title="Right" />
    </View>
  );
}

export default function Resistance() {
  return (
    <View style={tailwind('px-2 mr-4')}>
      <SectionHeader
        title="Resistance"
        hasIcon
        iconSource={require('../images/power-red-button.png')}
      />
      <ModeBody />
    </View>
  );
}
