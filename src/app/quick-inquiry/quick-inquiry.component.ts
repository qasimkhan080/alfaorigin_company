import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
step: number = 1;
  constructor(private apiService: ApiService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name:['', Validators.required],
      phone:[null, [Validators.required]],
      email:[null, [Validators.required]],
      message:[null, [Validators.required]]
    })
    this.requestQuoteForm = this.fb.group({
      name:[null, [Validators.required]],
      service:[null, [Validators.required]],
      organization:[null, [Validators.required]],
      email:[null, [Validators.required]],
      budget:[null, [Validators.required]],
      techInfo:[null, [Validators.required]]
    })
    this.feedbackForm = this.fb.group({
      name:[null, [Validators.required]],
      addressOne:[null, [Validators.required]],
      addressTwo:[null, [Validators.required]],
      city:[null, [Validators.required]],
      subject:[null, [Validators.required]],
      phone:[null, [Validators.required]],
      email:[null, [Validators.required]],
      feedback:[null, [Validators.required]],
    })
  }
  changeStep(step:number){
    this.step = step;
  }
  submitContactForm(){
    console.log(this.contactForm.value)
    this.apiService.postContact(this.contactForm['value']).subscribe((data)=>{
      alert("Contact data saved successfully");
      this.contactForm.value.reset();
    })
  }

  submitRequestQuoteForm(){
    this.apiService.postRequestQuote(this.requestQuoteForm['value']).subscribe((data)=>{
      alert("Request Quote data saved successfully");
      this.requestQuoteForm.reset();
    })
  }

  submitfeedbackForm(){
    this.apiService.postFeedback(this.feedbackForm['value']).subscribe((data)=>{
      alert("Feedback data saved successfully");
      this.feedbackForm.reset();
    }) 
  }
}
