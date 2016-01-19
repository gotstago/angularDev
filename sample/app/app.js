System.register(['angular2/platform/browser', 'angular2/core', 'angular2/common', 'angular2/http', './app', './wikipedia-service', 'rxjs/add/operator/map', 'rxjs/add/operator/debounceTime', 'rxjs/add/operator/distinctUntilChanged', 'rxjs/add/operator/switchMap'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var browser_1, core_1, common_1, http_1, app_1, wikipedia_service_1;
    var App;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (app_1_1) {
                app_1 = app_1_1;
            },
            function (wikipedia_service_1_1) {
                wikipedia_service_1 = wikipedia_service_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (_4) {}],
        execute: function() {
            App = (function () {
                function App(wikipediaService) {
                    var _this = this;
                    this.wikipediaService = wikipediaService;
                    this.term = new common_1.Control();
                    this.items = this.term.valueChanges
                        .debounceTime(400)
                        .distinctUntilChanged()
                        .switchMap(function (term) { return _this.wikipediaService.search(term); });
                }
                App = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <div>\n      <h2>Wikipedia Search</h2>\n      <input type=\"text\" [ngFormControl]=\"term\"/>\n      <ul>\n        <li *ngFor=\"#item of items | async\">{{item}}</li>\n      </ul>\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [wikipedia_service_1.WikipediaService])
                ], App);
                return App;
            })();
            exports_1("App", App);
            browser_1.bootstrap(app_1.App, [wikipedia_service_1.WikipediaService, http_1.JSONP_PROVIDERS]).catch(function (err) { return console.error(err); });
        }
    }
});
//# sourceMappingURL=app.js.map