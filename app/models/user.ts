declare let faker;

export class User {
    public id: string;
    public firstName : string;
    public lastName : string;
    public email : string;
    public address : string;
    public avatar : string;

    constructor({id, firstName, lastName, email, address, avatar})
    {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.address = address;
        this.avatar = avatar;
    }

    static fromMockData(): User {
        return new User({
            id: faker.random.uuid(),
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            address: faker.address.streetAddress(),
            email: faker.internet.email(),
            avatar: faker.image.avatar()
        })
    }
}