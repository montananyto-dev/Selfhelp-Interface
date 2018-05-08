import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ResourceComponent } from './components/resource/resource.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';

import { FilterCategoryComponent } from './components/filter-category/filter-category.component';
import { SearchComponent } from './components/search/search.component';
import { SimpleSearchComponent } from './components/simple-search/simple-search.component';
import { ResourceItemComponent } from './components/resource-item/resource-item.component';

import { ResourceService } from '../services/resource/resource.service';

import { FilterCheckboxComponent } from './components/filter-checkbox/filter-checkbox.component';


const routes: Routes = [

  {
    path: '', component: AdminLoginComponent
  },
  {
    path: 'login', component: AdminLoginComponent
  },
  {
    path: 'home', component: ResourceComponent
  },
  {
    path: 'search', component: SearchComponent
  },
  {
    path: 'resourceitem', component: ResourceItemComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    ResourceComponent,
    AdminLoginComponent,
    FilterCategoryComponent,
    SearchComponent,
    SimpleSearchComponent,
    ResourceItemComponent,
    FilterCheckboxComponent

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
