// Hàm 'calcTip' đã được viết trước đó
const calcTip = function (bill) {
    return (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;
};

// 1. Tạo mảng 'bills' chứa tất cả 10 giá trị hóa đơn thử nghiệm
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// 2. Tạo các mảng rỗng cho tiền boa và tổng số tiền
const tips = [];
const totals = [];

// 3. Sử dụng vòng lặp for để tính tiền boa và tổng số tiền cho mỗi giá trị hóa đơn trong mảng 'bills'
for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);  // Tính tiền boa cho hóa đơn hiện tại
    tips.push(tip);                 // Thêm tiền boa vào mảng 'tips'
    totals.push(bills[i] + tip);    // Thêm tổng số tiền (hóa đơn + tiền boa) vào mảng 'totals'
}

console.log('Bills:', bills); // Xuất mảng bills
console.log('Tips:', tips);   // Xuất mảng tips
console.log('Totals:', totals); // Xuất mảng totals

// 4. Phần thưởng: Viết hàm 'calcAverage' để tính trung bình của tất cả các số trong một mảng
const calcAverage = function (arr) {
    let sum = 0; // Khởi tạo biến tổng là 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]; // Cộng mỗi giá trị trong mảng vào tổng
    }
    return sum / arr.length; // Tính trung bình bằng cách chia tổng cho số lượng phần tử
};

// Gọi hàm 'calcAverage' với mảng 'totals'
const averageTotal = calcAverage(totals);
console.log('Average Total:', averageTotal); // Xuất giá trị trung bình của tổng số tiền
