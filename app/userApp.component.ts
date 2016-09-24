import {Component, ViewChild} from "@angular/core";
import {User} from "./models/user";
import {CreateUserModal} from "./createUserModal.component";

declare let faker;

@Component({
    selector: 'user-app',
    template: `
<div class="container">
    <h2>User App</h2>
    <button (click)="createUser()" class="btn btn-primary">Create User</button>
    <div>
        First Name: <input [(ngModel)]="firstNameSearch"> 
    </div>
    <user-search-results [users]="users" [firstNameSearch]="firstNameSearch"></user-search-results>
    <create-user-modal></create-user-modal>
</div>
`
})
export class UserAppComponent {
    users: User[] = [];
    firstNameSearch: string = '';

    @ViewChild(CreateUserModal)
    createUserModal: CreateUserModal;

    constructor() {
        for (let i = 0; i < 5; i++) {
            this.users.push(
                new User({
                    id: faker.random.uuid(),
                    firstName: faker.name.firstName(),
                    lastName: faker.name.lastName(),
                    address: faker.address.streetAddress(),
                    email: faker.internet.email(),
                    avatar: faker.image.avatar()
                })
            );
        }
    }

    createUser() {
        this.createUserModal.open()
            .then((user) => {
                this.users = [user, ...this.users];
            })
            .catch(() => {});
    }
}