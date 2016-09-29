import {Component} from "@angular/core";
import {User} from "./models/user";

@Component({
    selector: 'user-search-results',
    template: `
<div class="panel panel-info" *ngFor="let user of users">
    <div class="panel-heading"><strong>{{user.firstName}} {{user.lastName}}</strong></div>
    <div class="panel-body">
        <div class="col-sm-3">
            <img [src]="user.avatar" style="display: block; margin-left: auto; margin-right: auto;">
        </div>
        <div class="col-sm-9">
            <table class="table">
                <tr>
                    <td><strong>ID</strong></td>
                    <td>{{user.id}}</td>
                </tr>
                <tr>
                    <td><strong>Address</strong></td>
                    <td>{{user.address}}</td>
                </tr>
                <tr>
                    <td><strong>Email</strong></td>
                    <td>{{user.email}}</td>
                </tr>
            </table>
        </div>
    </div>
</div>
`
})
export class UserSearchResultsComponent {
    users: User[];

    constructor() {

    }

    filterUsers(users: User[], firstNameSearch: string) {
        return users.filter(user => user.firstName.includes(firstNameSearch));
    }
}