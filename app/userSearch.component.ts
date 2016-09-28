import {Component, ViewChild, ElementRef} from "@angular/core";
import {BehaviorSubject} from "rxjs/BehaviorSubject"
import {Observable} from "rxjs/Observable"
import {User} from "./models/user";
import {Store} from "@ngrx/store";
import 'rxjs/rx';
import {AppState} from "./main";
import {UserService} from "./user.service";

@Component({
    selector: 'user-search',
    template: `
<div>
    <h3>User Search</h3>
    <div>
        First Name: <input #firstName>
    </div>
    <div class="panel panel-info" *ngFor="let user of users | async">
        <div class="panel-heading">
            <strong>{{user.firstName}} {{user.lastName}}</strong>
            <div class="pull-right" (click)="removeUser(user)">X</div>
        </div>
        <div class="panel-body">
            <img [src]="user.avatar" style="display: block; margin-left: auto; margin-right: auto;">
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
export class UserSearchComponent {
    users: Observable<User[]>;

    constructor(private userService: UserService) {
        this.users = userService.getUsers();
    }

    removeUser(user: User) {
        this.userService.removeUser(user);
    }
}