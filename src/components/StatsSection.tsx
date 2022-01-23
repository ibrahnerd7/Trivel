import React from 'react';
import {View, Text, Image} from 'react-native';
import tailwind from 'tailwind-rn';

interface I_StasSectionProps {
  type: 'Power' | 'Torque';
}

export default function StatsSection(props: I_StasSectionProps) {
  const {type} = props;

  return (
    <View style={tailwind('px-8')}>
      <Text style={tailwind('text-xl font-bold text-center ')}>{type}</Text>
      <View
        style={tailwind(
          'px-16 border-4 border-blue-400 bg-blue-200 mt-2 py-6',
        )}>
        <Text style={tailwind('font-semibold')}>
          {`Average ${type} applied by user`}
        </Text>
        <Text
          style={tailwind(
            'text-white bg-blue-600 text-center text-2xl font-semibold mt-2',
          )}>
          -1.5
        </Text>
        <Text style={tailwind('font-semibold mt-4')}>{`${type} per leg`}</Text>
        <View style={tailwind('flex-row')}>
          <View style={tailwind('px-2')}>
            <Text
              style={tailwind(
                'px-2 text-white bg-blue-600 text-center text-2xl font-semibold mt-2',
              )}>
              -1.5
            </Text>
            <Text style={tailwind('font-semibold')}>Left</Text>
          </View>
          <View>
            <Text
              style={tailwind(
                'px-2  text-white bg-blue-600 text-center text-2xl font-semibold mt-2',
              )}>
              -1.5
            </Text>
            <Text style={tailwind('font-semibold')}>Right</Text>
          </View>
        </View>
        <Image
          source={require('../images/graph.png')}
          style={tailwind('mt-8 w-1/2 h-12 ml-3 ')}
        />
        <Text style={tailwind('font-semibold mt-2 text-center')}>
          {`360 ${type} cycle`}{' '}
        </Text>
      </View>
    </View>
  );
}
