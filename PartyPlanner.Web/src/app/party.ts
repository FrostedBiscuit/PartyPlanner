import { ItemsListPageComponent } from "./items-list-page/items-list-page.component";

export class Party {
    categories: [];
    creationDate: Date;
    guests: [];
    id: string;
    info: Info;
}

export class Info{
    name: String;
    description: String;
    address:String;
    exactDirections:String;    
    dateFrom: Date;
    dateTo: Date;
    budget: Number;
}

export class GuestBody{
    id: String;
    guests: Guest[];
}

export class GuestList{
    guests: Guest[];
}

export class Guest{
    guestId: Number;
    name: String;
    surname: String;
    email: String;
    phone: String;
    vegan: boolean;
    vegetarian: boolean;//aka fegetalac
    nonDrinker: boolean;//verjetno pičkica
}

export class CategoryBody{
    id: String;
    categories: Category[];
}

export class Category{
    categoryId: Number;
    name: String;
    description: String;
    budgetPercentage: Number;
    proposedTotal: Number;
    items: Item[];
}

export class Item{
    itemId: Number;
    name: String;
    description: String;
    price: Number;
    quantity: Number;
}