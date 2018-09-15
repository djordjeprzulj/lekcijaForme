import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

export interface Language {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-model-driven',
  templateUrl: './model-driven.component.html',
  styleUrls: ['./model-driven.component.css']
})
export class ModelDrivenComponent implements OnInit {

  form: FormGroup;

  languages = [
    {value:"EN", viewValue: "English"},
    {value:"SR", viewValue: "Srpski"},
    {value:"IT", viewValue: "Italiano"}    
  ];

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormGroup({
        firstName: new FormControl(),
        lastName: new FormControl()
      }),
      email: new FormControl(),
      password: new FormControl(),
      language: new FormControl()
    });
  }
}