import { Component, OnInit } from '@angular/core';
import {ResourceService} from '../../../services/resource/resource.service';

@Component({
  selector: 'app-resource-item',
  templateUrl: './resource-item.component.html',
  styleUrls: ['./resource-item.component.css']
})
export class ResourceItemComponent implements OnInit {

  name: String;
  shortDescription:String;
  resources:Object;

  constructor(private resource: ResourceService) {
  }

  ngOnInit() {
    this.resource.getAllResources().subscribe(data => {
      this.resources = data;
      this.name = data[0];
      this.shortDescription = data[1];


    });
  }



}
