import React, { useState } from 'react';
import { View } from 'react-native';
import ScreenHome from './screen/home';
import Screen2c from './screen/screen2c'
import ScreenTiki_Ok from './screen/ScreenTiki_Ok';

const App = () => {
  const [manHinh, setManHinh] = useState('tiki');

  const navigateTo = (screen) => {
    setManHinh(screen);
  }

  return (
    <View style={{ flex: 1 }}>
      {manHinh === 'home' && <ScreenHome natigation={navigateTo} />}
      {manHinh === '2c' && <Screen2c natigation={navigateTo} />}
      {manHinh === 'tiki' && <ScreenTiki_Ok natigation={navigateTo} />}
    </View>
  );
};

export default App;