const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const cardsByBake = [
    ['f150'],
    ['corolla'],
    ['camaro'],
];

// help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// prevent incompatible values
carMakers.push('100');

// help with 'map'
carMakers.map((car: string): string => {
    return car.toLocaleUpperCase();
});

// flexible types
const importantDates: (Date | string)[] = [];
importantDates.push(new Date());
importantDates.push('2020-10-12');
importantDates.push('2');

