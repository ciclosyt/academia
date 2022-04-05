import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Email } from '../interface/email.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient ) { }


  sendMail( contacto: Email ):Observable<Email>{

    return this.http.post<Email>(`${ this.baseUrl }/api/mail `, contacto)

  }


}
