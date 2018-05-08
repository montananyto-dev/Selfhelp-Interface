import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()

export class ResourceService {


  private apiResource = 'http://138.68.147.152:8080/api/res';

  constructor(private http: HttpClient) {
  }

  getAllResources(): Observable<any>  {

    return this.http.get(this.apiResource);

  }
}

