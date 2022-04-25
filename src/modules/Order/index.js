import React, {useState} from 'react';
import {View, StyleSheet, Text, FlatList, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import IconAnt from 'react-native-vector-icons/AntDesign';
import SearchProduct from '../../components/SearchProduct';
import imgPaid from '../../assets/images/paid.png';

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

const img =
  'https://play-lh.googleusercontent.com/jQDN_7DzKJUpWMnqvgGKfNSef4AIJxmd6QhDtoqYQ9a4Mg98OenvyfEyMwcBUfsqX4U';

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
            <Text style={styles.colorWhite}>Tổng doanh số</Text>
            <Text style={[styles.colorWhite, styles.value]}>40.000.000</Text>
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
            <Text style={[styles.colorWhite, styles.value]}>40.000.000</Text>
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
          data={dataFull}
          renderItem={({item}) => (
            <View style={styles.productWrapper}>
              <View style={styles.productHeader}>
                <Text>
                  <Text>{`#${item.id}`}</Text>&nbsp;&nbsp;
                  <Text style={styles.colorBlack}>{item.customer}</Text>
                </Text>
                <Text>{item.date}</Text>
              </View>
              <View style={styles.productBody}>
                <View style={styles.imgWrapper}>
                  <Image
                    source={{
                      uri: img,
                    }}
                    style={styles.imgProduct}
                  />
                </View>
                <View style={{flex: 2}}>
                  <Text style={styles.colorBlack}>{item.nameProduct}</Text>
                  <Text>
                    Tiền thưởng:&nbsp;
                    <Text style={styles.colorRed}>{item.bonus}</Text>
                  </Text>
                  <Text>
                    Tổng đơn:&nbsp;
                    <Text style={styles.colorBlack}>{item.total}</Text>
                  </Text>
                </View>
                <View style={styles.imgWrapper}>
                  <Image source={imgPaid} />
                </View>
              </View>
              <View style={styles.productFooter}>
                <View>
                  <View style={styles.statusWrapper}>
                    <Text>{item.status}</Text>
                  </View>
                </View>
                <View>
                  <View style={styles.likeWrapper}>
                    <Text style={styles.colorOrange}>
                      <IconAnt name="like2" size={16} /> Đánh giá
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          )}
          key={item => item.id}
          style={{marginTop: 10}}
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
  productWrapper: {
    paddingLeft: 5,
    paddingRight: 5,
    padding: 5,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  productHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  productBody: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
  },
  productFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 5,
    borderTopWidth: 1,
    borderTopColor: '#E7E7E7',
    paddingLeft: 10,
    paddingRight: 10,
  },
  statusWrapper: {
    backgroundColor: 'rgba(10, 143, 239, 0.1)',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
  },
  likeWrapper: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#f70',
  },
  colorWhite: {
    color: '#fff',
  },
  value: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  listContainer: {backgroundColor: '#F0F4F7', paddingBottom: 130},
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
