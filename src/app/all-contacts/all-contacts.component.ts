import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';


@Component({
  selector: 'app-all-contacts',
  templateUrl: './all-contacts.component.html',
  styleUrls: ['./all-contacts.component.css']
})





export class AllContactsComponent implements OnInit  {

  allContacts:any=[]

 constructor(private api:ApiService){}
  ngOnInit(): void {
   this.api.getAllcontact().subscribe({
    next:(result)=>{
      console.log(result);

      this.allContacts=result
      
      
    },
    error:(err:any)=>{
      console.log(err.message);
      
    }
   })
  }

}
