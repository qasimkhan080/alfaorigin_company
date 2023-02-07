import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../apiServices/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-quick-inquiry',
  templateUrl: './quick-inquiry.component.html',
  styleUrls: ['./quick-inquiry.component.scss']
})
export class QuickInquiryComponent implements OnInit {
contactForm: FormGroup | any;
requestQuoteForm: FormGroup | any;
feedbackForm: FormGroup | any;
submitted = false;
step: number = 1;
  constructor(private apiService: ApiService, private fb: FormBuilder, private router: Router ,private toastr: ToastrService) { 
    this.step = this.router.getCurrentNavigation()?.extras?.state?.id?this.router.getCurrentNavigation()?.extras?.state?.id:this.step;
  }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name:[null, [Validators.required]],
      phone:[null, [Validators.required]],
      email:[null, [Validators.required, Validators.email]],
      message:[null, [Validators.required]]
    })
    this.requestQuoteForm = this.fb.group({
      name:[null, [Validators.required]],
      service:[null, [Validators.required]],
      organization:[null, [Validators.required]],
      email:[null, [Validators.required, Validators.email]],
      budget:[null, [Validators.required]],
      techInfo:[null, [Validators.required]]
    })
    this.feedbackForm = this.fb.group({
      name:[null, [Validators.required]],
      address:[null, [Validators.required]],
      city:[null, [Validators.required]],
      country:[null, [Validators.required]],
      subject:[null, [Validators.required]],
      phone:[null, [Validators.required]],
      email:[null, [Validators.required,Validators.email]],
      feedback:[null, [Validators.required]],
    })
  }
     get cf() {
       return this.contactForm.controls
     }
     get rf() { return this.requestQuoteForm.controls
     }
     get ff() { return this.feedbackForm.controls
     }
  changeStep(step:number){
    this.step = step;
  }
  submitContactForm(){
    if (this.contactForm.invalid) {
      return;
  }
    this.apiService.postContact(this.contactForm['value']).subscribe((data:any)=>{
      if(data['status']==true){
        this.toastr.success(data['message']);
        this.contactForm.reset();
      }else{
        this.toastr.error(data['message']);
      }
    })
  }

  submitRequestQuoteForm(){
    if (this.requestQuoteForm.invalid) {
      return;
  }
    this.apiService.postRequestQuote(this.requestQuoteForm['value']).subscribe((data:any)=>{
      if(data['status']==true){
        this.toastr.success(data['message']);
        this.requestQuoteForm.reset();
      }else{
        this.toastr.error(data['message']);
      }
    })
  }

  submitfeedbackForm(){
    if (this.feedbackForm.invalid) {
      return;
  }
    this.apiService.postFeedback(this.feedbackForm['value']).subscribe((data:any)=>{
      if(data['status']==true){
        this.toastr.success(data['message']);
        this.feedbackForm.reset();
      }else{
        this.toastr.error(data['message']);
      }
    }) 
  }
}
