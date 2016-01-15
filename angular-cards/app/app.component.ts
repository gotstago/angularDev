import {Component,View} from 'angular2/core';
import {CardTableComponent} from "./card_table.component";

//import {CardEngineAPI} from "./app/engine/cardTableUI";

@Component({
    selector: 'my-app',
    //template: '<h1>My First Angular 2 Appy</h1>'
    //templateUrl: 'app/app.component.html'
})
@View({
    //directives: [NgFor, FieldComponent],
    templateUrl: 'app/app.component.html'
})
export class AppComponent {

  public get title(): String {

        return "app component"
    }

}
