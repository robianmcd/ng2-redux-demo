import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {FormsModule} from "@angular/forms";
import {StoreModule} from "@ngrx/store";
import {userReducer} from "./reducers/userReducer";
import {ReduxAppComponent} from "./reduxApp.component";
import {UserListComponent} from "./userList.component";
import {UserSearchComponent} from "./userSearch.component";
import {User} from "./models/user";
import {UserService} from "./user.service";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        StoreModule.provideStore({ users: userReducer })
    ],
    declarations: [ReduxAppComponent, UserListComponent, UserSearchComponent],
    providers: [UserService],
    bootstrap: [ReduxAppComponent]
})
class AppModule { }

export interface AppState {
    users: User[]
}

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);