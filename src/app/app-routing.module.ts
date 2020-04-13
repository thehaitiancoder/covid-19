import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeThreeComponent } from "./components/pages/home-three/home-three.component";
import { AboutOneComponent } from "./components/pages/about-one/about-one.component";
import { PreventionComponent } from "./components/pages/prevention/prevention.component";
import { SpreadComponent } from "./components/pages/spread/spread.component";
import { OutbreakComponent } from "./components/pages/outbreak/outbreak.component";
import { FaqComponent } from "./components/pages/faq/faq.component";
import { BlogOneComponent } from "./components/pages/blog-one/blog-one.component";
import { BlogTwoComponent } from "./components/pages/blog-two/blog-two.component";
import { BlogDetailsComponent } from "./components/pages/blog-details/blog-details.component";
import { ContactComponent } from "./components/pages/contact/contact.component";
import { ErrorComponent } from "./components/pages/error/error.component";

const routes: Routes = [
    { path: "", component: HomeThreeComponent },
    { path: "home-three", component: HomeThreeComponent },
    { path: "about-one", component: AboutOneComponent },
    { path: "prevention", component: PreventionComponent },
    { path: "spread", component: SpreadComponent },
    { path: "outbreak", component: OutbreakComponent },
    { path: "faq", component: FaqComponent },
    { path: "blog-one", component: BlogOneComponent },
    { path: "blog-two", component: BlogTwoComponent },
    { path: "blog-details", component: BlogDetailsComponent },
    { path: "error", component: ErrorComponent },
    { path: "contact", component: ContactComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
