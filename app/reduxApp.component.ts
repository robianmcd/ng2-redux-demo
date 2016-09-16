import {Component} from "@angular/core";

@Component({
    selector: 'redux-app',
    template: `
<div class="container">
    <h2>Redux User App</h2>
    <div class="col-sm-6">
        <user-list></user-list>
    </div>
    <div class="col-sm-6">
        <user-search></user-search>
    </div>
</div>
`
})
export class ReduxAppComponent {

}