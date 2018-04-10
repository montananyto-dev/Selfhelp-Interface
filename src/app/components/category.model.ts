import { Component } from '@angular/core';

import { Option } from './option.model';

export class Category {
    
    name: string;
    options: Option[] = [];

    constructor(name) {
        this.name = name;
    }

    addOption(optionName: string) : Category {
        this.options.push(new Option(optionName));
        return this;
    }   
}