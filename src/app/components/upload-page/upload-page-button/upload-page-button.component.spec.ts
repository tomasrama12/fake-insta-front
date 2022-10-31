import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadPageButtonComponent } from './upload-page-button.component';

describe('UploadPageButtonComponent', () => {
  let component: UploadPageButtonComponent;
  let fixture: ComponentFixture<UploadPageButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadPageButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadPageButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
