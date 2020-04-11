import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PreloaderComponent } from "./components/layouts/preloader/preloader.component";
import { FooterComponent } from "./components/layouts/footer/footer.component";
import { HomeThreeComponent } from "./components/pages/home-three/home-three.component";
import { HeaderThreeComponent } from "./components/layouts/header-three/header-three.component";
import { OnepageNavbarComponent } from "./components/layouts/onepage-navbar/onepage-navbar.component";
import { AboutOneComponent } from "./components/pages/about-one/about-one.component";
import { AboutTwoComponent } from "./components/pages/about-two/about-two.component";
import { PreventionComponent } from "./components/pages/prevention/prevention.component";
import { SpreadComponent } from "./components/pages/spread/spread.component";
import { OutbreakComponent } from "./components/pages/outbreak/outbreak.component";
import { FaqComponent } from "./components/pages/faq/faq.component";
import { ContactComponent } from "./components/pages/contact/contact.component";
import { BlogOneComponent } from "./components/pages/blog-one/blog-one.component";
import { BlogTwoComponent } from "./components/pages/blog-two/blog-two.component";
import { BlogDetailsComponent } from "./components/pages/blog-details/blog-details.component";
import { ErrorComponent } from "./components/pages/error/error.component";

@NgModule({
    declarations: [
        AppComponent,
        PreloaderComponent,
        FooterComponent,
        HomeThreeComponent,
        HeaderThreeComponent,
        OnepageNavbarComponent,
        AboutOneComponent,
        AboutTwoComponent,
        PreventionComponent,
        SpreadComponent,
        OutbreakComponent,
        FaqComponent,
        ContactComponent,
        BlogOneComponent,
        BlogTwoComponent,
        BlogDetailsComponent,
        ErrorComponent
    ],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
