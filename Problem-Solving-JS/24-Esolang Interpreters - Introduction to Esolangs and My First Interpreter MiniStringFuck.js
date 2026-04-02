const myFirstInterpreter = code => {
    let cell = 0;
    return [...code].reduce((out, c) => c === "+" ? (cell = (cell + 1) % 256, out): c === "." ? out + String.fromCharCode(cell): out
    , "");
};