import {User} from "./models/user";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

export class UserService {
    users: User[] = [];
}