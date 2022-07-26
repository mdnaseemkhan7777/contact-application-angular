import { Component, OnInit } from '@angular/core';
import { MyContact } from '../modles/myContact';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.css']
})
export class ContactManagerComponent implements OnInit {
  public loading: boolean = false;
  // public contacts: MyContact[] = [];
  public errorMessage : string | null = null; 
  customerData!:any;
  contacts: MyContact = new MyContact();

  constructor(private contact:ContactService) { }

  ngOnInit(): void {
    this.loading= true;
    this.contact.getAllContacts().subscribe((data:MyContact)=>{
      this.contacts = data;
      this.loading = false;
    },(error)=>{
      this.errorMessage = error;
      this.loading = false;
    })

  }

}
