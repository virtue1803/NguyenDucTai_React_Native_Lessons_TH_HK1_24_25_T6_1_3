import { Image, StyleSheet, Text, TextInput, View, FlatList, TouchableOpacity } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { findUserByNameStart } from '../store/userSlice'; // Sử dụng action Saga
import JobItem from "../components/JobComponent";

const Dashboard = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const [name] = useState(route.params.name);

  // Lấy người dùng từ Redux store
  const user = useSelector(state => state.user.users.find(u => u.name === name));

  useEffect(() => {
    // Dispatch action Saga để tìm người dùng theo tên
    dispatch(findUserByNameStart(name));
  }, [dispatch, name]);

  const job = user ? user.job : [];

  const deleteJob = (index) => {
    const newJob = job.filter((item, i) => i !== index);
    // Dispatch action update user với công việc đã xóa
    dispatch(updateUserById({ id: user.id, data: { ...user, job: newJob } }));
  };

  const clickAdd = () => {
    navigation.navigate('AddNote', { data: [user] });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.info}>
          <Image source={{ uri: 'https://picsum.photos/200' }} style={styles.avt} />
          <View style={styles.textName}>
            <Text style={styles.name}>Hi {name}</Text>
            <Text style={styles.textAgrate}>Have a great day ahead</Text>
          </View>
        </View>
      </View>

      <View style={styles.boxSearch}>
        <View style={styles.search}>
          <FontAwesome name="search" size={24} color="black" />
          <TextInput placeholder="Search" style={styles.inputSearch}></TextInput>
        </View>
      </View>

      <View style={styles.boxListNote}>
        <FlatList
          style={{ flex: 3, width: '100%' }}
          contentContainerStyle={{ alignItems: 'center', flexGrow: 1 }}
          data={job}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => <JobItem item={item} index={index} onDelete={deleteJob} />}
        />
      </View>

      <View style={styles.boxAdd}>
        <TouchableOpacity style={styles.buttonAdd} onPress={() => clickAdd()}>
          <FontAwesome6 name="add" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
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
  boxSearch: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'grey',
    padding: 10,
    borderRadius: 5,
    margin: 30,
    width: '85%',
    height: 50,
  },
  inputSearch: {
    marginLeft: 10,
    fontSize: 18,
  },
  boxAdd: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '100%',
    padding: 20,
  },
  buttonAdd: {
    width: 70,
    height: 70,
    backgroundColor: '#00BDD6',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxListNote: {
    flex: 5,
    width: '90%',
    height: '50%',
    borderRadius: 10,
  },
});
