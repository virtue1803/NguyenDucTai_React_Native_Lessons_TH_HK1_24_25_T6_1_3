import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';

const DemoCRUD = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://670881858e86a8d9e42f1d7b.mockapi.io/task')
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    // Add
    const add = () => {
        fetch('https://670881858e86a8d9e42f1d7b.mockapi.io/task', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                img: "teoimg",
                name: "Teo",
                shop: "TeoShop",
            }),
        })
            .then(response => response.json())
            .then(newItem => {
                setData([...data, newItem]); // Thêm item mới vào danh sách data
            })
            .catch(error => console.error('Error adding data:', error));
    };

    // Delete
    const deletes = (id) => {
        fetch(`https://670881858e86a8d9e42f1d7b.mockapi.io/task/${id}`, {
            method: 'DELETE',
        })
            .then(() => {
                setData(data.filter(item => item.id !== id)); // Loại bỏ item vừa xóa khỏi data
            })
            .catch(error => console.error('Error deleting data:', error));
    };

    return (
        <View style={styles.container}>
            <View style={styles.chucNang}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={add}
                >
                    <Text style={styles.text}>Add</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => deletes(data[0]?.id)} style={styles.button}>
                    <Text style={styles.text}>Delete</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.show}>
                <ScrollView>
                    {data.length > 0 ? (
                        <Text>{JSON.stringify(data, null, 2)}</Text>
                    ) : (
                        <Text>Loading...</Text>
                    )}
                </ScrollView>
            </View>
        </View>
    );
};

export default DemoCRUD;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    button: {
        width: 200,
        height: 50,
        borderRadius: 10,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 20,
    },
    show: {
        width: 300,
        height: 300,
        backgroundColor: 'lightgrey',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    chucNang: {
        height: 200,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
});
