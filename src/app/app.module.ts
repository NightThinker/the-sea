import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
// import { HeaderComponent } from './header/header.component';
// import { HolderComponent } from './home/holder/holder.component';
// import { SeaListComponent } from './home/sea-list/sea-list.component';
// import { VideosListComponent } from './home/videos-list/videos-list.component';
// import { FooterComponent } from './footer/footer.component';
import { AnimaDirective } from './anima.directive';
import { AboutUsComponent } from './about-us/about-us.component';
// import { HomeComponent } from './home/home.component';

import {AppRoutingModule} from './app-routing.module';
import {SeaPhotoService} from './home/sea-photo.service';
// import { SeaDetailComponent } from './home/sea-detail/sea-detail.component';
import {SeasModule} from './home/seas.module';
import { SeaComponent } from './sea/sea.component';
import { NavigationsComponent } from './navigations/navigations.component';


@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent,
    // HolderComponent,
    // SeaListComponent,
    // VideosListComponent,
    // FooterComponent,
    AnimaDirective,
    AboutUsComponent,
    SeaComponent,
    NavigationsComponent
    // HomeComponent
    // SeaDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SeasModule
  ],
  providers: [SeaPhotoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
