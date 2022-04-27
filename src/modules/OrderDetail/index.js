import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import Timeline from 'react-native-timeline-flatlist';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const img =
  'https://play-lh.googleusercontent.com/jQDN_7DzKJUpWMnqvgGKfNSef4AIJxmd6QhDtoqYQ9a4Mg98OenvyfEyMwcBUfsqX4U';

const customerInfo = {
  id: 1,
  name: 'Đinh Quốc Trưởng',
  phone: '0964878794',
  location: '18 Tam Trinh',
  website: 'http://shopmebim.vn/monkeyjunior2',
};

const product = {
  id: 12345674,
  customer: 'Đinh Quốc Trưởng',
  date: 1649980800,
  nameProduct: 'Monkey Junior trọn đời',
  bonus: 50000,
  total: 499000,
  paid: false,
  idStatus: 1,
  like: false,
};

const timeline = [
  {time: '24/04/2021', title: 'Đặt hàng thành công'},
  {time: '25/04/2021', title: 'Tiếp nhận đơn hàng'},
  {time: '27/04/2021', title: 'Giao hàng thành công'},
];

export default function OrderDetail(props) {
  const orderId = props.route.params.orderId;
  return (
    <ScrollView style={{marginTop: 10, backgroundColor: '#fff', padding: 10}}>
      <View style={{borderBottomWidth: 0.5, paddingBottom: 10}}>
        <Text>
          Đơn hàng: <Text style={styles.colorBlack}>{`#${orderId}`}</Text>
        </Text>
      </View>
      <View style={{paddingTop: 10}}>
        <Text style={{lineHeight: 30}}>
          <Icon name="person-outline" />
          &nbsp;
          {customerInfo.name}
        </Text>
        <Text style={{lineHeight: 30}}>
          <Icon name="phone-portrait-outline" />
          &nbsp;
          {customerInfo.phone}
        </Text>
        <Text style={{lineHeight: 30}}>
          <Icon name="location-outline" />
          &nbsp;
          {customerInfo.location}
        </Text>
        <Text style={{lineHeight: 30}}>
          <Icon name="link" />
          &nbsp;
          {customerInfo.website}
        </Text>
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
        <View style={{flex: 3}}>
          <Text style={styles.colorBlack}>Monkey Junior trọn đời</Text>
          <Text>
            Tiền thưởng:&nbsp;
            <Text style={styles.colorRed}>haha</Text>
          </Text>
          <Text>
            Số lượng:&nbsp;
            <Text style={styles.colorBlack}>haha</Text>
          </Text>
          <Text>
            Tổng đơn:&nbsp;
            <Text style={styles.colorBlack}>haha</Text>
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#F3F3F3',
          padding: 5,
          borderRadius: 5,
        }}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={styles.colorBlack}>
            <FontAwesome name="dollar" size={16} />
            &nbsp; Tổng tiền:
            <Text style={{fontWeight: 'bold'}}> 499.000</Text>
          </Text>
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={styles.colorRed}>
            <FontAwesome name="dollar" size={16} />
            &nbsp; Tổng thưởng:
            <Text style={{fontWeight: 'bold'}}> 499.000</Text>
          </Text>
        </View>
      </View>
      <View style={{marginTop: 10}}>
        <Text style={[styles.colorBlack, {fontWeight: 'bold'}]}>
          Hành trình đơn hàng
        </Text>
        <Timeline
          data={timeline}
          circleSize={15}
          circleColor="#EE202E"
          lineColor="#EE202E"
          timeContainerStyle={{minWidth: 52, marginTop: -5}}
          timeStyle={{
            textAlign: 'center',
            color: 'black',
            padding: 5,
          }}
          options={{
            style: {paddingTop: 5},
          }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imgWrapper: {flex: 1, alignItems: 'center'},
  imgProduct: {
    width: 70,
    height: 70,
  },
  productBody: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
  },
  colorBlack: {
    color: 'black',
  },
  colorRed: {
    color: 'red',
  },
  colorOrange: {
    color: '#f70',
  },
});
