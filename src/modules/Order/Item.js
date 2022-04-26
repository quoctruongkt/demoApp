import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import dayjs from 'dayjs';
import IconAnt from 'react-native-vector-icons/AntDesign';
import imgPaid from '../../assets/images/paid.png';

export default function Item({item, statusArr, onHandleLike}) {
  const status = statusArr.find(i => i.id === item.idStatus);
  console.log(status);
  const img =
    'https://play-lh.googleusercontent.com/jQDN_7DzKJUpWMnqvgGKfNSef4AIJxmd6QhDtoqYQ9a4Mg98OenvyfEyMwcBUfsqX4U';
  return (
    <View style={styles.productWrapper}>
      <View style={styles.productHeader}>
        <Text>
          <Text>{`#${item.id}`}</Text>&nbsp;&nbsp;
          <Text style={styles.colorBlack}>{item.customer}</Text>
        </Text>
        <Text>{dayjs.unix(item.date).format('DD/MM/YYYY')}</Text>
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
            <Text style={styles.colorRed}>{item.bonus.toLocaleString()}</Text>
          </Text>
          <Text>
            Tổng đơn:&nbsp;
            <Text style={styles.colorBlack}>{item.total.toLocaleString()}</Text>
          </Text>
        </View>
        <View style={styles.imgWrapper}>
          {item.paid && <Image source={imgPaid} />}
        </View>
      </View>
      <View style={styles.productFooter}>
        <View style={styles.statusWrapper}>
          <Text>{status?.label}</Text>
        </View>
        <TouchableOpacity
          style={styles.likeWrapper}
          onPress={() => onHandleLike(item.id)}>
          <Text style={styles.colorOrange}>
            <IconAnt
              name={item.like ? 'like1' : 'like2'}
              size={16}
              color="#f70"
            />{' '}
            Đánh giá
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
});
