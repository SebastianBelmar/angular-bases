import { Component, Input , Output, EventEmitter} from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }]

  @Output()
  public onDeleteCharacter : EventEmitter<string> = new EventEmitter<string>();

  emitIndex(index : string | undefined) : void {
    // TODO: Emitir el ID del personaje
    this.onDeleteCharacter.emit(index);
  }
}
