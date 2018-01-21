import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MediaService } from './services/media.service';
import { ListMediaComponent } from './list-media/list-media.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListMediaComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [MediaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
