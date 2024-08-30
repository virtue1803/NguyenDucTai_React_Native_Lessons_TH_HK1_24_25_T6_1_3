// 1. Hàm tính tiền boa dựa trên giá trị hóa đơn
const calcTip = function (bill) {
    return (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;
};

// Kiểm tra hàm với giá trị hóa đơn là 100
console.log(calcTip(100)); // Kết quả mong đợi: 15

// 2. Mảng 'bills' chứa dữ liệu thử nghiệm
const bills = [125, 555, 44];

// 3. Mảng 'tips' chứa giá trị tiền boa cho mỗi hóa đơn
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// 4. Phần thưởng: Mảng 'total' chứa tổng giá trị (hóa đơn + tiền boa)
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills); // Kết quả: [125, 555, 44]
console.log(tips);  // Kết quả: [18.75, 111, 8.8]
console.log(total); // Kết quả: [143.75, 666, 52.8]
