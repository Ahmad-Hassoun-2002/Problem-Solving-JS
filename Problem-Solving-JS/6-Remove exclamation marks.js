// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
const removeExclamationMarks = s => s.split("").filter(ele => ele !== "!").join("");

console.log(removeExclamationMarks("sdfsdfsdfs!!sdf"));

// OR

function removeExclamationMarks2(s) {
    return s.replace(/!/gi, '');
}

console.log(removeExclamationMarks2("sdfsdfsdfs!!sdf"));

// OR

function removeExclamationMarks3(s) {
    return s.split('!').join('');
}

console.log(removeExclamationMarks3("sdfsdfsdfs!!sdf"));

// OR

const removeExclamationMarks4 = s => s.replaceAll('!', '');

console.log(removeExclamationMarks4("sdfsdfsdfs!!sdf"));

// OR

let removeExclamationMarks5 = s => s.split`!`.join``

console.log(removeExclamationMarks5("sdfsdfsdfs!!sdf"));