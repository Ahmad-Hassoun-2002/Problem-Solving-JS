// You will be given three reels of different images and told at which index the reels stop. From this information your job is to return the score of the resulted reels.
// Rules
// 1. There are always exactly three reels
// 2. Each reel has 10 different items.
// 3. The three reel inputs may be different.
// 4. The spin array represents the index of where the reels finish.
// 5. The three spin inputs may be different
// 6. Three of the same is worth more than two of the same
// 7. Two of the same plus one "Wild" is double the score.
// 8. No matching items returns 0.
// Scoring
// Item
// Three of the same
// Two of the same
// Two of the same plus one Wild
// Wild
// 100
// 10
// N/A
// Star
// 90
// 9
// 18
// Bell
// 80
// 8
// 16
// Shell
// 70
// 7
// 14
// Seven
// 60
// 6
// 12
// Cherry
// 50
// 5
// 10
// Bar
// 40
// 4
// 8
// King
// 30
// 3
// 6
// Queen
// 20
// 2
// 4
// Jack
// 10
// 1
// 2
let pro = {
    Wild: 5,
    Star: 4.5,
    Bell: 4,
    Shell: 3.5,
    Seven: 3,
    Cherry: 2.5,
    Bar: 2,
    King: 1.5,
    Queen: 1,
    Jack: 0.5
}
function fruit(reels, spins){
    let a = reels[0][spins[0]];
    let b = reels[1][spins[1]];
    let c = reels[2][spins[2]];
    return (a === b && b === c)? pro[a] * 20 : (a === b && c === "Wild")? pro[a] * 4 : (a === c && b === "Wild")? pro[a] * 4 : (b === c && a === "Wild")? pro[b] * 4 : (a === b || a === c)? pro[a] * 2 : (b === c || b === a)? pro[b] * 2 : 0;
}