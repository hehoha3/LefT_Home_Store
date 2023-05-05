import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { StoreComponent } from './page/store/store.component';
import { ShareIdeasComponent } from './page/share-ideas/share-ideas.component';
import { AboutUsComponent } from './page/about-us/about-us.component';
import { CartComponent } from './page/cart/cart.component';
import { CollectionComponent } from './page/collection/collection.component';
import { AdminComponent } from './page/admin/admin.component';
import { AddComponent } from './page/admin/add/add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './page/login/login/login.component';
import { RegisterComponent } from './page/login/register/register.component';
import { UpdateComponent } from './page/admin/update/update.component';
import { ProductDetailsComponent } from './page/store/product-details/product-details.component';
import { CategoryComponent } from './page/store/category/category.component';
import { HeaderComponent } from './common/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StoreComponent,
    ShareIdeasComponent,
    AboutUsComponent,
    CartComponent,
    CollectionComponent,
    AdminComponent,
    AddComponent,
    LoginComponent,
    RegisterComponent,
    UpdateComponent,
    ProductDetailsComponent,
    CategoryComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
