import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import Fontsion from 'react-native-vector-icons/FontAwesome5';
import { TextInput } from 'react-native';
import { useState } from 'react';

const ScreenTiki_Ok = ({ natigation }) => {

    const giaGoc = 141800;
    const giaGiam = 141000;

    const clickHome = () => {
        natigation('home');
    }

    const [soLuong, setSoLuong] = useState(1);
    const [giaTamTinh, setGiaTamTinh] = useState(giaGiam);
    const [thanhTien, setThanhTien] = useState(giaTamTinh);

    const tangSoLuong = () => {
        setSoLuong(prevSoLuong => {
            const newSoLuong = prevSoLuong + 1;
            setGiaTamTinh(newSoLuong * giaGiam);
            setThanhTien(newSoLuong * giaGiam);
            return newSoLuong;
        });
    }
    
    const giamSoLuong = () => {
        if (soLuong > 1) {
            setSoLuong(prevSoLuong => {
                const newSoLuong = prevSoLuong - 1;
                setGiaTamTinh(newSoLuong * giaGiam);
                setThanhTien(newSoLuong * giaGiam);
                return newSoLuong;
            });
        }
    }

    //random mã giảm giá
    const randomMaGiamGia = () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        const length = 8;
    
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            result += characters[randomIndex];
        }
        return result;
    }

    //in ra mã giảm giá
    const [maGiamGia, setMaGiamGia] = useState('Mã giảm giá');

    const ApDung = () => {
        setMaGiamGia(randomMaGiamGia());
        setGiaTamTinh(giaTamTinh - giaTamTinh * 0.1);
        setThanhTien(giaTamTinh - giaTamTinh * 0.1);
    }



    return (
        <View style={styles.container}>
            <View style={styles.boxHeader}>
                <View style={{ marginTop: 30 }}>
                    <View style={styles.boxInfo}>
                        <Image
                            source={{ uri: 'https://salt.tikicdn.com/cache/750x750/ts/product/b9/82/8a/467b81a449a9b28f252bb97865fd1bfc.jpg.webp' }} // Replace with your product image URL
                            style={styles.productImage}
                        />
                        <View style={styles.boxInfoRight}>
                            <Text style={styles.text}>Nguyên hàm tích và ứng dụng</Text>
                            <Text style={styles.text}>Cung cấp bởi Tiki Trading</Text>
                            <Text style={styles.textGiaGiam}>{giaGiam.toLocaleString(3)} đ</Text>
                            <Text style={styles.textGiaGoc}>{giaGoc.toLocaleString(3)} đ</Text>
                            <View style={styles.boxMua}>
                                <View style={[styles.boxMua, { width: 80 }]}>
                                    <TouchableOpacity onPress={giamSoLuong} style={styles.nutTangGiam}><Text style={styles.text}>-</Text></TouchableOpacity>
                                    <Text style={[styles.text, { fontSize: 20 }]}>{soLuong}</Text>
                                    <TouchableOpacity onPress={tangSoLuong} style={styles.nutTangGiam}><Text style={styles.text}>+</Text></TouchableOpacity>
                                </View>
                                <TouchableOpacity><Text style={[styles.text, { color: 'blue' }]}>Mua sau</Text></TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={styles.boxXemMaGiamGia}>
                        <Text style={[styles.text]}>Mã giảm giá đã lưu</Text>
                        <TouchableOpacity>
                            <Text style={[styles.text, { marginLeft: 25, color: 'blue' }]}>Xem tại đây</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.boxApMaGiam}>
                    <View style={styles.boxTextInputMaGiam}>
                        <View style={{ width: 50, height: 20, marginLeft: 10, marginRight: 10, backgroundColor: 'yellow' }}></View>
                        <TextInput style={styles.textInputMaGiam} placeholder={maGiamGia}></TextInput>
                    </View>

                    <TouchableOpacity onPress={ApDung} style={[styles.nutApDung, styles.center]}>
                        <Text style={styles.textNutApDung}>Áp dụng</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.boxCenter}>
                <View style={styles.boxPhieuQuaTang}>
                    <Text style={styles.text}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
                    <TouchableOpacity>
                        <Text style={[styles.text, { color: 'blue' }]}>Nhập tại đây?</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.boxFooter}>
                <View style={[styles.boxTamTinh, {height: 80, backgroundColor: 'white'}]}>
                    <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>Tạm tính</Text>
                    <Text style={{color: 'red', fontSize: 20, fontWeight: 'bold'}}>{giaTamTinh.toLocaleString(3)} đ</Text>
                </View>
                <View style={styles.boxThanhTienVaDatHang}>
                    <View style={styles.boxThanhTien}>
                        <Text style={{color: 'gray', fontSize: 20, fontWeight: 'bold'}}>Thành tiền</Text>
                        <Text style={{color: 'red', fontSize: 20, fontWeight: 'bold'}}>{thanhTien.toLocaleString(3)} đ</Text>
                    </View>
                    <TouchableOpacity style={styles.nutDatHang}>
                        <Text style={styles.textNutDatHang}>Tiến hành đặt hàng</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ position: 'absolute', bottom: 0, right: 0 }}>
                <TouchableOpacity style={{ width: 100, margin: 20, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }} onPress={clickHome}>
                    <Fontsion name="arrow-circle-left" size={30} color="black" />
                    <Text style={{ fontSize: 25, color: 'black' }}>Back</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ScreenTiki_Ok

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    boxHeader: {
        flex: 3,
        justifyContent: 'space-evenly',
        alignItems: 'space-evenly',
    },
    boxInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: 20,
        marginLeft: 5,
    },
    productImage: {
        width: 150,
        height: 170,

    },
    text: {
        fontWeight: 'bold',
        fontSize: 15,
        color: 'black'
    },
    boxMua: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    nutTangGiam: {
        width: 20,
        height: 20,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center'
    },
    boxInfoRight: {
        height: 170,
        justifyContent: 'space-between',
    },
    textGiaGiam: {
        color: 'red',
        fontSize: 20
    },
    textGiaGoc: {
        color: 'gray',
        fontSize: 15,
        textDecorationLine: 'line-through'
    },
    boxXemMaGiamGia: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 50,
        marginLeft: 20,
    },
    boxApMaGiam: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20,
    },
    boxTextInputMaGiam: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderBlockColor: 'gray',
        borderWidth: 1,
        width: 250,
        height: 50
    },
    textInputMaGiam: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    nutApDung: {
        backgroundColor: 'blue',
        width: 100,
        height: 50,
    },
    textNutApDung: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    boxCenter: {
        flex: 1,
        backgroundColor: 'gray',
        justifyContent: 'center',
    },
    boxPhieuQuaTang: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        height: 80,
        backgroundColor: 'white'
    },
    boxFooter: {
        flex: 3,
        justifyContent: 'space-between',
        backgroundColor: 'gray',
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    boxTamTinh:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
    },
    boxThanhTien:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    boxThanhTienVaDatHang:{
        justifyContent: 'space-evenly',
        alignItems: 'space-evenly',
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: 'white',
        height: 200,
        paddingBottom: 60
    },
    nutDatHang:{
        backgroundColor: 'red',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textNutDatHang:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    }
})