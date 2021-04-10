import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'


import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PartyPageComponent } from './party-page/party-page.component';
import { BudgetPageComponent } from './budget-page/budget-page.component';
import { GuestListPageComponent } from './guest-list-page/guest-list-page.component';
import { GuestItemComponent } from './guest-item/guest-item.component';
import { ItemsListPageComponent } from './items-list-page/items-list-page.component';
import { ItemItemComponent } from './item-item/item-item.component';
import { PlacePageComponent } from './place-page/place-page.component';
import { ShoppingListPageComponent } from './shopping-list-page/shopping-list-page.component';
import { ShoppingItemComponent } from './shopping-item/shopping-item.component';

import { ppRestService }  from './services/ppRest.services';
import { CategoryItemComponent } from './category-item/category-item.component';
import { CategoryListPageComponent } from './category-list-page/category-list-page.component';
import { SharePageComponent } from './share-page/share-page.component'

import { QRCodeModule } from 'angularx-qrcode';
import { ZXingScannerModule } from '@zxing/ngx-scanner';



@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    LandingPageComponent,
    PartyPageComponent,
    BudgetPageComponent,
    GuestListPageComponent,
    GuestItemComponent,
    ItemsListPageComponent,
    ItemItemComponent,
    PlacePageComponent,
    ShoppingListPageComponent,
    ShoppingItemComponent,
    CategoryItemComponent,
    CategoryListPageComponent,
    SharePageComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserModule,
    HttpClientModule,
    QRCodeModule,
    ZXingScannerModule
    
   
  ],
  providers: [ppRestService],
  bootstrap: [AppComponent]
})

export class AppModule { }
