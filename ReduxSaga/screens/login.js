import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersStart, addUserStart } from '../store/userSlice';
import { Image, StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';

const Login = ({ navigation }) => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const users = useSelector(state => state.user.users);

  useEffect(() => {
    dispatch(fetchUsersStart());
  }, [dispatch]);

  const userNames = users.map((item) => item.name);

  const click = () => {
    if (name === '') {
      alert('Please enter your name');
    } else if (userNames.includes(name)) {
      navigation.navigate('Dashboard', { name: name });
    } else {
      dispatch(addUserStart(name));
      navigation.navigate('Dashboard', { name: name });
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{ uri: 'https://s3-alpha-sig.figma.com/img/4d17/f963/f6ee0953600008083c32857b2d79ab5e?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YiPvQeynV6joYyVajxEkRP~XIRFb8DmujZUYD6U3Yi5lWQq3KxIfiDmToqmlRli3C4CwfMdl9LauuGnKk7u~4JnK1RKP12GP7CLXko3QQTPO7~vM4YTwcmjmQFQt2RHGq0EmB8fs-jZ9noOg200dAA3rQTQ70XoIm91v1zOH~q7ybIr14ZA7as~yPXsUkpLV4TMN~reSmCpbnPu~Vl93qnV-VWpF8BJh0ohOSUaDVl5zpdZLRyEqtw9i0rfvokru~uHO-0LabmaTRIzd3dhkhAeyQsfWZ5nbPIyU9nLZxvuUi8bO6OSWjma-aatpk0DjDRcaqa2LxsrlrTPR4YVmww__' }} />
      <Text style={styles.title}> manage your {'\n'} task</Text>
      <View style={styles.boxTextInput}>
        <Ionicons name="mail-outline" size={30} color="black" />
        <TextInput
          style={styles.input}
          placeholder='Enter your name'
          onChangeText={(text) => setName(text)}
          value={name}
        ></TextInput>
      </View>
      <TouchableOpacity
        style={styles.nutStart}
        onPress={() => click()} >
        <Text style={styles.textNutStart}>Get started</Text>
        <AntDesign name="arrowright" marginLeft={5} size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Login;




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
  },
  img: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    textTransform: 'uppercase',
    color: '#8353E2',
    textAlign: 'center',
  },
  boxTextInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    width: '90%',
    height: 50
  },
  input: {
    marginLeft: 10,
    fontSize: 18
  },
  nutStart: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00BDD6',
    borderRadius: 10,
    height: 50,
    width: '50%',
  },
  textNutStart: {
    color: '#fff',
    fontSize: 20,
    textTransform: 'uppercase',
  }
})