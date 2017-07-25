import { Component, OnInit } from '@angular/core';
import {SeaPhotoService} from './sea-photo.service';
import {Seas} from './seas.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  seas: Seas[];

  constructor(private seasServeice: SeaPhotoService) { }

  ngOnInit() {
    this.seas = this.seasServeice.getSeas();
  }

}
