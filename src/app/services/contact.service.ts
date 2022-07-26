import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { MyContact } from '../modles/myContact';
import { MyGroup } from '../modles/myGroup';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private basUrl: string = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  // get all contact data

  public getAllContacts(): Observable<MyContact> {
    // let dataUrl: string = `$http://localhost:3000/contacts`
    let dataUrl: string = `${this.basUrl}/contacts`;
    return this.http.get<MyContact>(dataUrl).pipe(catchError(this.handleError));
  }

  // get single contact data

  public getContacts(contactId: string): Observable<MyContact> {
    let dataUrl: string = `${this.basUrl}/contacts/${contactId}`;
    return this.http.get<MyContact>(dataUrl).pipe(catchError(this.handleError));
  }

  // creat contacts

  public createContacts(contact: MyContact): Observable<MyContact> {
    let dataUrl: string = `${this.basUrl}/contacts`;
    return this.http.post<MyContact>(dataUrl,contact).pipe(catchError(this.handleError));
  }

  // update contact

  public updateContacts(contact: MyContact, contactId: string): Observable<MyContact> {
    let dataUrl: string = `${this.basUrl}/contacts/${contactId}`;
    return this.http.put<MyContact>(dataUrl,contact).pipe(catchError(this.handleError));
  }

  // Delete contact

  public deleteContacts( contactId: string): Observable<MyContact> {
    let dataUrl: string = `${this.basUrl}/contacts/${contactId}`;
    return this.http.delete<MyContact>(dataUrl).pipe(catchError(this.handleError));
  }

    // get all groups data

    public getAllgroups(): Observable<MyGroup> {
      
      let dataUrl: string = `${this.basUrl}/groups`;
      return this.http.get<MyGroup >(dataUrl).pipe(catchError(this.handleError));
    }

     // get single group data

  public getgroups(contact: MyContact): Observable<MyGroup> {
    let dataUrl: string = `${this.basUrl}/groups/${contact.grouId}`;
    return this.http.get<MyGroup>(dataUrl).pipe(catchError(this.handleError));
  }









  // error solve
  public handleError(error: HttpErrorResponse) {
    let errorMessage: string = '';
    if (error.error instanceof ErrorEvent) {
      // client error
      errorMessage = `Error :${error.error.message}`;
    } else {
      // server side error
      errorMessage = `status:${error.status}\n Message:${error.message}`;
    }
    return throwError(errorMessage);
  }
}
