import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const ColorSelectionScreen = ({ navigation }) => {
  // Array of image URLs for the colors
  const colorImages = [
    'https://cdn2.fptshop.com.vn/unsafe/96x0/filters:quality(100)/2020_2_4_637164273141389555_Vsmart-joy-3-den-3.png', // Trắng
    'https://cdn2.fptshop.com.vn/unsafe/96x0/filters:quality(100)/2020_2_4_637164276578618050_Vsmart-joy-3-tim-3.png', // Tím
    'https://cdn2.fptshop.com.vn/unsafe/96x0/filters:quality(100)/2020_2_4_637164263935541412_Vsmart-joy-3-trang-3.png', // Trắng (again)
    'https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:quality(100)/2020_12_24_637443960171752089_Vsmart-joy-3-dd.png',  // Màu VIP
  ];

  // Track the selected color
  const [selectedColor, setSelectedColor] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chọn một màu bên dưới:</Text>

      <View style={styles.colorOptions}>
        {colorImages.map((image, index) => (
          <TouchableOpacity
            key={index}
            style={styles.colorBox}
            onPress={() => setSelectedColor(image)}
          >
            <Image source={{ uri: image }} style={styles.colorImage} />
            
          </TouchableOpacity>
        ))}
      </View>

      {/* Done button to confirm the selection and go back */}
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
    backgroundColor: '#f5f5f5',
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
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
