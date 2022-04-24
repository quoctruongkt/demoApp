import React from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import Icon from 'react-native-vector-icons/Ionicons';

const tabTime = [
  {
    id: 'day',
    label: 'Hôm nay',
  },
  {
    id: 'week',
    label: 'Tuần này',
  },
  {
    id: 'month',
    label: 'Tháng này',
  },
  {
    id: 'all',
    label: 'Tất cả',
  },
];

export default function SearchProduct({onSubmitSearch, setTime, time}) {
  const {handleSubmit, control} = useForm();
  return (
    <View>
      <View style={styles.searchWrapper}>
        <View style={styles.inputWrapper}>
          <Controller
            name="searchValue"
            control={control}
            render={({field: {onChange, value, onBlur}}) => (
              <TextInput
                style={styles.inputSearch}
                placeholder="Tìm kiếm sản phẩm"
                value={value}
                onChangeText={e => onChange(e)}
                onBlur={onBlur}
              />
            )}
          />
          <Icon name="search" size={20} style={styles.iconSearch} />
        </View>
        <View style={styles.sort}>
          <Text style={styles.textSort} onPress={handleSubmit(onSubmitSearch)}>
            <Icon name="funnel-outline" size={20} /> Lọc
          </Text>
        </View>
      </View>
      <View style={styles.sort}>
        {tabTime.map(tab => {
          return (
            <Text
              onPress={() => setTime(tab.id)}
              style={[styles.tabItem, tab.id === time ? styles.tabActive : '']}>
              {tab.label}
            </Text>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchWrapper: {
    height: 30,
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
  },
  inputSearch: {
    backgroundColor: '#F0F4F7',
    borderRadius: 8,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 40,
  },
  inputWrapper: {
    position: 'relative',
    flex: 4,
  },
  iconSearch: {
    position: 'absolute',
    top: 5,
    left: 10,
  },
  textSort: {
    fontSize: 18,
    color: '#92C83E',
  },
  sort: {flex: 1, justifyContent: 'center', alignItems: 'flex-end'},
  tabItem: {flex: 1, margin: 10, textAlign: 'center'},
  tabActive: {
    borderBottomColor: '#92C83E',
    borderBottomWidth: 3,
    borderRadius: 5,
    fontWeight: 'bold',
    color: '#92C83E',
  },
  sort: {
    flexDirection: 'row',
    borderBottomColor: '#CECECE',
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
  },
});
