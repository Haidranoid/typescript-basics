let apples: number = 5; // don't do this
let bananas: number; // do this, if the value will be used on the future
bananas = 5;

let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// array
let color: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false]

// classes
class Car {

}

let car: Car = new Car();

// object literal
interface Coordinates {
    x: number;
    y: number;
}

let point: Coordinates = {
    x: 10,
    y: 20,
};

// functions
const logNumber = (i: number): void => {
    console.log(i);
}

// When to use annotations
// 1) function that returns the 'any' type, ex: JSON.parse()
const json = `{"x": 10, "y": 20}`;
const coordinates: Coordinates = JSON.parse(json);
console.log(coordinates) // {x: 10, y: 20};

// 2) When we declare a variable on once line and initialize it later
let colors = ['red', 'green', 'blue'];
let foundColor: boolean;

for (let i = 0; i < colors.length; i++) {
    if (colors[i] === 'green') {
        foundColor = true;
    }
}

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: (boolean | number);

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i];
    }
}

