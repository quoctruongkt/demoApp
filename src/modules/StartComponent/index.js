import React from 'react';
import {View, TouchableOpacity, Image, Text, StyleSheet} from 'react-native';

export default function StartComponent({setIsPlaying}) {
  const onPressPlay = () => {
    setIsPlaying(true);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onPressPlay()}>
        <Image
          source={require('../../assets/images/icon_play.png')}
          style={{width: 100, height: 100}}
        />
      </TouchableOpacity>
      <Text>Bấm để bắt đầu</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
