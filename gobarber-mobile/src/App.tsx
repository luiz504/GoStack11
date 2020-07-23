import React from 'react';
import { View, Text, StatusBar } from 'react-native';

// import { Container } from './styles';

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#312e38" />
      <View style={{ flex: 1, backgroundColor: '#312e38' }}>
        <Text> Hello Word</Text>
      </View>
    </>
  );
};

export default App;
