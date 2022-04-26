import React from 'react';
import {View, Text} from 'react-native';

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

export default function OrderDetail() {
  return (
    <View>
      <View>
        <Text>
          Đơn hàng: <Text>{`#${product.id}`}</Text>
        </Text>
      </View>
      <View>
        <Text>{customerInfo.name}</Text>
        <Text>{customerInfo.phone}</Text>
        <Text>{customerInfo.location}</Text>
        <Text>{customerInfo.website}</Text>
      </View>
      <View style={{flex: 1, backgroundColor: 'red'}}>
        <View style={{flex: 1}}>
          <Text>hiih</Text>
        </View>
        <View style={{flex: 3}}>
          <Text>hah</Text>
        </View>
      </View>
    </View>
  );
}
