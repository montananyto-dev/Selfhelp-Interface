import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()


export class ResourceService {

  constructor(private http: HttpClient) {}

  private apiResource = 'https://maven-web-app-20180202153044642.azurewebsites.net/api/res';
  private apiResourceLatest = 'https://maven-web-app-20180208225755674.azurewebsites.net/api/res';



  getAllResources(): Observable<any> {
    return this.http.get(this.apiResourceLatest);
  }

}
