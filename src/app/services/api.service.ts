import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContactSchema } from 'src/model/contactSchema';

@Injectable({
  providedIn: 'root'
})

// rxjs is a library 
// it is an extension for javascript
// it handles one or more api's at a time 
// rxjs---Reactive Extension for JavaScript
export class ApiService {

  BASE_URL='http://localhost:3000'

  constructor(private http:HttpClient) { }


handleError(error:HttpErrorResponse){

  let errorMsg:string=''
  
  if (error.error){
    // client
    errorMsg=`Error:${error.message}`
  }
  else{
    errorMsg=`status:${error.status}
    Error:${error.message}`
  
  }


}
  

  getAllContact(){

    // api call http://localhost:3000/contacts req:get

   return this.http.get(`${this.BASE_URL}/contacts`)


  }

viewContact(id:any){

  // api call to view contact

  // api call http://localhost:3000/contacts/id req:get
return  this.http.get(`${this.BASE_URL}/contacts/${id}`)
}

//to get group 
getGroup(id:any){
 return this.http.get(`${this.BASE_URL}/groups/${id}`)
}

// get api group
getGroups(){
 return this.http.get(`${this.BASE_URL}/groups`)
}

// add contact  post
addContact(contact:ContactSchema){
 return this.http.post(`${this.BASE_URL}/contacts`,contact)

}

// delete contact
deleteContact(id:any){
  // api call to server

return this.http.delete(`${this.BASE_URL}/contacts/${id}`)
}

// edit contact
editContact(id:any,body:ContactSchema){

return this.http.put(`${this.BASE_URL}/contacts/${id}`,body)

}

}
