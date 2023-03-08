
interface Reportable {
    summary(): string;
}

interface Car {
    name: string;
    year: number;
    broken: boolean;
}

const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true,
    summary(): string {
        return `Name: ${this.name}`
    }
};

const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `May drink has ${this.sugar} grams of sugar`
    }
}

const printSummary = (item: Reportable) => {
    console.log(item.summary());
}

printSummary(oldCivic);
printSummary(drink)