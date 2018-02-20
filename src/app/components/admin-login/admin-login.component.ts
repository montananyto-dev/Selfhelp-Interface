import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FormGroup, Validators, FormControl} from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import {RouterModule} from '@angular/router';



@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  adminLogin: FormGroup;
  adminLoginApi = 'https://maven-web-app-20180209152804678.azurewebsites.net/admin';


  constructor(private http: HttpClient, private formBuilder: FormBuilder, private router: RouterModule) {

    this.adminLogin = this.formBuilder.group({

      Username: this.formBuilder.control('', Validators.required),
      Password: this.formBuilder.control('', Validators.required)
    });
  }


  ngOnInit() {

  }

  onSubmit(dataForm) {

    const constUserName = <FormControl>this.adminLogin.get('Username').value;
    const constUserPassword = <FormControl>this.adminLogin.get('Password').value;

    let username = constUserName.toString();
    let password = constUserPassword.toString();
    this.login(username, password);


  }


  login = function (userName, password) {

    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Authorization', 'Basic ' + btoa(userName + ':' + password));
    // headers.append("Content-Type", "text/plain;charset=UTF-8");
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Access-Control-Allow-Origin', 'http://localhost:4200/');
    headers.append('Access-Control-Allow-Methods', '*');
    headers.append('Access-Control-Allow-Headers', 'Accept,Accept-Charset,Accept-Encoding,Accept-Language,Authorization,Connection,Content-Type,Cookie,DNT,Host,Keep-Alive,Origin,Referer,User-Agent,X-CSRF-Token,X-Requested-With');
    headers.append('Access-Control-Allow-Credentials', 'true');


    this.http.post(this.adminLoginApi,
      {
        headers: HttpHeaders,

      }).subscribe

    (data => {

      //print out the data return by the server
      console.log(data);

    }, err => {

      console.log(err);

    });

  };
}
