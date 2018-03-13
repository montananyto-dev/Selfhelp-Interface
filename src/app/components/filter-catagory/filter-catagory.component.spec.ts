import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCatagoryComponent } from './filter-catagory.component';

describe('FilterCatagoryComponent', () => {
  let component: FilterCatagoryComponent;
  let fixture: ComponentFixture<FilterCatagoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterCatagoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterCatagoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
