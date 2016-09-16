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
}