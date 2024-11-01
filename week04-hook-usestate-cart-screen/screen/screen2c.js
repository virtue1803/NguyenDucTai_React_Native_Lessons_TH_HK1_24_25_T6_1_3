import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react';
import Fontsion from 'react-native-vector-icons/FontAwesome5';

const Screen2c = ({ natigation }) => {
  // tao state de luu trang thai cua checkbox
  const [checkLowerCase, setCheckLowerCase] = useState(false);
  const [checkUpperCase, setCheckUpperCase] = useState(false);
  const [checkNumber, setCheckNumber] = useState(false);
  const [checkSpecialSymbol, setCheckSpecialSymbol] = useState(false);
  const [dkPassword, setDkPassword] = useState([]);
  const [length, setLength] = useState(0);

  // tao ham xu ly su kien khi click vao checkbox
  const xuLyCheckBox = (name) => {
    switch (name) {
      case 'lowerCase':
        if (checkLowerCase === false) {
          setCheckLowerCase(true);
          setDkPassword([...dkPassword, 'abcdefghijklmnopqrstuvwxyz']);
        } else {
          setCheckLowerCase(false);
          setDkPassword(dkPassword.filter((item) => item !== 'abcdefghijklmnopqrstuvwxyz'));
        }
        break;
      case 'upperCase':
        if (checkUpperCase === false) {
          setCheckUpperCase(true);
          setDkPassword([...dkPassword, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ']);
        } else {
          setCheckUpperCase(false);
          setDkPassword(dkPassword.filter((item) => item !== 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'));
        }
        break;
      case 'number':
        if (checkNumber === false) {
          setCheckNumber(true);
          setDkPassword([...dkPassword, '0123456789']);
        } else {
          setCheckNumber(false);
          setDkPassword(dkPassword.filter((item) => item !== '0123456789'));
        }
        break;
      case 'specialSymbol':
        if (checkSpecialSymbol === false) {
          setCheckSpecialSymbol(true);
          setDkPassword([...dkPassword, '!@#$%^&*()']);
        }
        else {
          setCheckSpecialSymbol(false);
          setDkPassword(dkPassword.filter((item) => item !== '!@#$%^&*()'));
        }
        break;
      default:
        break;
    }
  };

  //Ham random password với độ dai length
  const randomCharactor = (dkPassword, length) => {
    let password = '';
    for (let i = 0; i < length; i++) {
      let random = Math.floor(Math.random() * dkPassword.length);
      password += dkPassword[random].charAt(Math.floor(Math.random() * dkPassword[random].length));
    }
    return password
  };

  //tao state de luu password
  const [password, setPassword] = useState('');


  //Ham show password
  const showPassword = (randomCharactor) => {
    return randomCharactor;
  };

  return (
    <View style={styles.container}>
      <View style={styles.boxForm}>
        <View style={styles.Header}>
          <Text style={styles.title}>password generator</Text>
        </View>
        <View style={styles.boxTextShow}>
          <Text style={styles.textShow}>
            {password}
          </Text>
        </View>
        <View style={styles.formCheckBox}>
          <View style={styles.boxCheckBox}>
            <Text style={styles.textForm}>Password Length</Text>
            <TextInput
              style={styles.inputLength}
              onChangeText={(text) => setLength(text)}
            ></TextInput>
          </View>
          <View style={styles.boxCheckBox}>
            <Text style={styles.textForm}>Include lower case letters</Text>
            <TouchableOpacity
              style={styles.checkBox}
              onPress={() => xuLyCheckBox('lowerCase')}
            >
              {checkLowerCase ? <Fontsion name="check" size={20} color="#000" /> : null}
            </TouchableOpacity>
          </View>
          <View style={styles.boxCheckBox}>
            <Text style={styles.textForm}>Include upcase letters</Text>
            <TouchableOpacity
              style={styles.checkBox}
              onPress={() => xuLyCheckBox('upperCase')}
            >
              {checkUpperCase ? <Fontsion name="check" size={20} color="#000" /> : null}
            </TouchableOpacity>
          </View>
          <View style={styles.boxCheckBox}>
            <Text style={styles.textForm}>Include Number</Text>
            <TouchableOpacity
              style={styles.checkBox}
              onPress={() => xuLyCheckBox('number')}
            >
              {checkNumber ? <Fontsion name="check" size={20} color="#000" /> : null}
            </TouchableOpacity>
          </View>
          <View style={styles.boxCheckBox}>
            <Text style={styles.textForm}>Include special symbol</Text>
            <TouchableOpacity
              style={styles.checkBox}
              onPress={() => xuLyCheckBox('specialSymbol')}
            >
              {checkSpecialSymbol ? <Fontsion name="check" size={20} color="#000" /> : null}
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.boxSubmit}>
          <TouchableOpacity
            style={styles.nutSubmit}
            onPress={() => {
              setPassword(randomCharactor(dkPassword, length));
            }}
          >
            <Text style={styles.textNutSubmit}>Generate password</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ position: 'absolute', bottom: 0, right: 0 }}>
        <TouchableOpacity style={{ width: 100, margin: 20, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }} onPress={() => natigation('home')}>
          <Fontsion name="arrow-circle-left" size={30} color="#fff" />
          <Text style={{ fontSize: 25, color: '#fff' }}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Screen2c

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5C5CA7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxForm: {
    backgroundColor: '#23235B',
    width: 340,
    height: 730,
    borderRadius: 20,
    alignItems: 'center',
  },
  Header: {
    flex: 1,
    width: 300,
    height: 200,
    borderRadius: 20,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: 'white',
    textAlign: 'center',
  },
  formCheckBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'space-evenly',
  },
  boxTextShow: {
    flex: 1,
    width: 340,
    height: 200,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textShow: {
    width: 320,
    height: 50,
    backgroundColor: '#151537',
    color: 'white',
    fontSize: 18,
    padding: 12,
    textAlign: 'center'
  },
  inputLength: {
    width: 140,
    height: 40,
    backgroundColor: 'white',
    fontSize: 20,
    textAlign: 'center'

  },
  formCheckBox: {
    flex: 3,
    width: 340,
    height: 200,
    borderRadius: 20,
  },
  boxSubmit: {
    flex: 1,
    width: 320,
    height: 200,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxCheckBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 25,
    marginRight: 25,
  },
  textForm: {
    color: 'white',
    fontSize: 18,
  },
  nutSubmit: {
    width: 280,
    height: 50,
    backgroundColor: '#3B3B98',
    justifyContent: 'center'
  },
  textNutSubmit: {
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    color: '#fff'
  },
  checkBox: {
    width: 30,
    height: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})