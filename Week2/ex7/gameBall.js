const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

// 1. Tạo mảng cầu thủ cho mỗi đội
const [players1, players2] = game.players;

// 2. Tách thủ môn và các cầu thủ khác cho Bayern Munich (đội 1)
const [gk, ...fieldPlayers] = players1;

// 3. Tạo mảng 'allPlayers' chứa tất cả các cầu thủ của cả hai đội
const allPlayers = [...players1, ...players2];

// 4. Tạo mảng 'players1Final' bao gồm tất cả cầu thủ ban đầu của đội 1 cộng với các cầu thủ dự bị
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// 5. Tạo các biến cho mỗi tỷ lệ cược
const { team1, x: draw, team2 } = game.odds;

// 6. Viết hàm 'printGoals' để in tên cầu thủ và tổng số bàn thắng đã ghi
const printGoals = function (...players) {
    console.log(`${players.length} goals were scored`);
    for (let i = 0; i < players.length; i++) {
        console.log(players[i]);
    }
};

// Dữ liệu kiểm tra cho bước 6
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich'); // Kiểm tra với các cầu thủ được chỉ định
printGoals(...game.scored); // Kiểm tra với các cầu thủ từ game.scored

// 7. In ra đội nào có khả năng thắng cao hơn dựa trên tỷ lệ cược
console.log((team1 < team2 && game.team1) || (team2 < team1 && game.team2));
