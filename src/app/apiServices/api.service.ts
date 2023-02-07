import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
private baseUrl = 'https://api.alfaorigin.com/';

  constructor(private http: HttpClient) { }

public postContact(formData: FormData){
  const url = `${this.baseUrl}api/postContact`;
  return this.http.post(url, formData);
}

public postRequestQuote(formData: FormData){
  const url = `${this.baseUrl}api/postRequestQuote`;
  return this.http.post(url, formData);
}

public postFeedback(formData: FormData){
  const url = `${this.baseUrl}api/postFeedback`;
  return this.http.post(url, formData);
}
}
