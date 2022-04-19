import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Login from '../Login';

const Tab = createBottomTabNavigator();

const TAB_HOME = 'Trang chủ';
const TAB_WARE_HOUSE = 'Kho hàng';
const TAB_COMMUNITY = 'Cộng đồng';
const TAB_ORDER = 'Đơn hàng';
const TAB_PERSON = 'Cá nhân';

export default function WareHouse() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarActiveTintColor: '#EE202E',
          tabBarInactiveTintColor: '#aaa',
          tabBarIcon: () => {
            switch (route.name) {
              case TAB_HOME:
                return <Icon name="rocket" size={30} color="#900" />;
                break;
              case TAB_WARE_HOUSE:
                return <Icon name="rocket" size={30} color="#900" />;
                break;
              case TAB_COMMUNITY:
                return <Icon name="rocket" size={30} color="#900" />;
                break;
              case TAB_ORDER:
                return <Icon name="rocket" size={30} color="#900" />;
                break;
              case TAB_PERSON:
                return <Icon name="rocket" size={30} color="#900" />;
                break;
            }
          },
        })}>
        <Tab.Screen name={TAB_HOME} component={Login} />
        <Tab.Screen name={TAB_WARE_HOUSE} component={Login} />
        <Tab.Screen name={TAB_COMMUNITY} component={Login} />
        <Tab.Screen name={TAB_ORDER} component={Login} />
        <Tab.Screen name={TAB_PERSON} component={Login} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
