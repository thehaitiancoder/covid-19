import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeThreeComponent } from "./components/pages/home-three/home-three.component";
import { AboutOneComponent } from "./components/pages/about-one/about-one.component";
import { AboutTwoComponent } from "./components/pages/about-two/about-two.component";
import { PreventionComponent } from "./components/pages/prevention/prevention.component";
import { DoctorsComponent } from "./components/pages/doctors/doctors.component";
import { AppointmentComponent } from "./components/pages/appointment/appointment.component";
import { SpreadComponent } from "./components/pages/spread/spread.component";
import { OutbreakComponent } from "./components/pages/outbreak/outbreak.component";
import { ProductsComponent } from "./components/pages/products/products.component";
import { CartComponent } from "./components/pages/cart/cart.component";
import { CheckoutComponent } from "./components/pages/checkout/checkout.component";
import { ProductsDetailsComponent } from "./components/pages/products-details/products-details.component";
import { FaqComponent } from "./components/pages/faq/faq.component";
import { BlogOneComponent } from "./components/pages/blog-one/blog-one.component";
import { BlogTwoComponent } from "./components/pages/blog-two/blog-two.component";
import { BlogDetailsComponent } from "./components/pages/blog-details/blog-details.component";
import { ContactComponent } from "./components/pages/contact/contact.component";
import { ErrorComponent } from "./components/pages/error/error.component";
import { ComingSoonComponent } from "./components/pages/coming-soon/coming-soon.component";

const routes: Routes = [
    { path: "", component: HomeThreeComponent },
    { path: "home-three", component: HomeThreeComponent },
    { path: "about-one", component: AboutOneComponent },
    { path: "about-two", component: AboutTwoComponent },
    { path: "prevention", component: PreventionComponent },
    { path: "doctors", component: DoctorsComponent },
    { path: "appointment", component: AppointmentComponent },
    { path: "spread", component: SpreadComponent },
    { path: "outbreak", component: OutbreakComponent },
    { path: "products", component: ProductsComponent },
    { path: "cart", component: CartComponent },
    { path: "checkout", component: CheckoutComponent },
    { path: "products-details", component: ProductsDetailsComponent },
    { path: "faq", component: FaqComponent },
    { path: "blog-one", component: BlogOneComponent },
    { path: "blog-two", component: BlogTwoComponent },
    { path: "blog-details", component: BlogDetailsComponent },
    { path: "error", component: ErrorComponent },
    { path: "coming-soon", component: ComingSoonComponent },
    { path: "contact", component: ContactComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
