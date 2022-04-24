import React, {useState} from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import SearchProduct from '../../components/SearchProduct';

const dataFull = [
  {
    id: 12345670,
    customer: 'Đinh Quốc Trưởng',
    date: '24/04/2022',
    nameProduct: 'Monkey Junior trọn đời',
    bonus: '50.000',
    total: '499.000',
    paid: true,
    status: 'Đã giao',
    like: false,
  },
  {
    id: 12345671,
    customer: 'Đinh Quốc Trưởng',
    date: '24/04/2022',
    nameProduct: 'Monkey Junior trọn đời',
    bonus: '50.000',
    total: '499.000',
    paid: true,
    status: 'Đã giao',
    like: false,
  },
  {
    id: 12345672,
    customer: 'Đinh Quốc Trưởng',
    date: '24/04/2022',
    nameProduct: 'Monkey Junior trọn đời',
    bonus: '50.000',
    total: '499.000',
    paid: true,
    status: 'Đã giao',
    like: false,
  },
  {
    id: 12345673,
    customer: 'Đinh Quốc Trưởng',
    date: '24/04/2022',
    nameProduct: 'Monkey Junior trọn đời',
    bonus: '50.000',
    total: '499.000',
    paid: true,
    status: 'Đã giao',
    like: false,
  },
  {
    id: 12345674,
    customer: 'Đinh Quốc Trưởng',
    date: '24/04/2022',
    nameProduct: 'Monkey Junior trọn đời',
    bonus: '50.000',
    total: '499.000',
    paid: true,
    status: 'Đã giao',
    like: false,
  },
  {
    id: 12345675,
    customer: 'Đinh Quốc Trưởng',
    date: '24/04/2022',
    nameProduct: 'Monkey Junior trọn đời',
    bonus: '50.000',
    total: '499.000',
    paid: true,
    status: 'Đã giao',
    like: false,
  },
];

export default function Order() {
  const [time, setTime] = useState('all');
  const onSubmitSearch = dataForm => {
    console.log(dataForm);
  };
  return (
    <View style={styles.container}>
      <SearchProduct
        onSubmitSearch={onSubmitSearch}
        time={time}
        setTime={setTime}
      />
      <View style={styles.turnoverWrapper}>
        <View style={[styles.turnoverItem, styles.totalTurnover]}>
          <View>
            <Text style={{color: 'white'}}>Tổng doanh số</Text>
            <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
              40.000.000
            </Text>
          </View>
          <View>
            <View style={styles.iconWrapper}>
              <Icon name="check-square" color="white" size={25} />
            </View>
          </View>
        </View>
        <View style={[styles.turnoverItem, styles.totalInterest]}>
          <View>
            <Text style={{color: 'white'}}>Tổng hoa hồng</Text>
            <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
              40.000.000
            </Text>
          </View>
          <View>
            <View style={styles.iconWrapper}>
              <Icon name="dollar-sign" color="white" size={25} />
            </View>
          </View>
        </View>
      </View>
      <FlatList
        data={dataFull}
        renderItem={({item}) => (
          <View style={{paddingLeft: 5, paddingRight: 5}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 10,
              }}>
              <Text>
                <Text>{`#${item.id}`}</Text>&nbsp;&nbsp;
                <Text>{item.customer}</Text>
              </Text>
              <Text>{item.date}</Text>
            </View>
            <View></View>
          </View>
        )}
        key={item => item.id}
        style={{marginTop: 10}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  turnoverWrapper: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: '#F0F4F7',
  },
  turnoverItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
    borderRadius: 5,
  },
  totalTurnover: {
    backgroundColor: '#ee202e',
    marginRight: 5,
  },
  totalInterest: {
    backgroundColor: '#92C83E',
    marginLeft: 5,
  },
  iconWrapper: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 90,
    padding: 5,
  },
});
