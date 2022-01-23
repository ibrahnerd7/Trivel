import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import tailwind from 'tailwind-rn';

export default function SideBar() {
  return (
    <View style={tailwind('flex-col bg-gray-200 w-1/4 justify-between')}>
      <Image source={require('../images/logo.png')} />
      <View style={tailwind('flex-row mt-4')}>
        <TouchableOpacity>
          <Image
            source={require('../images/pause-button.png')}
            style={tailwind('w-24 h-24 mx-2')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../images/play-button.png')}
            style={tailwind('w-24 h-24 mx-2')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../images/stop-button.png')}
            style={tailwind('w-24 h-24 mx-2')}
          />
        </TouchableOpacity>
      </View>
      <View style={tailwind('pt-8')}>
        <View style={tailwind('pl-4')}>
          <TouchableOpacity>
            <Text
              style={tailwind(
                'bg-blue-500 py-12 text-center text-lg text-white font-semibold my-1',
              )}>
              Control
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={tailwind(
                'bg-blue-300 py-12 text-center text-lg text-white font-semibold my-1',
              )}>
              Dashboard
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={tailwind(
                'bg-blue-300 py-12 text-center text-lg text-white font-semibold my-1',
              )}>
              Settings
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
