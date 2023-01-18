import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../apiServices/api.service';

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
  constructor(private apiService: ApiService, private fb: FormBuilder, private router: Router) { 
    this.step = this.router.getCurrentNavigation()?.extras?.state?.id?this.router.getCurrentNavigation()?.extras?.state?.id:this.step;
  }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name:['', Validators.required],
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
  get g() { return this.contactForm.controls
     }
     get f() { return this.requestQuoteForm.controls
     }
     get h() { return this.feedbackForm.controls
     }
  changeStep(step:number){
    this.step = step;
  }
  submitContactForm(){
    this.submitted = true;
    if (this.contactForm.invalid) {
      return;
  }
  // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.contactForm.value, null, 4)
  // );


    this.apiService.postContact(this.contactForm['value']).subscribe((data:any)=>{
      if(data['status']==true){
        alert(data['message']);
        this.contactForm.reset();
      }else{
        alert(data['message']);
      }
    })
  }

  submitRequestQuoteForm(){
    this.submitted = true;
    if (this.requestQuoteForm.invalid) {
      return;
  }
  // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.requestQuoteForm.value, null, 4)
  // );
    this.apiService.postRequestQuote(this.requestQuoteForm['value']).subscribe((data:any)=>{
      if(data['status']==true){
        alert("Request Quote data saved successfully");
        this.requestQuoteForm.reset();
      }else{
        alert(data['message']);
      }
    })
  }

  submitfeedbackForm(){
    this.submitted = true;
    if (this.feedbackForm.invalid) {
      return;
  }
  //   alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.feedbackForm.value, null, 4)
  // );
    this.apiService.postFeedback(this.feedbackForm['value']).subscribe((data:any)=>{
      if(data['status']==true){
        alert("Feedback data saved successfully");
        this.feedbackForm.reset();
      }else{
        alert(data['message']);
      }
    }) 
  }
}
