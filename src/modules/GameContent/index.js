import React from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';

export default function GameContent() {
  return (
    <View>
      <TextInput style={styles.input} />
      <Button title="Thêm mới" style={styles.button} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderWidth: 1,
    margin: 10,
  },
  button: {
    width: 120,
  },
});
