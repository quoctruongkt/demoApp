import React from "react"
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
        name: "Thẻ Monkey Junior 2 Năm (online)",
        image: "https://play-lh.googleusercontent.com/jQDN_7DzKJUpWMnqvgGKfNSef4AIJxmd6QhDtoqYQ9a4Mg98OenvyfEyMwcBUfsqX4U",
        quantity: '200',
        interest: '35.000.000'
    },
    {
        id: 4,
        name: "Thẻ Monkey Junior 2 Năm (online)",
        image: "https://play-lh.googleusercontent.com/jQDN_7DzKJUpWMnqvgGKfNSef4AIJxmd6QhDtoqYQ9a4Mg98OenvyfEyMwcBUfsqX4U",
        quantity: '200',
        interest: '35.000.000'
    },
    {
        id: 5,
        name: "Thẻ Monkey Junior 2 Năm (online)",
        image: "https://play-lh.googleusercontent.com/jQDN_7DzKJUpWMnqvgGKfNSef4AIJxmd6QhDtoqYQ9a4Mg98OenvyfEyMwcBUfsqX4U",
        quantity: '200',
        interest: '35.000.000'
    },
    {
        id: 6,
        name: "Thẻ Monkey Junior 2 Năm (online)",
        image: "https://play-lh.googleusercontent.com/jQDN_7DzKJUpWMnqvgGKfNSef4AIJxmd6QhDtoqYQ9a4Mg98OenvyfEyMwcBUfsqX4U",
        quantity: '200',
        interest: '35.000.000'
    },
    {
        id: 7,
        name: "Thẻ Monkey Junior 2 Năm (online)",
        image: "https://play-lh.googleusercontent.com/jQDN_7DzKJUpWMnqvgGKfNSef4AIJxmd6QhDtoqYQ9a4Mg98OenvyfEyMwcBUfsqX4U",
        quantity: '200',
        interest: '35.000.000'
    },
    {
        id: 8,
        name: "Thẻ Monkey Junior 2 Năm (online)",
        image: "https://play-lh.googleusercontent.com/jQDN_7DzKJUpWMnqvgGKfNSef4AIJxmd6QhDtoqYQ9a4Mg98OenvyfEyMwcBUfsqX4U",
        quantity: '200',
        interest: '35.000.000'
    },
    {
        id: 9,
        name: "Thẻ Monkey Junior 2 Năm (online)",
        image: "https://play-lh.googleusercontent.com/jQDN_7DzKJUpWMnqvgGKfNSef4AIJxmd6QhDtoqYQ9a4Mg98OenvyfEyMwcBUfsqX4U",
        quantity: '200',
        interest: '35.000.000'
    },
    {
        id: 10,
        name: "Thẻ Monkey Junior 2 Năm (online)",
        image: "https://play-lh.googleusercontent.com/jQDN_7DzKJUpWMnqvgGKfNSef4AIJxmd6QhDtoqYQ9a4Mg98OenvyfEyMwcBUfsqX4U",
        quantity: '200',
        interest: '35.000.000'
    },
]
export default function WareHouse() {
    return <View style={styles.container}>
        <View style={styles.searchWrapper}>
            <View style={styles.inputWrapper}>
                <TextInput style={styles.inputSearch} placeholder="Tìm kiếm sản phẩm" />
                <Icon name="search" size={20} style={styles.iconSearch} />
            </View>
            <View style={styles.sort}>
                <Text style={styles.textSort}><Icon name='funnel-outline' size={20} /> Lọc</Text>
            </View>
        </View>
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
            style={{marginTop: 10}}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
        fontSize: 16
    },
    searchWrapper: {
        height: 30,
        flexDirection: 'row'
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
        marginTop: 10
    },
    column: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})