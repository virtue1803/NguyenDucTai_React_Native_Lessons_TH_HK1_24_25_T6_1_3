// 1. Hàm mũi tên để tính trung bình của ba điểm số
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// 2. Tính điểm trung bình cho cả hai đội với Dữ liệu 1
const avgDolphins1 = calcAverage(44, 23, 71);
const avgKoalas1 = calcAverage(65, 54, 49);

// 3. Tính điểm trung bình cho cả hai đội với Dữ liệu 2
const avgDolphins2 = calcAverage(85, 54, 41);
const avgKoalas2 = calcAverage(23, 34, 27);

// 4. Hàm để kiểm tra đội chiến thắng
function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins thắng (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas thắng (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('Không có đội nào thắng!');
    }
}

// 5. Xác định đội chiến thắng cho cả hai bộ dữ liệu
checkWinner(avgDolphins1, avgKoalas1); // Kiểm tra cho Dữ liệu 1
checkWinner(avgDolphins2, avgKoalas2); // Kiểm tra cho Dữ liệu 2
