/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import Login from './src/modules/Login';
import NavTab from './src/modules/NavTab';
import {db} from './src/services/app';

export default function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    const user = getData();
    setUser(user);
  }, []);
  const getData = () => {
    let info = {};
    db.transaction(async tx => {
      await tx.executeSql('select * from users', [], (tx, result) => {
        if (result.rows.length > 0) {
          info = result.rows.item(0);
        }
      });
    });
    return info;
  };

  return <NavTab />;
}

const styles = StyleSheet.create({});
