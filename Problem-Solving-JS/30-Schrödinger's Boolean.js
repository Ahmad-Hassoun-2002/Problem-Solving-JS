// Can a value be both true and false?
// Define omniBool so that it returns true for the following:
// omniBool == true && omniBool == false
// If you enjoyed this kata, be sure to check out my other katas.

const omnibool = {
    _bit: false,
    valueOf() {
        this._bit = !this._bit;
        return this._bit;
    }
};

// OR

class OmniBool{
    constructor(){
        this.n = false;
    }
}
OmniBool.prototype[Symbol.toPrimitive] = function() { 
    this.n = !this.n;
    return this.n;
};
const omnibool2 = new OmniBool();