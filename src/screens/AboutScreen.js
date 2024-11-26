import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import MainLayout from '../../layouts/MainLayout';

const AboutScreen = () => {
  return (
    <MainLayout>
      <SafeAreaView>
        <Text style={styles.text}>App Name: My Incredible ToDo List App</Text>
        <Text style={styles.text}>Developer: Marian Estrada</Text>
        <Text style={styles.text}>Date: {new Date().toLocaleDateString()}</Text>
      </SafeAreaView>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    marginVertical: 10,
  },
});

export default AboutScreen;