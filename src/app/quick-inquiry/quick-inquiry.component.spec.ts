import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickInquiryComponent } from './quick-inquiry.component';

describe('QuickInquiryComponent', () => {
  let component: QuickInquiryComponent;
  let fixture: ComponentFixture<QuickInquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickInquiryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickInquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
