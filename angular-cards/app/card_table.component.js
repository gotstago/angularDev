System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var CardTableComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            //import {CardEngineAPI} from "./app/engine/cardTableUI";
            CardTableComponent = (function () {
                function CardTableComponent() {
                }
                Object.defineProperty(CardTableComponent.prototype, "title", {
                    get: function () {
                        return "card table component";
                    },
                    enumerable: true,
                    configurable: true
                });
                CardTableComponent = __decorate([
                    core_1.Component({
                        selector: 'card-table',
                    }),
                    core_1.View({
                        //directives: [NgFor, FieldComponent],
                        templateUrl: 'app/card_table.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], CardTableComponent);
                return CardTableComponent;
            })();
            exports_1("CardTableComponent", CardTableComponent);
        }
    }
});
//# sourceMappingURL=card_table.component.js.map