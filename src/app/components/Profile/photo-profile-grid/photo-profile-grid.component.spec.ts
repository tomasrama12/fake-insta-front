import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoProfileGridComponent } from './photo-profile-grid.component';

describe('PhotoProfileGridComponent', () => {
  let component: PhotoProfileGridComponent;
  let fixture: ComponentFixture<PhotoProfileGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoProfileGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoProfileGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
