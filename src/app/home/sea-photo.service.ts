import { Injectable } from '@angular/core';
import {Seas} from './seas.model';

@Injectable()
export class SeaPhotoService {
  private seas: Seas[] = [
    new Seas('../../assets/images/sea_palm_trees.jpg'),
    new Seas('../../assets/images/sea_surf_sky_shore.jpg'),
    new Seas('../../assets/images/sea_coast_foam_rocks.jpg'),
    new Seas('../../assets/images/sea_ocean_evening.jpg'),
  ];

  constructor() { }



  getSeas() {
    return this.seas.slice()
  }

}
