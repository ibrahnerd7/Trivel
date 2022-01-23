import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  ImageSourcePropType,
} from 'react-native';
import tailwind from 'tailwind-rn';

interface I_SectionHeaderProps {
  title: string;
  hasIcon?: boolean;
  iconSource?: ImageSourcePropType;
}

export default function SectionHeader(props: I_SectionHeaderProps) {
  const {title, hasIcon = false, iconSource} = props;

  return (
    <View style={tailwind('flex-row pt-2')}>
      <TouchableOpacity style={tailwind('flex-row')}>
        {/* @ts-ignore */}
        {hasIcon && <Image source={iconSource} style={tailwind('w-12 h-12')} />}
        <Text style={tailwind('text-3xl font-semibold pt-2 pl-2')}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
