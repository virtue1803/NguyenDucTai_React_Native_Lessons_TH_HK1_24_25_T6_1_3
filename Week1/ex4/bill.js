// Hàm tính tiền tip
function calculateTip(bill) {
    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
    const total = bill + tip;
    
    console.log(`Hóa đơn là ${bill}, tiền tip là ${tip.toFixed(2)}, và tổng cộng là ${total.toFixed(2)}.`);
  }
  
  // Các giá trị để kiểm tra
  const bills = [275, 40, 430];
  
  // Tính tiền tip cho từng giá trị
  bills.forEach(calculateTip);
  