// 1. Hàm để in nhiệt độ dự báo
function printForecast(arr) {
    let forecastString = ''; // Khởi tạo một chuỗi rỗng để lưu trữ dự báo cuối cùng

    // Duyệt qua từng nhiệt độ trong mảng
    for (let i = 0; i < arr.length; i++) {
        forecastString += `... ${arr[i]}°C in ${i + 1} days `; // Thêm từng nhiệt độ với số ngày tương ứng vào chuỗi dự báo
    }

    console.log(forecastString + '...'); // In chuỗi dự báo hoàn chỉnh ra console
}

// 2. Kiểm tra hàm với các bộ dữ liệu đã cho
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

printForecast(data1); // Kết quả: "... 17°C in 1 days ... 21°C in 2 days ... 23°C in 3 days ..."
printForecast(data2); // Kết quả: "... 12°C in 1 days ... 5°C in 2 days ... -5°C in 3 days ... 0°C in 4 days ... 4°C in 5 days ..."
