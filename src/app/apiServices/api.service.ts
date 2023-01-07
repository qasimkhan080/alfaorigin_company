import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
private baseUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

public postContact(formData: FormData){
  const url = `${this.baseUrl}/postContact`;
  return this.http.post(url, formData);
}

public postRequestQuote(formData: FormData){
  const url = `${this.baseUrl}/postRequestQuote`;
  return this.http.post(url, formData);
}

public postFeedback(formData: FormData){
  const url = `${this.baseUrl}/postFeedback`;
  return this.http.post(url, formData);
}
}
