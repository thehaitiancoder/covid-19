import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FooterComponent } from "./components/layouts/footer/footer.component";
import { HomeComponent } from "./components/pages/home/home.component";
import { HeaderComponent } from "./components/layouts/header/header.component";

@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        HomeComponent,
        HeaderComponent,
    ],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
