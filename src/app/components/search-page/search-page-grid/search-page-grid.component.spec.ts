import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPageGridComponent } from './search-page-grid.component';

describe('SearchPageGridComponent', () => {
  let component: SearchPageGridComponent;
  let fixture: ComponentFixture<SearchPageGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPageGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchPageGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
