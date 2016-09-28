import {Component} from "@angular/core";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {User} from "./models/user";
import {AppState} from "./main";
import {UserService} from "./user.service";

@Component({
    selector: 'user-list',
    template: `
<div>
    <h3>User List</h3>
    <button class="btn btn-primary" (click)="addUser()">Add User</button>
    <table class="table">
    <thead>
        <tr>
            <th>First Name</th> <th>Last Name</th> <th>Email</th>
        </tr>
    </thead>
    <tbody>
        <tr *ngFor="let user of users | async">
            <td>{{user.firstName}}</td>
            <td>{{user.lastName}}</td>
            <td>{{user.email}}</td>
        </tr>
    </tbody>
    </table>
</div>
`
})
export class UserListComponent {
    users: Observable<User[]>;

    constructor(private userService: UserService) {
        this.users = userService.getUsers();
    }

    addUser() {
        this.userService.addUser(User.fromMockData());
    }
}