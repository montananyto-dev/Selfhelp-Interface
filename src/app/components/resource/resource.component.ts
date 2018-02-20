import {Component, OnInit} from '@angular/core';
import {ResourceService} from '../../../services/resource/resource.service';


@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css'],

})
export class ResourceComponent implements OnInit {

  constructor(private resource: ResourceService) {
  }

  resources: any;
  resourceJson;

  ngOnInit() {

    this.retrieveUserResources();
  }


  retrieveUserResources() {
    this.resource.getAllResources().subscribe(data => {
      this.resourceJson = data;
      this.resources = data;
    });
  }

}
