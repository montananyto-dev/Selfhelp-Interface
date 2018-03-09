import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()


export class ResourceService {

  constructor(private http: HttpClient) {}

  private apiResource = 'http://138.68.147.152:8080/api/res';

  getAllResources(): Observable<any> {
    return this.http.get(this.apiResource);
  }

}
