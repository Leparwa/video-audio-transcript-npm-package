import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranscriptHandlerModule } from 'alinkeo-transcript-npm-package';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TranscriptHandlerModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
