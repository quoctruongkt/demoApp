import React from "react"
import { View, Image, Text, StyleSheet } from "react-native"

export default function Item({ info }) {
    return <View style={styles.category}>
        <View style={{ flex: 3, flexDirection: 'row' }}>
            <View style={styles.column}>
                <Image source={{uri: info.image}} style={{ width: 60, height: 60 }} />
            </View>
            <View style={styles.column}>
                <Text>{info.quantity}</Text>
            </View>
            <View style={styles.column}>
                <Text>{info.interest}</Text>
            </View>
        </View>
        <View style={styles.nameCategory}>
            <Text>{info.name}</Text>
        </View>
    </View>
}

const styles = StyleSheet.create({
    category: { height: 105, borderStyle: 'solid', borderColor: '#E3E3E3', borderWidth: 1, borderRadius: 10, marginBottom: 10 },
    nameCategory: { flex: 1, backgroundColor: '#F6F6F6', justifyContent: 'center', paddingLeft: 15 },
    column: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})