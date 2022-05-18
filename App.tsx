import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Homepage from './scr/components/Homepage';

export default function App() {
  return (
    <Homepage />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e7e3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

