import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import productsData from './assets/products.json'; // Đường dẫn đến tệp JSON

const App = () => {
  const [products, setProducts] = useState([]); // State để lưu sản phẩm

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Sử dụng tệp JSON nội bộ
        setProducts(productsData);
      } catch (error) {
        console.error(error); // Xử lý lỗi nếu có
      }
    };

    

    fetchProducts();
  }, []); // Chạy 1 lần khi component được mount
  // useEffect(() => {
  //   const fetchProducts = () => {
  //     // Tạo một sản phẩm mẫu
  //     const sampleProducts = [
  //       {
  //         id: '1',
  //         name: 'Dây cáp USB',
  //         image: 'https://via.placeholder.com/100', // Hình ảnh mẫu
  //         rating: 4.5,
  //         reviews: 10,
  //         price: '$10',
  //         discount: '$8',
  //       },
  //       {
  //         id: '2',
  //         name: 'Tai nghe Bluetooth',
  //         image: 'https://via.placeholder.com/100', // Hình ảnh mẫu
  //         rating: 4.0,
  //         reviews: 15,
  //         price: '$20',
  //         discount: '$15',
  //       },
  //       {
  //         id: '3',
  //         name: 'Sạc nhanh',
  //         image: 'https://via.placeholder.com/100', // Hình ảnh mẫu
  //         rating: 5.0,
  //         reviews: 20,
  //         price: '$15',
  //         discount: '$12',
  //       },
  //       {
  //         id: '4',
  //         name: 'Bộ phát WiFi',
  //         image: 'https://via.placeholder.com/100', // Hình ảnh mẫu
  //         rating: 3.5,
  //         reviews: 5,
  //         price: '$25',
  //         discount: '$20',
  //       },
  //     ];

  //     setProducts(sampleProducts); // Cập nhật state với sản phẩm mẫu
  //   };

  //   fetchProducts();
  // }, []); // Chạy 1 lần khi component được mount

  const ProductItem = ({ item }) => (
    <View style={styles.productContainer}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <View style={styles.ratingContainer}>
        {Array.from({ length: 5 }).map((_, index) => (
          <Icon
            key={index}
            name={index < Math.floor(item.rating) ? 'star' : 'star-outline'}
            size={16}
            color="gold"
          />
        ))}
        <Text style={styles.reviewCount}>({item.reviews})</Text>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.productPrice}>{item.price}</Text>
        <Text style={styles.productDiscount}>{item.discount}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Thanh điều hướng phía trên */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="search-outline" size={25} color="#fff" />
        </TouchableOpacity>
        <TextInput
          style={styles.searchBar}
          placeholder="Tìm kiếm"
          placeholderTextColor="#fff"
          defaultValue="Dây cáp USB"
        />
        <TouchableOpacity>
          <Icon name="cart-outline" size={25} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="menu-outline" size={25} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Danh sách sản phẩm */}
      <FlatList
        data={products}
        numColumns={2} // Hiển thị 2 sản phẩm trên mỗi hàng
        keyExtractor={(item) => item.id.toString()} // Đảm bảo id là chuỗi
        renderItem={({ item }) => <ProductItem item={item} />}
        contentContainerStyle={styles.productList}
      />

      {/* Thanh điều hướng phía dưới */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Icon name="menu-outline" size={25} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Icon name="home-outline" size={25} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Icon name="arrow-back-outline" size={25} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#2196F3',
    padding: 10,
  },
  searchBar: {
    flex: 1,
    height: 40,
    backgroundColor: '#4da6ff',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    color: '#fff',
  },
  productList: {
    padding: 10,
  },
  productContainer: {
    flex: 1,
    margin: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  productImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  reviewCount: {
    fontSize: 12,
    marginLeft: 5,
    color: '#555',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  productDiscount: {
    fontSize: 14,
    color: 'red',
    marginLeft: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#2196F3',
    paddingVertical: 10,
  },
  footerButton: {
    padding: 10,
  },
});

export default App;
