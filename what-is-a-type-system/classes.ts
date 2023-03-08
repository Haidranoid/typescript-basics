class Vehicle {
    private color: string;

    constructor(color: string) {
        this.color = color;
    }

    protected honk(): void {
        console.log('beep')
    }
}

class Car extends Vehicle {
    private wheels: number;

    constructor(color: string, wheels: number) {
        super(color);
        this.wheels = wheels;
    }

    private drive(): void {
        console.log('vroom')
    }

    public startDrivingProcess(): void {
        this.drive();
        this.honk();
    }
}

const car = new Car('orange',4);
car.startDrivingProcess();