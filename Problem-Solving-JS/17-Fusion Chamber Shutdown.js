// A laboratory is testing how atoms react in ionic state during nuclear fusion. They introduce different elements with Hydrogen in high temperature and pressurized chamber. Due to unknown reason the chamber lost its power and the elements in it started precipitating
// Given the number of atoms of Carbon [C],Hydrogen[H] and Oxygen[O] in the chamber. Calculate how many molecules of Water [H2O], Carbon Dioxide [CO2] and Methane [CH4] will be produced following the order of reaction affinity below
// 1. Hydrogen reacts with Oxygen   = H2O
// 2. Carbon   reacts with Oxygen   = CO2
// 3. Carbon   reacts with Hydrogen = CH4

// ملاحظة
// H >> 1 == Math.floor(H / 2)
const getMolecules = (C, H, O) => {
    const H2O = Math.min(O, H >> 1);
    H -= H2O * 2; O -= H2O;
    const CO2 = Math.min(C, O >> 1);
    C -= CO2; O -= CO2 * 2;
    const CH4 = Math.min(C, H >> 2);
    return { H2O, CO2, CH4 };
};

// OR

function burner(c, h, o) {
    const water = Math.min(~~(h / 2), o)
    const carbon = Math.min(~~((o - water) / 2), c)
    const methane = Math.min(~~((h - water * 2) / 4), c - carbon)
    return [water, carbon, methane]
}