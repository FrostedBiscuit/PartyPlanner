import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetPageComponent } from './budget-page/budget-page.component';
import { CategoryListPageComponent } from './category-list-page/category-list-page.component';
import { GuestListPageComponent } from './guest-list-page/guest-list-page.component';
import { ItemItemComponent } from './item-item/item-item.component';
import { ItemsListPageComponent } from './items-list-page/items-list-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PartyPageComponent } from './party-page/party-page.component';
import { PlacePageComponent } from './place-page/place-page.component';
import { SharePageComponent } from './share-page/share-page.component';
import { ShoppingItemComponent } from './shopping-item/shopping-item.component';
import { ShoppingListPageComponent } from './shopping-list-page/shopping-list-page.component';
import { CalculatePageComponent } from './calculate-page/calculate-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'budget', component: BudgetPageComponent },
  { path: 'party', component: PartyPageComponent },
  { path: 'guest', component: GuestListPageComponent },
  { path: 'items/:id', component: ItemsListPageComponent },
  { path: 'place', component: PlacePageComponent },
  { path: 'shoppingList', component: ShoppingListPageComponent},
  { path: 'categoryList', component: CategoryListPageComponent},
  { path: 'share', component: SharePageComponent},
  { path: 'calculate', component: CalculatePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }