import {Component} from 'angular2/core';
import {Hero} from './hero';

@Component({
  selector: 'data-co-deck-manager',
  template: `
  <div>
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name"/>
    </div>
  </div>
`,
inputs: ['hero']
})
export class DeckManagerComponent {
  public hero: Hero;
}
