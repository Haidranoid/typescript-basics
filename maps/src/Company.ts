import faker from "@faker-js/faker";
import {Mappable} from "./CustomMap";

export class Company implements Mappable {
    private _companyName: string;
    private _catchPhrase: string;
    location: { lat: number; lng: number };

    constructor() {
        this.companyName = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        };
    }

    get companyName(): string {
        return this._companyName;
    }

    set companyName(value: string) {
        this._companyName = value;
    }

    get catchPhrase(): string {
        return this._catchPhrase;
    }

    set catchPhrase(value: string) {
        this._catchPhrase = value;
    }

    markerContent(): string {
        return `
          <div>
             <h3>Company Name: ${this.companyName}</h3>
             <h5>Catch Phrase: ${this.catchPhrase}</h5>
          </div>
        `;
    }
}