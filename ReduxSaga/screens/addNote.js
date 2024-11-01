import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useDispatch } from 'react-redux';
import { updateUserById } from '../store/userSlice';

const AddNote = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const user = route.params.data[0];
  const [newJob, setNewJob] = useState('');

  const onChangeJob = (text) => {
    setNewJob(text);
  };

  const addJob = () => {
    const updatedUser = { ...user, job: [...user.job, newJob] };
    dispatch(updateUserById({ id: user.id, data: updatedUser }));
    navigation.navigate('Dashboard', { name: user.name });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.info}>
          <Image source={{ uri: 'https://picsum.photos/200' }} style={styles.avt} />
          <View style={styles.textName}>
            <Text style={styles.name}>Hi {user.name}</Text>
            <Text style={styles.textAgrate}>Have a great day ahead</Text>
          </View>
        </View>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.boxTitle}>
        <Text style={styles.textTitle}>Add your job</Text>
      </View>

      <View style={styles.boxInputJob}>
        <View style={styles.inputJob}>
          <MaterialCommunityIcons name="note-text-outline" size={24} color="#1DD75B" />
          <TextInput
            style={styles.textInput}
            placeholder="Input your job"
            onChangeText={onChangeJob}
          />
        </View>
      </View>

      <View style={styles.boxNutFinish}>
        <TouchableOpacity style={styles.nutFinish} onPress={addJob}>
          <Text style={styles.textNutFinish}>Finish</Text>
          <AntDesign name="arrowright" marginLeft={5} size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddNote;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    avt: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        padding: 20,
        width: '100%',
    },
    info: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textName: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 10,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    textAgrate: {
        fontSize: 16,
        color: 'grey',
    },
    boxTitle: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    textTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        textTransform: 'uppercase',
        color: '#000',
    },
    boxInputJob: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
    },
    inputJob: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderBlockColor: 'grey',
        padding: 10,
        borderRadius: 5,
        margin: 30,
        width: '85%',
        height: 50,
    },
    textInput: {
        marginLeft: 10,
        fontSize: 18,
    },
    boxNutFinish: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '100%',
        padding: 20,
    }
    ,
    nutFinish: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00BDD6',
        borderRadius: 10,
        height: 50,
        width: '50%',
    },
    textNutFinish: {
        color: '#fff',
        fontSize: 20,
        textTransform: 'uppercase',
    },
    boxImage: {
        flex: 4,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    img: {
        width: 250,
        height: 250,
        marginBottom: 20,
    }
});