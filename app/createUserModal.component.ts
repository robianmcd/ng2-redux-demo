import {Component} from "@angular/core";
import {User} from "./models/user";

declare let faker;

@Component({
    selector: 'create-user-modal',
    styles: [`
.modal-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    opacity: .50;
    filter: alpha(opacity=50);
    z-index: 1000;
}

.modal-content {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 20px 0 #222;
  
  left: 50%;
  margin: -120px 0 0 -160px;
  padding: 10px;
  position: fixed;
  top: 50%;
  width: 320px;
  z-index: 1000;
}
`],
    template: `
<div *ngIf="show">
    <div class="modal-background" (click)="cancel()"></div>
    <div class="modal-content">
        <form (ngSubmit)="submit()">
            
            <div class="form-group">
              <label for="url">First Name</label>
              <input name="firstName" class="form-control" [(ngModel)]="firstName">
            </div>
            
            <div class="form-group">
              <label for="url">Last Name</label>
              <input name="lastName" class="form-control" [(ngModel)]="lastName">
            </div>
            
            <div class="form-group">
              <label for="url">Address</label>
              <input name="address" class="form-control" [(ngModel)]="address">
            </div>
            
            <div class="form-group">
              <label for="url">Email</label>
              <input name="email" class="form-control" [(ngModel)]="email">
            </div>
            
            <div class="pull-right">
              <button type="button" (click)="cancel()" class="btn btn-default">
                Cancel
              </button>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </div>
            
        </form>
    </div>
</div>
`
})
export class CreateUserModal {
    private firstName: string;
    private lastName: string;
    private address: string;
    private email: string;

    private show = false;
    private modalResultManager;

    constructor() {

    }

    open() {
        this.show = true;
        return new Promise<User>((resolve, reject) => this.modalResultManager = {resolve, reject});
    }

    submit() {
        let user = new User({
            id: faker.random.uuid(),
            firstName: this.firstName,
            lastName: this.lastName,
            address: this.address,
            email: this.email,
            avatar: faker.image.avatar()
        });
        this.modalResultManager.resolve(user);
        this.onClose();
    }

    cancel() {
        this.modalResultManager.reject();
        this.onClose();
    }

    onClose() {
        this.modalResultManager = undefined;
        this.show = false;
        this.firstName = '';
        this.lastName = '';
        this.address = '';
        this.email = '';
    }
}