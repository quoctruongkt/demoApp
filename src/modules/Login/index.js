import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useForm, Controller} from 'react-hook-form';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Keyboard,
  TextInput,
  TouchableWithoutFeedback,
  TouchableHighlight,
  KeyboardAvoidingView,
  ToastAndroid,
} from 'react-native';
import SQLite from 'react-native-sqlite-storage';
import {postLogin} from '../../services/login';

const db = SQLite.openDatabase(
  {name: 'demoAppDatabase.db', location: 'default'},
  () => {},
  error => console.log(error),
);

export default function Login() {
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm();

  useEffect(() => {
    createTable();
  }, []);
  const createTable = () => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS users (Id INTEGER PRIMARY KEY AUTOINCREMENT, UserId INTEGER, Token TEXT, UserInfo TEXT)',
      );
    });
  };
  const onLogin = dataForm => {
    postLogin({
      type: 3,
      phone: dataForm.phone,
      email: '',
      userNameCrm: '',
      is_web: 1,
      app_id: 68,
      password: dataForm.password,
    }).then(res => {
      if (res.data.status === 'success') {
        const userId = res.data.data.user_id;
        const token = res.data.data.access_token;
        const userInfo = JSON.stringify(res.data.data.user_info);
        ToastAndroid.show('Đăng nhập thành công!', ToastAndroid.SHORT);
        db.transaction(tx => {
          tx.executeSql(
            'INSERT INTO users (UserId, Token, UserInfo) VALUES (?, ?, ?)',
            [userId, token, userInfo],
          );
        });
      } else {
        ToastAndroid.show(res?.data?.message, ToastAndroid.SHORT);
      }
    });
  };
  return (
    <View style={styles.loginContainer}>
      <KeyboardAvoidingView behavior={'position'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <View style={styles.logo}>
              <Image source={require('../../assets/images/logo_monkey.png')} />
            </View>
            <View>
              <Text style={styles.label}>Số điện thoại</Text>
              <Controller
                control={control}
                render={({field: {onChange, onBlur, value}}) => (
                  <TextInput
                    autoComplete="tel"
                    keyboardType={'phone-pad'}
                    style={styles.input}
                    placeholder={'Nhập số điện thoại'}
                    onChangeText={onChange}
                    value={value}
                    onBlur={onBlur}
                  />
                )}
                name="phone"
                rules={{required: true}}
              />
              {errors.phone && (
                <Text style={styles.textDanger}>
                  Vui lòng nhập số điện thoại
                </Text>
              )}
              <Text style={styles.label}>Mật khẩu</Text>
              <Controller
                control={control}
                render={({field: {onChange, onBlur, value}}) => (
                  <TextInput
                    autoComplete="tel"
                    style={styles.input}
                    placeholder={'Nhập mật khẩu'}
                    onChangeText={onChange}
                    value={value}
                    onBlur={onBlur}
                  />
                )}
                name="password"
                rules={{requied: true}}
              />
              {errors.password && (
                <Text style={styles.textDanger}>Vui lòng nhập mật khẩu</Text>
              )}
              <View style={styles.buttonWrapper}>
                <TouchableHighlight
                  style={styles.buttonLogin}
                  underlayColor="#EE202E"
                  onPress={handleSubmit(onLogin)}>
                  <Text style={styles.textButton}>Đăng nhập</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      <View style={styles.support}>
        <Text style={[styles.underline, styles.fontWeightBold]}>
          Quên mật khẩu
        </Text>
        <Text style={styles.signUpWrapper}>
          Chưa có tài khoản?{' '}
          <Text style={[styles.signUpText, styles.fontWeightBold]}>
            Đăng ký
          </Text>
        </Text>
        <Text style={[styles.underline, styles.fontWeightBold]}>
          Điều khoản sử dụng
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    padding: 16,
  },
  logo: {
    alignItems: 'center',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 13,
    marginTop: 10,
  },
  input: {
    backgroundColor: '#E5E5E5',
    borderRadius: 8,
    paddingLeft: 10,
    marginTop: 10,
  },
  buttonWrapper: {
    margin: 35,
  },
  buttonLogin: {
    alignItems: 'center',
    backgroundColor: '#EE202E',
    padding: 10,
    height: 42,
    borderRadius: 10,
  },
  textButton: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  support: {
    alignItems: 'center',
  },
  signUpText: {
    color: '#959595',
  },
  signUpWrapper: {
    marginTop: 20,
  },
  underline: {textDecorationLine: 'underline'},
  textDanger: {
    color: '#d9534f',
  },
  fontWeightBold: {
    fontWeight: 'bold',
  },
});
