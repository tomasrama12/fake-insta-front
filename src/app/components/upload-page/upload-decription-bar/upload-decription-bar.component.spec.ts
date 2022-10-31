import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadDecriptionBarComponent } from './upload-decription-bar.component';

describe('UploadDecriptionBarComponent', () => {
  let component: UploadDecriptionBarComponent;
  let fixture: ComponentFixture<UploadDecriptionBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadDecriptionBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadDecriptionBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
