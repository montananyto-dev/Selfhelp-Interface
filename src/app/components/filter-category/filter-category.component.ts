import { Component, OnInit, Input } from '@angular/core';

import { Category } from '../category.model';
import { Option } from '../option.model';

@Component({
  selector: 'app-filter-category',
  templateUrl: './filter-category.component.html',
  styleUrls: ['./filter-category.component.css']
})
export class FilterCategoryComponent implements OnInit {

  @Input() category: Category;

  constructor() { }

  ngOnInit() {
  }

  check(option: Option) : void {
    option.checked = !option.checked;
  }
}
