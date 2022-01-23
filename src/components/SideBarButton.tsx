import React from 'react';
import {Image, ImageSourcePropType, TouchableOpacity} from 'react-native';
import tailwind from 'tailwind-rn';

export interface I_SideBarButtonProps {
  iconSource: ImageSourcePropType;
}

export default function SideBarButton(props: I_SideBarButtonProps) {
  const {iconSource} = props;
  return (
    <TouchableOpacity>
      <Image source={iconSource} style={tailwind('w-24 h-24 mx-2')} />
    </TouchableOpacity>
  );
}
