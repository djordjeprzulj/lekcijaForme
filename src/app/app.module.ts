import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';

import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ModelDrivenComponent } from './model-driven/model-driven.component';
import { MatFormFieldModule, 
        MatOptionModule,
        MatSelectModule,
        MatInputModule,
        MatButtonModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    ModelDrivenComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule, 
    MatInputModule,
    FlexLayoutModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
