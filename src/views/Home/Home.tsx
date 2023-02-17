import {SafeAreaView} from 'react-native';
import React from 'react';
import {Text} from 'react-native';
import styles from './Home.style';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text> Hello je suis le homme </Text>
    </SafeAreaView>
  );
};

export default Home;
