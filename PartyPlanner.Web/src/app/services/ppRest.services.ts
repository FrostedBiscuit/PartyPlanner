import { GlobalConstants } from '../GlobalConstants';

import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient,HttpHeaders, HttpParams} from '@angular/common/http'
import { Info,Guest,Category,Item, Party } from '../party';



@Injectable()
export class ppRestService
{
    headers = new HttpHeaders().set('Content-Type', 'application/json');
    
    constructor(private httpClient: HttpClient){}   

    ///PARTY
    getParty(){
        return this.httpClient.get("/api/party") 
    }

    getPartyById(id: string){
        return this.httpClient.get("/api/party/"+id);
    }

    putParty(name: string){  
        
        const params = new HttpParams()
            .set('name',name);

        return this.httpClient.put("/api/party?name="+name, params);
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