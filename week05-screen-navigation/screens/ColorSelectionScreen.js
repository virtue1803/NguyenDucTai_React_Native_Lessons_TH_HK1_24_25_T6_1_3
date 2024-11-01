import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const ColorSelectionScreen = ({ navigation }) => {
  const [selectedColor, setSelectedColor] = useState(null);

  // Color options to choose from
  const colors = ['#BCE7FD', '#FF0000', '#000000', '#003366']; // Corresponding to the colors in your image

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chọn một màu bên dưới:</Text>

      <View style={styles.colorOptions}>
        {colors.map((color, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.colorBox, { backgroundColor: color }]}
            onPress={() => setSelectedColor(color)}
          />
        ))}
      </View>

      {/* Done button to go back to the previous screen */}
      <TouchableOpacity style={styles.doneButton} onPress={() => navigation.goBack()}>
        <Text style={styles.doneButtonText}>XONG</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  colorOptions: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorBox: {
    width: 100,
    height: 100,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#000',
  },
  doneButton: {
    backgroundColor: '#003366',
    borderRadius: 5,
    padding: 15,
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  doneButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ColorSelectionScreen;
