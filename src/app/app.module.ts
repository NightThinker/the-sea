import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HolderComponent } from './holder/holder.component';
import { SeaListComponent } from './sea-list/sea-list.component';
import { VideosListComponent } from './videos-list/videos-list.component';
import { FooterComponent } from './footer/footer.component';
import {SeaService} from './sea.service';
import { AnimaDirective } from './anima.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HolderComponent,
    SeaListComponent,
    VideosListComponent,
    FooterComponent,
    AnimaDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [SeaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
