import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text} from 'react-native';
import {getTagList} from './src/api/reguests';

function App(): React.JSX.Element {
  useEffect(() => {
    getTagList();
  }, []);

  return (
    <SafeAreaView>
      <StatusBar />
      <Text>Selamlar </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
