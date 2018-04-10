import { Component, OnInit } from '@angular/core';

import { CategoryProvider } from '../../category.provider';
import { Category } from '../category.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  service: CategoryProvider;
  categories: Category[];

  constructor() {
    this.service = CategoryProvider.getInst();
    this.service;
    this.categories = this.service.getAllCategories();
  }

  printAll() : boolean {
    console.log(this.service.allCategories);
    return false;
  }

  ngOnInit() {

  }

}
