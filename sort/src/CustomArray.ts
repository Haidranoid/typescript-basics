import {Sorter} from './Sorter'

export class CustomArray extends Sorter {
    data: number[];
    length: number;

    constructor(array: number[]) {
        super();

        this.data = array;
        this.length = array.length;
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        return this.data[leftIndex] > this.data[rightIndex];
    }

    swap(leftIndex: number, rightIndex: number): void {
        const temp = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = temp;
    }
}