import React, {useState, useEffect} from 'react';
import {View, StyleSheet, TextInput, Text, Image, FlatList} from 'react-native';
import Item from './Item';
import SearchProduct from '../../components/SearchProduct';

const dataFull = [
  {
    id: 1,
    name: 'Thẻ Monkey Junior 1 Năm (online)',
    image:
      'https://play-lh.googleusercontent.com/jQDN_7DzKJUpWMnqvgGKfNSef4AIJxmd6QhDtoqYQ9a4Mg98OenvyfEyMwcBUfsqX4U',
    quantity: '200',
    interest: '24.000.000',
    interestMonth: '20.000.000',
    interestWeek: '7.000.000',
    interestDay: '1.000.000',
  },
  {
    id: 2,
    name: 'Thẻ Monkey Junior 2 Năm (online)',
    image:
      'https://play-lh.googleusercontent.com/jQDN_7DzKJUpWMnqvgGKfNSef4AIJxmd6QhDtoqYQ9a4Mg98OenvyfEyMwcBUfsqX4U',
    quantity: '200',
    interest: '35.000.000',
    interestMonth: '20.000.000',
    interestWeek: '7.000.000',
    interestDay: '1.000.000',
  },
  {
    id: 3,
    name: 'Thẻ Monkey Stories 1 Năm (online)',
    image:
      'https://play-lh.googleusercontent.com/FBZeQymDd5-qwX0Q3J1iJCypbjED7tLAdTMZ2vmoUrTcml6RSPp5vTkA_oErGDtx8EiD',
    quantity: '200',
    interest: '35.000.000',
    interestMonth: '20.000.000',
    interestWeek: '7.000.000',
    interestDay: '1.000.000',
  },
  {
    id: 4,
    name: 'Thẻ Monkey Stories 2 Năm (online)',
    image:
      'https://play-lh.googleusercontent.com/FBZeQymDd5-qwX0Q3J1iJCypbjED7tLAdTMZ2vmoUrTcml6RSPp5vTkA_oErGDtx8EiD',
    quantity: '200',
    interest: '35.000.000',
    interestMonth: '20.000.000',
    interestWeek: '7.000.000',
    interestDay: '1.000.000',
  },
  {
    id: 5,
    name: 'Thẻ Monkey Math 1 Năm (online)',
    image:
      'https://play-lh.googleusercontent.com/KtgHqCM-5YtqdmWlQHk-iJ7Mz8YjLmzrTpB8BqLQ9if0HeNqhhc2lrjIHAktQ-s-WsM',
    quantity: '200',
    interest: '35.000.000',
    interestMonth: '20.000.000',
    interestWeek: '7.000.000',
    interestDay: '1.000.000',
  },
  {
    id: 6,
    name: 'Thẻ Monkey Math 2 Năm (online)',
    image:
      'https://play-lh.googleusercontent.com/KtgHqCM-5YtqdmWlQHk-iJ7Mz8YjLmzrTpB8BqLQ9if0HeNqhhc2lrjIHAktQ-s-WsM',
    quantity: '200',
    interest: '35.000.000',
    interestMonth: '20.000.000',
    interestWeek: '7.000.000',
    interestDay: '1.000.000',
  },
  {
    id: 7,
    name: 'Thẻ VMonkey 1 Năm (online)',
    image:
      'https://play-lh.googleusercontent.com/qpPpFzeymGu9fUZpBby8fq1Q669X80S-3vZ_wfyDS-Xa7Ob2jrxvj4po9Bz4bTAmiu0',
    quantity: '200',
    interest: '35.000.000',
    interestMonth: '20.000.000',
    interestWeek: '7.000.000',
    interestDay: '1.000.000',
  },
  {
    id: 8,
    name: 'Thẻ VMonkey 2 Năm (online)',
    image:
      'https://play-lh.googleusercontent.com/qpPpFzeymGu9fUZpBby8fq1Q669X80S-3vZ_wfyDS-Xa7Ob2jrxvj4po9Bz4bTAmiu0',
    quantity: '200',
    interest: '35.000.000',
    interestMonth: '20.000.000',
    interestWeek: '7.000.000',
    interestDay: '1.000.000',
  },
];

export default function WareHouse() {
  const [data, setData] = useState([]);
  const [time, setTime] = useState('all');
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    setData(dataFull);
  }, []);

  useEffect(() => {
    const newData = dataFull.filter(item => item.name.includes(searchValue));
    setData(newData);
  }, [searchValue, time]);

  const onSubmitSearch = dataForm => {
    setSearchValue(dataForm.searchValue);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SearchProduct
          onSubmitSearch={onSubmitSearch}
          time={time}
          setTime={setTime}
        />
      </View>
      <View style={{padding: 10, paddingBottom: 115}}>
        <View style={styles.titleWrapper}>
          <View style={styles.column}>
            <Text style={styles.title}>Sản phẩm</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.title}>Đã bán</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.title}>Lãi</Text>
          </View>
        </View>
        {data.length > 0 ? (
          <FlatList
            data={data}
            renderItem={item => <Item info={item.item} time={time} />}
            keyExtractor={item => item.id}
            style={{marginTop: 10}}
            key={item => item.id}
          />
        ) : (
          <Text style={styles.textEmpty}>Không tìm thấy dữ liệu</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  titleWrapper: {
    height: 50,
    backgroundColor: '#EE202E',
    borderRadius: 10,
    flexDirection: 'row',
  },
  column: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textEmpty: {
    textAlign: 'center',
    marginTop: 20,
  },
});
