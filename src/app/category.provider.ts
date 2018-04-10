import { Injectable } from '@angular/core';

import { Category } from './components/category.model';

@Injectable()
export class CategoryProvider {


  private static inst: CategoryProvider = null;  
  
  allCategories: Category[] = [];

  private constructor() {
    this.allCategories.push( new Category("Condition")
                    .addOption("Sexual Health")
                    .addOption("Itches")
                    .addOption("Etc"));
    
    this.allCategories.push( new Category("Citizen Group").addOption("Child").addOption("Adult"));
  }

  public static getInst() : CategoryProvider {
      if(this.inst == null) {
          this.inst = new CategoryProvider();
      }
      return this.inst;
  }

  getAllCategories(): Category[]  {
    return this.allCategories;
  }

}
