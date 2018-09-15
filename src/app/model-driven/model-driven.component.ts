import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
  email: FormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('[^ @]*@[^ @]*')
  ]);

  languages = [
    {value:"EN", viewValue: "English"},
    {value:"SR", viewValue: "Srpski"},
    {value:"IT", viewValue: "Italiano"}    
  ];

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormGroup({
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required)
      }),
      email: this.email,
      password: new FormControl('', [
        Validators.minLength(8),
        Validators.required
      ] ),
      language: new FormControl()
    });
  }
}