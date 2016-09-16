import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {FormsModule} from "@angular/forms";
import {StoreModule} from "@ngrx/store";
import {userReducer} from "./reducers/userReducer";
import {ReduxAppComponent} from "./reduxApp.component";
import {UserListComponent} from "./userList.component";
import {UserSearchComponent} from "./userSearch.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        StoreModule.provideStore({ user: userReducer })
    ],
    declarations: [ReduxAppComponent, UserListComponent, UserSearchComponent],
    providers: [],
    bootstrap: [ReduxAppComponent]
})
class AppModule { }


const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);