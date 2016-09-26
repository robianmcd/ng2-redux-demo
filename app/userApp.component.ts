import {Component} from "@angular/core";
import {User} from "./models/user";

@Component({
    selector: 'user-app',
    template: `
<div class="container">
    <h2>User App</h2>
    <div>
        First Name: <input [(ngModel)]="firstNameSearch"> 
    </div>
    <user-search-results [users]="users" [firstNameSearch]="firstNameSearch"></user-search-results>
</div>
`
})
export class UserAppComponent {
    users: User[] = [];
    firstNameSearch: string = '';

    constructor() {
        for (let i = 0; i < 10; i++) {
            this.users.push(User.fromMockData());
        }
    }
}