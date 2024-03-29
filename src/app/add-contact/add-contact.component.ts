import { Component, OnInit } from '@angular/core';
import { ContactSchema } from 'src/model/contactSchema';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  contact:ContactSchema={}
groups:any=[]
  constructor(private api:ApiService,private addContactRouter:Router){}
  
  ngOnInit(): void {
    this.api.getGroups().subscribe({
      next:(Response:any)=>{
        console.log(Response);
        this.groups=Response
        
      },
      error:(err:any)=>{
        console.log(err.message);
        
      }
    })
    
  }

  // function for post
  addContact(contact:ContactSchema){
    // call api in service
    this.api.addContact(contact).subscribe({
      next:(response:any)=>{
        // data add into server
        console.log(response);
        // navigate to url
this.addContactRouter.navigateByUrl('')

        
      },
      error:(err:any)=>{
        console.log(err.message);
        
      }
    })

  }
  

}
