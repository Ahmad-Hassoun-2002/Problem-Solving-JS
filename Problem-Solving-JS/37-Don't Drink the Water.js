// Don't Drink the Water
// Given a two-dimensional array representation of a glass of mixed liquids, sort the array such that the liquids appear in the glass based on their density. (Lower density floats to the top) The width of the glass will not change from top to bottom.
// ======================
// |   Density Chart    |
// ======================
// | Honey   | H | 1.36 |
// | Water   | W | 1.00 |
// | Alcohol | A | 0.87 |
// | Oil     | O | 0.80 |
// ----------------------
// {                             {
//   { 'H', 'H', 'W', 'O' },        { 'O','O','O','O' },
//   { 'W', 'W', 'O', 'W' },  =>    { 'W','W','W','W' },
//   { 'H', 'H', 'O', 'O' }         { 'H','H','H','H' }
// }                             }
// The glass representation may be larger or smaller. If a liquid doesn't fill a row, it floats to the top and to the left.

let a = {
    H : 1.36,
    W : 1.00,
    A : 0.87,
    O : 0.80
}
function separateLiquids(glass) {
    if (glass.length === 0 || glass[0].length === 0) return [];
    let l = glass[0].length;
    let r = glass.length;
    let gla = glass.flat()
    gla.sort((b , c) => a[b] - a[c]);
    let n = gla.join("");
    let g = [];
    for(let i = 0 ; i < r ; i++){
        let res = [];
        for(let j = 0 ; j < l ; j++){
            res.push(n[j]);
        }
        n = n.slice(l)
        g.push(res);
    }
    return g;
}