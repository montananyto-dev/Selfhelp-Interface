import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ResourceComponent } from './components/resource/resource.component';
import {ResourceService} from '../services/resource/resource.service';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



const routes: Routes=[

  {
    path:'',component:AdminLoginComponent
  },
  {
    path:'login',component:AdminLoginComponent
  },
  {
    path:'home',component:ResourceComponent
  }

]


@NgModule({
  declarations: [
    AppComponent,
    ResourceComponent,
    AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ResourceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
