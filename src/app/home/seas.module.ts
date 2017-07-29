import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import {SeaListComponent} from './sea-list/sea-list.component';
import {SeaDetailComponent} from './sea-detail/sea-detail.component';
import { HomeComponent } from '../home/home.component';
// import { HolderComponent } from '../home/holder/holder.component';
import { VideosListComponent } from '../home/videos-list/videos-list.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../home/header/header.component';

import { SeaPhotoService } from './sea-photo.service';

import {SeaRoutingModule} from './seas-routing.module';
import { MouesDirective } from './moues.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SeaRoutingModule
  ],
  declarations: [
    SeaListComponent,
    SeaDetailComponent,
    HomeComponent,
    HeaderComponent,
    // HolderComponent,
    VideosListComponent,
    FooterComponent,
    MouesDirective
  ],
  providers: [ SeaPhotoService ]
})
export class SeasModule {}