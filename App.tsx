import React from 'react';
import {Text} from 'react-native';
import tailwind from 'tailwind-rn';

function TestTailwind() {
  return <Text style={tailwind('bg-green-500')}>Configure Tailwind CSS</Text>;
}

const App = () => {
  return <TestTailwind />;
};

export default App;
