import React, { useState } from 'react';
import { View, Text, TextInput, Button, CheckBox, StyleSheet } from 'react-native';

const PasswordGeneratorScreen = () => {
  const [passwordLength, setPasswordLength] = useState(8);
  const [includeLower, setIncludeLower] = useState(true);
  const [includeUpper, setIncludeUpper] = useState(false);
  const [includeNumber, setIncludeNumber] = useState(true);
  const [includeSymbol, setIncludeSymbol] = useState(false);

  const generatePassword = () => {
    // Logic for generating the password
    console.log('Generating password with the following options:', {
      passwordLength,
      includeLower,
      includeUpper,
      includeNumber,
      includeSymbol,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PASSWORD GENERATOR</Text>
      <Text>Password length</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={passwordLength.toString()}
        onChangeText={(value) => setPasswordLength(Number(value))}
      />
      <View style={styles.optionContainer}>
        <CheckBox value={includeLower} onValueChange={setIncludeLower} />
        <Text>Include lower case letters</Text>
      </View>
      <View style={styles.optionContainer}>
        <CheckBox value={includeUpper} onValueChange={setIncludeUpper} />
        <Text>Include uppercase letters</Text>
      </View>
      <View style={styles.optionContainer}>
        <CheckBox value={includeNumber} onValueChange={setIncludeNumber} />
        <Text>Include numbers</Text>
      </View>
      <View style={styles.optionContainer}>
        <CheckBox value={includeSymbol} onValueChange={setIncludeSymbol} />
        <Text>Include special symbols</Text>
      </View>
      <Button title="GENERATE PASSWORD" onPress={generatePassword} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#2d2f55',
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 5,
    marginVertical: 10,
    backgroundColor: 'white',
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
});

export default PasswordGeneratorScreen;
