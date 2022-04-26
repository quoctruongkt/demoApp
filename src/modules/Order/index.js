import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import isToday from 'dayjs/plugin/isToday';

import Icon from 'react-native-vector-icons/Feather';
import SearchProduct from '../../components/SearchProduct';
import IconAnt from 'react-native-vector-icons/AntDesign';
import imgPaid from '../../assets/images/paid.png';
import Item from './Item';

const statusArr = [
  {
    id: 1,
    label: 'Đăng đơn',
  },
  {
    id: 2,
    label: 'Chờ giao',
  },
  {
    id: 3,
    label: 'Đã giao',
  },
];

const dataFull = [
  {
    id: 12345670,
    customer: 'Đinh Quốc Trưởng',
    date: 1650844800,
    nameProduct: 'Monkey Junior trọn đời',
    bonus: 50000,
    total: 499000,
    paid: false,
    idStatus: 1,
    like: false,
  },
  {
    id: 12345671,
    customer: 'Đinh Quốc Trưởng',
    date: 1650844800,
    nameProduct: 'Monkey Junior trọn đời',
    bonus: 50000,
    total: 499000,
    paid: false,
    idStatus: 2,
    like: false,
  },
  {
    id: 12345672,
    customer: 'Đinh Quốc Trưởng',
    date: 1650672000,
    nameProduct: 'Monkey Junior trọn đời',
    bonus: 50000,
    total: 499000,
    paid: true,
    idStatus: 3,
    like: false,
  },
  {
    id: 12345673,
    customer: 'Đinh Quốc Trưởng',
    date: 1649980800,
    nameProduct: 'Monkey Junior trọn đời',
    bonus: 50000,
    total: 499000,
    paid: true,
    idStatus: 3,
    like: false,
  },
  {
    id: 12345674,
    customer: 'Đinh Quốc Trưởng',
    date: 1649980800,
    nameProduct: 'Monkey Junior trọn đời',
    bonus: 50000,
    total: 499000,
    paid: false,
    idStatus: 1,
    like: false,
  },
  {
    id: 12345675,
    customer: 'Đinh Quốc Trưởng',
    date: 1648857600,
    nameProduct: 'Monkey Junior trọn đời',
    bonus: 50000,
    total: 499000,
    paid: false,
    idStatus: 2,
    like: false,
  },
];

dayjs.extend(isBetween);
dayjs.extend(isToday);

export default function Order() {
  const [data, setData] = useState([]);
  const [time, setTime] = useState('all');
  const [searchValue, setSearchValue] = useState('');
  const [totalMoney, setTotalMoney] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  useEffect(() => {
    let totalMoney = 0;
    let totalInterest = 0;
    data.forEach(product => {
      totalMoney = product.paid ? totalMoney + product.total : totalMoney;
      totalInterest = product.paid
        ? totalInterest + product.bonus
        : totalInterest;
    });
    setTotalMoney(totalMoney);
    setTotalInterest(totalInterest);
  }, [data]);

  useEffect(() => {
    const dataFilterName = dataFull.filter(product =>
      product.nameProduct.includes(searchValue),
    );
    const dataFilterDate = dataFilterName.filter(product => {
      const date = dayjs.unix(product.date).format('YYYY-MM-DD');
      const startDayOfWeek = dayjs().startOf('week').format('YYYY-MM-DD');
      const endDayOfWeek = dayjs().endOf('week').format('YYYY-MM-DD');
      const startDayOfMonth = dayjs().startOf('month').format('YYYY-MM-DD');
      const endDayOfMonth = dayjs().endOf('month').format('YYYY-MM-DD');

      switch (time) {
        case 'day':
          return dayjs(date).isToday();
          break;
        case 'week':
          return dayjs(date).isBetween(
            startDayOfWeek,
            endDayOfWeek,
            null,
            '[]',
          );
          break;
        case 'month':
          return dayjs(date).isBetween(
            startDayOfMonth,
            endDayOfMonth,
            null,
            '[]',
          );
          break;
        default:
          return product;
      }
    });
    setData(dataFilterDate);
  }, [searchValue, time]);

  const onSubmitSearch = dataForm => {
    setSearchValue(dataForm.searchValue);
  };

  const onHandleLike = id => {
    const newData = data.map(product => {
      if (product.id === id) {
        return {...product, like: !product.like};
      } else {
        return product;
      }
    });
    setData(newData);
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
            <Text style={styles.colorWhite}>Tổng doanh số</Text>
            <Text style={[styles.colorWhite, styles.value]}>
              {totalMoney.toLocaleString()}
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
            <Text style={styles.colorWhite}>Tổng hoa hồng</Text>
            <Text style={[styles.colorWhite, styles.value]}>
              {totalInterest.toLocaleString()}
            </Text>
          </View>
          <View>
            <View style={styles.iconWrapper}>
              <Icon name="dollar-sign" color="white" size={25} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <Item
              item={item}
              statusArr={statusArr}
              onHandleLike={onHandleLike}
            />
          )}
          key={item => item.id}
        />
      </View>
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
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: '#F0F4F7',
    paddingBottom: 10,
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

  colorWhite: {
    color: '#fff',
  },
  value: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  listContainer: {backgroundColor: '#F0F4F7', flex: 1},
  colorBlack: {
    color: 'black',
  },
  colorRed: {
    color: 'red',
  },
  colorOrange: {
    color: '#f70',
  },
  imgWrapper: {flex: 1, alignItems: 'center'},
  imgProduct: {
    width: 60,
    height: 60,
  },
});
