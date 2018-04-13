import { Injectable } from '@angular/core';
import { ConditionService } from '../services/condition/condition.service';
import { Category } from './components/category.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CategoryProvider {


  private static inst: CategoryProvider = null;  
  
  allCategories: Category[] = [];
  private conditionServ: ConditionService;

  private constructor(private http: HttpClient) {
    this.conditionServ = new ConditionService(http);
    let conditionCat = new Category("Condition");
    this.addConditionOptions(conditionCat);
    this.allCategories.push(conditionCat);
    
    this.allCategories.push( new Category("Citizen Group")
                    .addOption("Child")
                    .addOption("Adult"));
  }

  private addConditionOptions(cat: Category) : void {
    this.conditionServ.getAllResources().subscribe(data => {
      for(let item of data) {
        cat.addOption(item.name);
      }
    });
  }

  public static getInst(http: HttpClient) : CategoryProvider {
      if(this.inst == null) {
          this.inst = new CategoryProvider(http);
      }
      return this.inst;
  }

  getAllCategories(): Category[]  {
    return this.allCategories;
  }

}
