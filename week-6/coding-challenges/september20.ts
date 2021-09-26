// https://edabit.com/challenge/YT2kXSMEtACPPk35R
const intWithinBounds = (n:number, lower:number, upper:number):boolean => {
    if (n !== Math.floor(n)) return false;  // n is not an integer
    if (n < lower) return false;
    if (n >= upper) return false;
    return true;
}
console.log('(3,1,9): ', intWithinBounds(3,1,9));
console.log('(6,1,6): ', intWithinBounds(6,1,6));
console.log('(4.5,3,8): ', intWithinBounds(4.5,3,8));


// https://edabit.com/challenge/ejfdLAp673DwxSg5R
const areaOfCountry = (name:string, area:number):string => {
    const WORLD_LANDMASS = 148940000;
    const proportional_mass = Math.round((area*100*100/WORLD_LANDMASS))/100;
    return `${name} is ${proportional_mass}% of the total world's landmass`
}
console.log(areaOfCountry('Russia', 17098242));
console.log(areaOfCountry('USA', 9372610));
console.log(areaOfCountry('Iran', 1648195));


// https://edabit.com/challenge/3ZtykTsx3GSoPHyBb
// Towers of Hanoi
const towerHanoi = (discs:number):number => {
    if (discs === 0) return 0;
    if (discs === 1) return 1;
    return 2**discs-1;
}
console.log(towerHanoi(3));
console.log(towerHanoi(5));
console.log(towerHanoi(0));