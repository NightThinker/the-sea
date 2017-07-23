import {Sea} from './sea.model';
export class SeaService {
  private seas: Sea[] = [
    new Sea('test1', '../../assets/images/sea_water_waves_84378.jpg'),
    new Sea('test2', '../../assets/images/sea_ocean_coast_dogs.jpg'),
    new Sea('test3', '../../assets/images/sea_surf_foam.jpg'),
    new Sea('test4', '../../assets/images/sea_beach_stones_109960.jpg'),
    new Sea('test5', '../../assets/images/sea_stones_day.jpg'),
    new Sea('test6', '../../assets/images/sea_sunflowers_girl_waves_69951.jpg'),
    new Sea('test7', '../../assets/images/sea_sail_ship_clouds_95514.jpg'),
    new Sea('test8', '../../assets/images/sea_ocean_beach_rock_92633.jpg')
  ];

  getSeas() {
    return this.seas.slice();
  }
}
