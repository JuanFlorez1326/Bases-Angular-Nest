import { Injectable } from "@angular/core";
import { Character } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {

    private _characters: Character[] = [
        {
          name: 'Goku',
          power: 15000
        },
        {
          name: 'Vegeta',
          power: 8500
        },
        {
          name: 'Gohan',
          power: 2500
        },
        {
          name: 'Trunks',
          power: 5000
        }
    ]

    get characters(): Character[] {
        return [...this._characters];
    }

    addCharacter( character: Character ) {
        this._characters.push( character );
    }
}