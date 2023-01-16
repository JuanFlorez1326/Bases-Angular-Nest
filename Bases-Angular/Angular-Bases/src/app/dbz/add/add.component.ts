import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html'
})
export class AddComponent {

  constructor( private dbzService:DbzService ) { }

  @Input() newCharacter: Character = {
    name: '',
    power: 0
  }

  //@Output() onNewCharacter: EventEmitter<Character> = new EventEmitter();

  addCharacter() {
    if (this.newCharacter.name.trim().length === 0) { return };
    console.log(this.newCharacter);
    this.dbzService.addCharacter( this.newCharacter );
    //this.onNewCharacter.emit(this.newCharacter);
    this.newCharacter = { name: '', power: 0 };
  }
}