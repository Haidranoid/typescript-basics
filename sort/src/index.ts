import {CustomString} from "./CustomString";
import {CustomArray} from "./CustomArray";

const numbersArray = new CustomArray([5, -20, 100, 0, 10, -1, 20, -50, 33, 16]);
const charArray = new CustomString('Murcielago');

numbersArray.sort()
console.log(numbersArray.data)

charArray.sort()
console.log(charArray.str)

