import {Sorter} from './Sorter'

export class CustomString extends Sorter{
    str: string;
    length: number;

    constructor(str: string) {
        super();

        this.str = str;
        this.length = str.length;
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        return this.str[leftIndex].toLocaleUpperCase() > this.str[rightIndex].toLocaleUpperCase();
    }

    swap(leftIndex: number, rightIndex: number): void {
        const charArray = this.str.split('');

        const temp = charArray[leftIndex];
        charArray[leftIndex] = charArray[rightIndex];
        charArray[rightIndex] = temp;

        this.str = charArray.join('');
    }
}