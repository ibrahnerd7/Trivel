import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import tailwind from 'tailwind-rn';
import SequenceButton from './components/SequenceButton';

function CountDownTimer() {
  return (
    <View style={tailwind('flex-col mt-4')}>
      <View style={tailwind('flex-row')}>
        <View>
          <Text style={tailwind('text-lg font-bold')}>Countdown Timer</Text>
          <Text
            style={tailwind(
              'text-white bg-blue-600 text-center text-2xl font-semibold mt-2',
            )}>
            10:23
          </Text>
        </View>
        <Image
          source={require('../src/images/countdown-timer.png')}
          style={tailwind('w-8 h-8 mt-8 ml-3')}
        />
      </View>
    </View>
  );
}

function Controls() {
  return (
    <View style={tailwind('flex-row py-4 justify-between')}>
      <TouchableOpacity style={tailwind('px-2')}>
        <Image
          source={require('../src/images/start-sequence.png')}
          style={tailwind('w-12 h-12 mt-4 ml-3')}
        />
        <Text style={tailwind('text-center font-semibold text-lg')}>
          Resume
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={tailwind('px-2')}>
        <Image
          source={require('../src/images/stop-sequence.png')}
          style={tailwind('w-12 h-12 mt-4 ml-3')}
        />
        <Text style={tailwind('text-center font-semibold text-lg')}>Stop</Text>
      </TouchableOpacity>

      <TouchableOpacity style={tailwind('px-2')}>
        <Image
          source={require('../src/images/pause.png')}
          style={tailwind('w-12 h-12 mt-4 ml-3')}
        />
        <Text style={tailwind('text-center font-semibold text-lg')}>Pause</Text>
      </TouchableOpacity>
    </View>
  );
}

function SequenceSection() {
  return (
    <View style={tailwind('flex-row pl-6')}>
      <SequenceButton title="Training sequence 1 Warnm-up" variant="preset" />
      <SequenceButton title="Custom 1" variant="custom" />
      <SequenceButton title="Custom sequence 3" variant="preset" />
      <SequenceButton title="Custom sequence 4" variant="preset" />
      <SequenceButton title="Training sequence 4" variant="custom" />
    </View>
  );
}

function SpeedGauge() {
  return (
    <View>
      <Text style={tailwind('text-lg font-bold')}>Speed indicator</Text>
      <Text
        style={tailwind(
          'w-24 text-center text-white bg-blue-600 text-2xl font-semibold mt-2',
        )}>
        45
      </Text>
      <Text>Speed gauge</Text>
    </View>
  );
}

interface I_StasSectionProps {
  type: 'Power' | 'Torque';
}

function StatsSection(props: I_StasSectionProps) {
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
          source={require('../src/images/graph.png')}
          style={tailwind('mt-8 w-1/2 h-12 ml-3 ')}
        />
        <Text style={tailwind('font-semibold mt-2 text-center')}>
          {`360 ${type} cycle`}{' '}
        </Text>
      </View>
    </View>
  );
}

export default function Dashboard() {
  return (
    <SafeAreaView>
      <View style={tailwind('flex-row')}>
        <ScrollView>
          <ScrollView
            horizontal
            contentContainerStyle={tailwind('flex-col p-2')}>
            <View style={tailwind('flex-row')}>
              <View>
                <CountDownTimer />
                <Controls />
              </View>
              <SequenceSection />
            </View>

            <View style={tailwind('flex-row pt-16')}>
              <SpeedGauge />
              <View style={tailwind('flex-row pl-16 justify-between')}>
                <StatsSection type="Power" />
                <StatsSection type="Torque" />
              </View>
            </View>
          </ScrollView>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
