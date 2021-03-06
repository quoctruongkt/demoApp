import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import WareHouse from '../WareHouse';
import Empty from '../Empty';
import Order from '../Order';

const Tab = createBottomTabNavigator();

const TAB_HOME = 'Trang chủ';
const TAB_WARE_HOUSE = 'Kho hàng';
const TAB_COMMUNITY = 'Cộng đồng';
const TAB_ORDER = 'Đơn hàng';
const TAB_PERSON = 'Cá nhân';

export default function NavTab() {
  const getIconName = (tabName, focused) => {
    switch (tabName) {
      case TAB_HOME:
        return focused ? 'home' : 'home-outline';
        break;
      case TAB_WARE_HOUSE:
        return focused ? 'cart' : 'cart-outline';
        break;
      case TAB_COMMUNITY:
        return focused ? 'md-chatbubbles' : 'md-chatbubbles-outline';
        break;
      case TAB_ORDER:
        return focused ? 'newspaper' : 'newspaper-outline';
        break;
      case TAB_PERSON:
        return focused ? 'person' : 'person-outline';
        break;
    }
  };
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: '#EE202E',
        tabBarInactiveTintColor: '#aaa',
        tabBarIcon: ({focused}) => {
          const iconName = getIconName(route.name, focused);
          return <Icon name={iconName} size={25} color="#EE202E" />;
        },
      })}>
      <Tab.Screen
        name={TAB_HOME}
        component={Empty}
        options={{headerTitleAlign: 'center'}}
      />
      <Tab.Screen
        name={TAB_WARE_HOUSE}
        component={WareHouse}
        options={{headerTitleAlign: 'center'}}
      />
      <Tab.Screen
        name={TAB_COMMUNITY}
        component={Empty}
        options={{headerTitleAlign: 'center'}}
      />
      <Tab.Screen
        name={TAB_ORDER}
        component={Order}
        options={{headerTitleAlign: 'center'}}
      />
      <Tab.Screen
        name={TAB_PERSON}
        component={Empty}
        options={{headerTitleAlign: 'center'}}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
