import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCategoryComponent } from './filter-category.component';

describe('FilterCatagoryComponent', () => {
  let component: FilterCategoryComponent;
  let fixture: ComponentFixture<FilterCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
