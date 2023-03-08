import faker from "@faker-js/faker";
import {Mappable} from "./CustomMap";

export class User implements Mappable {
    private _name: string;
    location: { lat: number; lng: number };

    constructor() {
        this._name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        };
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    markerContent(): string {
        return `
          <div>
             <h3>User Name: ${this.name}</h3>
          </div>
        `;
    }
}