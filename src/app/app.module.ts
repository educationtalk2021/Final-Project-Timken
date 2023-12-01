import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { TestformComponent } from './testform/testform.component';
import { FormsModule } from '@angular/forms';
import { Test1Component } from './test1/test1.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TestformComponent,
    Test1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
