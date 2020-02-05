import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AudioService} from './audio.service'
import { AppComponent } from './app.component';
import { MyindexComponent } from './myindex/myindex.component';

import {NgxEchartsModule} from 'ngx-echarts'
@NgModule({
  declarations: [
    AppComponent,
    MyindexComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AudioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
