import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {FormsModule} from "@angular/forms";
import {UserSearchResultsComponent} from "./userSearchResults.component";
import {UserAppComponent} from "./userApp.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [UserAppComponent, UserSearchResultsComponent],
    providers: [],
    bootstrap: [UserAppComponent]
})
class AppModule { }

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);