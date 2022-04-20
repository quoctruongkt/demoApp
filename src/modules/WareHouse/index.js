import React, { useState } from "react"
import { View, StyleSheet, TextInput, Text, Image, FlatList } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons';
import Item from "./Item";

const data = [
    {
        id: 1,
        name: "Thẻ Monkey Junior 1 Năm (online)",
        image: "https://play-lh.googleusercontent.com/jQDN_7DzKJUpWMnqvgGKfNSef4AIJxmd6QhDtoqYQ9a4Mg98OenvyfEyMwcBUfsqX4U",
        quantity: '200',
        interest: '24.000.000'
    },
    {
        id: 2,
        name: "Thẻ Monkey Junior 2 Năm (online)",
        image: "https://play-lh.googleusercontent.com/jQDN_7DzKJUpWMnqvgGKfNSef4AIJxmd6QhDtoqYQ9a4Mg98OenvyfEyMwcBUfsqX4U",
        quantity: '200',
        interest: '35.000.000'
    },
    {
        id: 3,
        name: "Thẻ Monkey Stories 1 Năm (online)",
        image: "https://play-lh.googleusercontent.com/FBZeQymDd5-qwX0Q3J1iJCypbjED7tLAdTMZ2vmoUrTcml6RSPp5vTkA_oErGDtx8EiD",
        quantity: '200',
        interest: '35.000.000'
    },
    {
        id: 4,
        name: "Thẻ Monkey Stories 2 Năm (online)",
        image: "https://play-lh.googleusercontent.com/FBZeQymDd5-qwX0Q3J1iJCypbjED7tLAdTMZ2vmoUrTcml6RSPp5vTkA_oErGDtx8EiD",
        quantity: '200',
        interest: '35.000.000'
    },
    {
        id: 5,
        name: "Thẻ Monkey Math 1 Năm (online)",
        image: "https://play-lh.googleusercontent.com/KtgHqCM-5YtqdmWlQHk-iJ7Mz8YjLmzrTpB8BqLQ9if0HeNqhhc2lrjIHAktQ-s-WsM",
        quantity: '200',
        interest: '35.000.000'
    },
    {
        id: 6,
        name: "Thẻ Monkey Math 2 Năm (online)",
        image: "https://play-lh.googleusercontent.com/KtgHqCM-5YtqdmWlQHk-iJ7Mz8YjLmzrTpB8BqLQ9if0HeNqhhc2lrjIHAktQ-s-WsM",
        quantity: '200',
        interest: '35.000.000'
    },
    {
        id: 7,
        name: "Thẻ VMonkey 1 Năm (online)",
        image: "https://play-lh.googleusercontent.com/qpPpFzeymGu9fUZpBby8fq1Q669X80S-3vZ_wfyDS-Xa7Ob2jrxvj4po9Bz4bTAmiu0",
        quantity: '200',
        interest: '35.000.000'
    },
    {
        id: 8,
        name: "Thẻ VMonkey 2 Năm (online)",
        image: "https://play-lh.googleusercontent.com/qpPpFzeymGu9fUZpBby8fq1Q669X80S-3vZ_wfyDS-Xa7Ob2jrxvj4po9Bz4bTAmiu0",
        quantity: '200',
        interest: '35.000.000'
    },
]

const tabTime = [
    {
        id: 'day',
        label: 'Hôm nay'
    },
    {
        id: 'week',
        label: 'Tuần này'
    },
    {
        id: 'month',
        label: 'Tháng này'
    },
    {
        id: 'all',
        label: 'Tất cả'
    },
]
export default function WareHouse() {
    const [time, setTime] = useState('day')
    const onSearch = () => {

    }
    return <View style={styles.container}>
        <View style={styles.header}>
            <View style={styles.searchWrapper}>
                <View style={styles.inputWrapper}>
                    <TextInput style={styles.inputSearch} placeholder="Tìm kiếm sản phẩm" />
                    <Icon name="search" size={20} style={styles.iconSearch} />
                </View>
                <View style={styles.sort}>
                    <Text style={styles.textSort}><Icon name='funnel-outline' size={20} /> Lọc</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', borderBottomColor: '#CECECE', borderBottomWidth: 1, borderBottomStyle: 'solid' }}>
                {tabTime.map(tab => {
                    return <Text onPress={() => setTime(tab.id)} style={[styles.tabItem, tab.id === time ? styles.tabActive : '']}>{tab.label}</Text>
                })}
            </View>
        </View>
        <View style={{ padding: 10, paddingBottom: 115 }}>
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
            <FlatList
                data={data}
                renderItem={item => (
                    <Item info={item.item} />
                )}
                keyExtractor={item => item.id}
                style={{ marginTop: 10 }}
            />
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        fontSize: 16
    },
    searchWrapper: {
        height: 30,
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10
    },
    inputSearch: {
        backgroundColor: '#F0F4F7',
        borderRadius: 8,
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 40
    },
    inputWrapper: {
        position: 'relative',
        flex: 4
    },
    iconSearch: {
        position: 'absolute',
        top: 5,
        left: 10
    },
    textSort: {
        fontSize: 18,
        color: '#92C83E'
    },
    sort: { flex: 1, justifyContent: 'center', alignItems: 'flex-end' },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff'
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
        alignItems: 'center'
    },
    tabItem: { flex: 1, margin: 10, textAlign: 'center' },
    tabActive: { borderBottomColor: '#92C83E', borderBottomWidth: 3, borderRadius: 5, fontWeight: 'bold', color: '#92C83E' }
})