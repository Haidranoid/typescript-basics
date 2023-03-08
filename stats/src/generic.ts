class HoldAnything<T> {
    data: T;
}

const holdNumber = new HoldAnything<number>();
holdNumber.data = 2;

const holdString = new HoldAnything<string>();
holdString.data = 'adlfjal'

class ArrayOfAnything<T> {
    constructor(public collection: T[]) {
    }

    get(index: number): T {
        return this.collection[index]
    }
}

const arr = new ArrayOfAnything(['a', 'b', 'c']);

class Car {
    print() {
        console.log('brrr brrr')
    }
}

class House {
    print() {
        console.log('im a house')
    }
}

interface Printable {
    print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].print();
    }
}

printHousesOrCars([new House(), new House()])
printHousesOrCars([new Car(), new Car()])
printHousesOrCars([1,2])

