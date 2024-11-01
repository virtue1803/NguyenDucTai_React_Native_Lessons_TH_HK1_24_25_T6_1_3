import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const JobItem = ({ item, index, onDelete }) => {

    //trả về index của item được click
    const clickDelete = () => {
        onDelete(index);
    }

    return (
        <View style={styles.container}>
            <View style={styles.show}>
                <AntDesign name="checksquareo" size={24} color="green" />
                <Text
                    style={styles.textJob}
                    numberOfLines={1} 
                    ellipsizeMode="tail"
                >
                    {item}
                </Text>
            </View>

            <View style={styles.crud}>
                <TouchableOpacity style={{ borderBottomWidth: 1, borderBlockColor: "#E3B30C" }}>
                    <MaterialCommunityIcons name="pencil-outline" size={24} color="#E3B30C" />
                </TouchableOpacity>
                <TouchableOpacity onPress={clickDelete}>
                    <MaterialIcons name="delete-forever" size={24} color="red" />
                </TouchableOpacity>
 
            </View>
        </View>
    );
};

export default JobItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 30,
        width: '95%',
        height: 45,
        margin: 10,
        justifyContent: 'space-between',
        backgroundColor: '#D3D5D8',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    crud: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 70,
    },
    show: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textJob: {
        fontSize: 17,
        fontWeight: 'bold',
        marginLeft: 10,
    }
});