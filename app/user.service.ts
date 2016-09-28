import {User} from "./models/user";
import {BehaviorSubject} from "rxjs/BehaviorSubject"

export class UserService {
    private users$ = new BehaviorSubject<User[]>([]);

    addUser(user) {
        let users = [user, ...this.users$.getValue()];
        this.users$.next(users);
    }

    removeUser(user) {
        let users = this.users$.getValue().filter(u => u !== user);
        this.users$.next(users);
    }

    getUsers() {
        return this.users$.asObservable();
    }


}