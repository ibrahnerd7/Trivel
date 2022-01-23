import React from 'react';
import {FlatList, View} from 'react-native';
import tailwind from 'tailwind-rn';
import ModeItem from './ModeItem';
import SectionHeader from './SectionHeader';

export default function Assistance() {
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

  const data: Array<{
    title: string;
    options: Array<{id: string; label: string}>;
  }> = [
    {
      title: 'Pedaling Direction',
      options: pedalDirectionoptions,
    },
    {
      title: 'Max Speed(rpm)',
      options: speedAndVariationOptions,
    },
    {
      title: 'Min Speed(rpm)',
      options: speedAndVariationOptions,
    },
    {
      title: 'Variation forms',
      options: variationForms,
    },
    {
      title: 'Variation period',
      options: speedAndVariationOptions,
    },
  ];

  return (
    <View style={tailwind('mr-4 ml-4')}>
      <SectionHeader
        title="Assistance"
        hasIcon
        iconSource={require('../images/power-green-button.png')}
      />
      <FlatList
        style={tailwind(
          'border-4 bg-blue-50 border-blue-400  rounded-3xl mt-3 py-3 px-2',
        )}
        data={data}
        renderItem={({item}) => (
          <ModeItem title={item.title} options={item.options} />
        )}
      />
    </View>
  );
}
