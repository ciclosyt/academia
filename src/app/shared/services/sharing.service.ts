import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SharingService {

  private baseUrl: string = environment.baseUrl;

  constructor() { }

  dowloadFile(){
    const pdfDownload = document.createElement('a');
    pdfDownload.href = `${this.baseUrl}/assets/pdf/servicios.pdf`;
    pdfDownload.download = 'academy-services.pdf';
    pdfDownload.click();

  }

  sendMessage(){
    const whatsapp = document.createElement('a');
    whatsapp.href = `https://api.whatsapp.com/send?phone=722450759&text=Hola%20quiero%20mas%20informacion`;
    whatsapp.target = '_blank';
    whatsapp.click();
  }

}
