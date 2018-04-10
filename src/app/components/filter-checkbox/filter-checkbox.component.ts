import { Component, OnInit, Input } from '@angular/core';

import { Option } from '../option.model';

@Component({
  selector: 'app-filter-checkbox',
  templateUrl: './filter-checkbox.component.html',
  styleUrls: ['./filter-checkbox.component.css']
})
export class FilterCheckboxComponent implements OnInit {

  @Input() option: Option;

  constructor() { }

  ngOnInit() {
  }

}
