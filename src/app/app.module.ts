import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {OrderDataComponent} from './components/order-data/order-data.component';
import {AboutComponent} from './components/about/about.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './components/home/home.component';
import {FormsModule} from '@angular/forms';
import {UserOrdersComponent} from './components/user/user-orders/user-orders.component';
import {UserComponent} from './components/user/user.component';
import {UserDetailsComponent} from './components/user/user-details/user-details.component';
import {UserEditInfoComponent} from './components/user/user-edit-info/user-edit-info.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderDataComponent,
    AboutComponent,
    HomeComponent,
    UserComponent,
    UserDetailsComponent,
    UserEditInfoComponent,
    UserOrdersComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
