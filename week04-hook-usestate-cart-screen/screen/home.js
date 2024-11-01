import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const home = ({natigation}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.box}
                onPress={() => natigation('2a')}
            >
                <Text style={styles.text}>Screen 2a</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.box}>
                <Text style={styles.text}>Screen 2b</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.box} onPress={() => natigation('2c')}>
                <Text style={styles.text}>Screen 2c</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.box} onPress={() => natigation('tiki')}>
                <Text style={styles.text}>Screen Tiki_Ok</Text>
            </TouchableOpacity>
        </View>
    )
}

export default home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        backgroundColor: 'green',
        width: 300,
        height: 150,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
    },
})