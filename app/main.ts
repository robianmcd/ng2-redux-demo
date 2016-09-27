import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {FormsModule} from "@angular/forms";
import {UserSearchResultsComponent} from "./userSearchResults.component";
import {UserAppComponent} from "./userApp.component";
 import {CreateUserModal} from "./createUserModal.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [UserAppComponent, UserSearchResultsComponent, CreateUserModal],
    providers: [],
    bootstrap: [UserAppComponent]
})
class AppModule { }

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);