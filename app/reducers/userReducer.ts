import { ActionReducer, Action } from '@ngrx/store';
import {User} from "../models/user";

export const userReducer: ActionReducer<User[]> = (users: User[] = [], action: Action) => {
    switch (action.type) {
        case 'CREATE_USER':
            return [...users, User.fromMockData()];

        case 'DELETE_USER':
            return users.filter(user => user.id !== action.payload.id);

        default:
            return users;
    }
};