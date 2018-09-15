import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  model: Signup = new Signup();
  @ViewChild('f') form: any;

  languages = [
    {value:"EN", viewValue: "English"},
    {value:"SR", viewValue: "Srpski"},
    {value:"IT", viewValue: "Italiano"}
  ];

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.form.valid) {
      console.log("Forma potvrđena.");
      this.form.reset();
    }
  }
}
