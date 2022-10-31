import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullSizeImageComponent } from './full-size-image.component';

describe('FullSizeImageComponent', () => {
  let component: FullSizeImageComponent;
  let fixture: ComponentFixture<FullSizeImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullSizeImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullSizeImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
