
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

BASE_URL="http://localhost:3000"


constructor(private http:HttpClient){}

handleError(error:HttpErrorResponse){
let errMsg:string=''
if(error.error){
  errMsg=`Error:${error.message}`
}
else{
  errMsg=`status:${error.status}`
}
}



getAllcontact(){
 return this.http.get(`${this.BASE_URL}/contacts`)
}

// view contact

viewContact(id:any){
 return this.http.get(`${this.BASE_URL}/contacts/${id}`)
}

// to get group of particular id

Getgroup(id:any){
 return this.http.get(`${this.BASE_URL}/groups/${id}`)
}
 
}
