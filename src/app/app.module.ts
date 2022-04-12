import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LineGraphComponent } from './LineGraph/line-graph/line-graph.component';

@NgModule({
  declarations: [
    AppComponent,
    LineGraphComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
