import { ActionReducer, Action } from '@ngrx/store';
import {User} from "../models/user";

declare let faker;

export const userReducer: ActionReducer<User[]> = (users: User[] = [], action: Action) => {
    switch (action.type) {
        case 'CREATE_USER':
            let newUser = new User({
                id: faker.random.uuid(),
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
                address: faker.address.streetAddress(),
                email: faker.internet.email(),
                avatar: faker.image.avatar()
            });
            return [...users, newUser];

        case 'DELETE_USER':
            return users.filter(user => user.id !== action.payload.id);

        default:
            return users;
    }
};