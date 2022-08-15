import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, DisplayComponent, SearchComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
