import { Component } from '@angular/core';

export class Option {
    
    name: string;
    checked: boolean;

    constructor(name) {
        this.name = name;
        this.checked = false;
    }
}