import {Component} from "@angular/core";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {User} from "./models/user";

@Component({
    selector: 'user-list',
    template: `
<div>
    <h3>User List</h3>
    <button class="btn btn-primary" (click)="addUser()">Add User</button>
    <table class="table table-hover">
    <thead>
        <tr>
            <th>First Name</th> <th>Last Name</th> <th>Email</th>
        </tr>
    </thead>
    <tbody>
        <tr *ngFor="let user of (users | async)" (click)="deleteUser(user)">
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

    constructor(public store: Store) {
        this.users = store.select('user');
    }

    addUser() {
        this.store.dispatch({type: 'CREATE_USER'});
    }

    deleteUser(user: User) {
        this.store.dispatch({type: 'DELETE_USER', payload: {id: user.id}})
    }
}