import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './page/page.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { PostComponent } from './post/post.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { GaleryComponent } from './galery/galery.component';
import { AccountComponent } from './account/account.component';
import { FaqComponent } from './faq/faq.component';

const routes: Routes = [
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"pg/:slug",component:PageComponent},
  {path:"blog/:cat/:page",component:BlogComponent},
  {path:"blog/:cat",component:BlogComponent},
  {path:"pt/:slug",component:PostComponent},
  {path:"galery",component:GaleryComponent},
  {path:"ecommerce/:genre/:page",component:EcommerceComponent},
  {path:"ecommerce/:genre",component:EcommerceComponent},
  {path:"ecommerce",component:EcommerceComponent},
  {path:"cart",component:CartComponent},
  {path:"checkout",component:CheckoutComponent},
  {path:"faq", component:FaqComponent},
  {path:"contact",component:ContactComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"account",component:AccountComponent},
  {path:"**", redirectTo:"home"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
