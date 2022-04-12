/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import GameContent from './src/modules/GameContent';

import StartComponent from './src/modules/StartComponent';

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  return isPlaying ? (
    <GameContent />
  ) : (
    <StartComponent setIsPlaying={setIsPlaying} />
  );
}

const styles = StyleSheet.create({});
