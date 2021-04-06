import { GlobalConstants } from '../GlobalConstants';

import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Info,Guest,Category,Item } from '../party';



@Injectable()
export class ppRestService
{
    headers = new HttpHeaders().set('Content-Type', 'application/json');
    
    constructor(private httpClient: HttpClient){}   
    ///PARTY
    getParty(){
        return this.httpClient.get("/api/party") 
    }

    putParty(name: String){
        let body = { name: name };
        return this.httpClient.put("/api/party",body);
    }
    
    ///PARTY DETAILS
    getPartyDetails(partyId: String){
        console.log("Pride sm "+partyId);
        return this.httpClient.get("/api/PartyInfo/"+partyId);
    }
    
    postPartyDetails(partyId:String,partyInfo: Info){
        return this.httpClient.post("/api/PartyInfo/"+partyId,partyInfo,{ headers: this.headers})
    }

    ///GUESTS
    getGuestList(partyId: String){
        return this.httpClient.get("/api/Guest/"+partyId);
    }

    postGuest(partyId:String, guest: Guest){
        return this.httpClient.put("/api/Guest/"+partyId,guest,{ headers: this.headers})
    }

    deleteGuest(partyId:String, guestId:Number){
        return this.httpClient.delete("api/Guest/"+partyId+"/"+guestId)
    }


    ///CATEGORY
    putCategory(partyId: String,category:Category){
        return this.httpClient.put("/api/Category/"+partyId,category,{ headers: this.headers});
    }
    postCategory(partyId: String,category:Category){
        console.log(category)
        return this.httpClient.post("/api/Category/"+partyId,category,{ headers: this.headers});
    }

    getCategoryList(partyId: String){
        return this.httpClient.get("/api/Category/"+partyId);
    }

    deleteCategory(partyId:String,categoryId:Number){
        return this.httpClient.delete("api/Category/"+partyId+"/"+categoryId);
    }

    getCategoryById(partyId:String,categoryId:Number){
        return this.httpClient.get("/api/Category/"+partyId+"/"+categoryId);
    }
    
    
}