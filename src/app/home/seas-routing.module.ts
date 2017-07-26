import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {SeaListComponent} from './sea-list/sea-list.component';
import {SeaDetailComponent} from './sea-detail/sea-detail.component';
import {HomeComponent} from '../home/home.component';

const seasRoutes: Routes = [  
  { path: 'home',  component: SeaListComponent },
  { path: 'seas-list/:id', component: SeaDetailComponent }
]

@NgModule({
  imports: [
    RouterModule.forChild(seasRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SeaRoutingModule { }