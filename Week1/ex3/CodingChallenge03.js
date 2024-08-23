// There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition, and print it to the console. 
// Don't forget that there can be a draw, so test for that as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

// Test data
const dolphinsScores1 = [96, 108, 89];
const koalasScores1 = [88, 91, 110];

const dolphinsScoresBonus1 = [97, 112, 101];
const koalasScoresBonus1 = [109, 95, 123];

const dolphinsScoresBonus2 = [97, 112, 101];
const koalasScoresBonus2 = [109, 95, 106];

// Chức năng tính điểm trung bình
function calculateAverage(scores) {
    return scores.reduce((a, b) => a + b, 0) / scores.length;
}

// Nhiệm vụ 1 & 2: Tính trung bình cộng và xác định người thắng cuộc
function determineWinner(dolphinsScores, koalasScores) {
    const avgDolphins = calculateAverage(dolphinsScores);
    const avgKoalas = calculateAverage(koalasScores);

    if (avgDolphins > avgKoalas) {
        console.log(`Dolphins giành chiến thắng với số điểm trung bình là ${avgDolphins}!`);
    } else if (avgKoalas > avgDolphins) {
        console.log(`Koalas giành chiến thắng với số điểm trung bình là ${avgKoalas}!`);
    } else {
        console.log(`Đó là một trận hòa với cả hai đội đều ghi được điểm trung bình ${avgDolphins}!`);
    }
}

// Bonus 1 & 2: Xác định người chiến thắng bằng quy tắc điểm tối thiểu
function determineWinnerWithMinScore(dolphinsScores, koalasScores) {
    const avgDolphins = calculateAverage(dolphinsScores);
    const avgKoalas = calculateAverage(koalasScores);

    if (avgDolphins >= 100 && avgDolphins > avgKoalas) {
        console.log(`Dolphins giành chiến thắng với số điểm trung bình là ${avgDolphins}!`);
    } else if (avgKoalas >= 100 && avgKoalas > avgDolphins) {
        console.log(`Koalas giành chiến thắng với số điểm trung bình là ${avgKoalas}!`);
    } else if (avgDolphins >= 100 && avgKoalas >= 100 && avgDolphins === avgKoalas) {
        console.log(`trận hòa với cả hai đội đều ghi được điểm trung bình ${avgDolphins}!`);
    } else {
        console.log(`Không có đội nào giành được cúp.`);
    }
}

// Test Data 1
console.log("Test Data 1:");
determineWinner(dolphinsScores1, koalasScores1);

// test dữ liệu thêm 1
console.log("\nTest dữ liệu thêm 1:");
determineWinnerWithMinScore(dolphinsScoresBonus1, koalasScoresBonus1);

// Test dữ liệu thêm 2
console.log("\nTest dữ liệu thêm 2:");
determineWinnerWithMinScore(dolphinsScoresBonus2, koalasScoresBonus2);



