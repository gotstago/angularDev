import {Component,View} from 'angular2/core';
//import {CardEngineAPI} from "./app/engine/cardTableUI";

@Component({
    selector: 'card-table',
    //template: '<h1>My Card Table</h1>'
    //templateUrl: 'app/card_table.component.html'
})
@View({
    //directives: [NgFor, FieldComponent],
    templateUrl: 'app/card_table.component.html'
})
export class CardTableComponent {

  public get title(): String {

        return "card table component"
  }

}
