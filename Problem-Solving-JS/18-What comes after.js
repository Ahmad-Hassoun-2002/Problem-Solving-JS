const comes_after2 = (str, l) => {
    l = l.toLowerCase();
    return [...str].map((char, ind) => char.toLowerCase() === l && /[a-z]/ig.test(str[ind + 1]) ? str[ind + 1] : '').join('');
};