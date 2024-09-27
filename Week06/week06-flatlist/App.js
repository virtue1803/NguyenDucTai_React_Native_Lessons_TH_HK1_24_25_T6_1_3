import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Đảm bảo bạn đã cài đặt react-native-vector-icons

const products = [
  {
    id: '1',
    name: 'Ca nấu lẩu, nấu mì mini...',
    shop: 'Shop Devang',
    image: 'https://via.placeholder.com/100',
  },
  {
    id: '2',
    name: '1KG KHÔ GÀ BƠ TỎI...',
    shop: 'Shop LTD Food',
    image: 'https://via.placeholder.com/100',
  },
  {
    id: '3',
    name: 'Xe cần cẩu đa năng',
    shop: 'Shop Thế giới đồ chơi',
    image: 'https://via.placeholder.com/100',
  },
  {
    id: '4',
    name: 'Đồ chơi dạng mô hình',
    shop: 'Shop Thế giới đồ chơi',
    image: 'https://via.placeholder.com/100',
  },
  {
    id: '5',
    name: 'Lãnh đạo giản đơn',
    shop: 'Shop Minh Long Book',
    image: 'https://via.placeholder.com/100',
  },
  {
    id: '6',
    name: 'Hiểu lòng con trẻ',
    shop: 'Shop Minh Long Book',
    image: 'https://via.placeholder.com/100',
  },
  {
    id: '7',
    name: 'Hiểu lòng con trẻ',
    shop: 'Shop Minh Long Book',
    image: 'https://via.placeholder.com/100',
  },
  {
    id: '8',
    name: 'Hiểu lòng con trẻ',
    shop: 'Shop Minh Long Book',
    image: 'https://via.placeholder.com/100',
  },
  {
    id: '9',
    name: 'Hiểu lòng con trẻ',
    shop: 'Shop Minh Long Book',
    image: 'https://via.placeholder.com/100',
  },
  {
    id: '10',
    name: 'Hiểu lòng con trẻ',
    shop: 'Shop Minh Long Book',
    image: 'https://via.placeholder.com/100',
  },
  {
    id: '11',
    name: 'Hiểu lòng con trẻ',
    shop: 'Shop Minh Long Book',
    image: 'https://via.placeholder.com/100',
  },
  {
    id: '12',
    name: 'Hiểu lòng con trẻ',
    shop: 'Shop Minh Long Book',
    image: 'https://via.placeholder.com/100',
  },
  {
    id: '13',
    name: 'Hiểu lòng con trẻ',
    shop: 'Shop Minh Long Book',
    image: 'https://via.placeholder.com/100',
  },
  {
    id: '14',
    name: 'Hiểu lòng con trẻ',
    shop: 'Shop Minh Long Book',
    image: 'https://via.placeholder.com/100',
  },

];

const ProductItem = ({ item }) => {
  return (
    <View style={styles.productContainer}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.shopName}>{item.shop}</Text>
      </View>
      <TouchableOpacity style={styles.chatButton}>
        <Text style={styles.chatButtonText}>Chat</Text>
      </TouchableOpacity>
    </View>
  );
};

const App = () => {
  return (
    <View style={styles.container}>
      {/* Thanh điều hướng phía trên */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-back" size={25} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Chat</Text>
        <TouchableOpacity>
          <Icon name="cart-outline" size={25} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Thông báo và gạch ngang */}
      <View style={styles.notificationContainer}>
        <Text style={styles.notificationText}>
          Bạn có thắc mắc với sản phẩm vừa xem? Đừng ngại chat với shop!
        </Text>
      </View>
      <View style={styles.separator} />

      {/* Nội dung chính */}
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductItem item={item} />}
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
    padding: 15,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  notificationContainer: {
    padding: 15,
    backgroundColor: '#f9f9f9',
  },
  notificationText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
  },
  separator: {
    height: 1,
    backgroundColor: '#ddd',
    marginHorizontal: 10,
  },
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  productImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  shopName: {
    fontSize: 14,
    color: '#777',
  },
  chatButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  chatButtonText: {
    color: '#fff',
    fontWeight: 'bold',
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
