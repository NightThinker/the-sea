import { Injectable } from '@angular/core';
import {Seas} from './seas.model';

@Injectable()
export class SeaPhotoService {
  private seas: Seas[] = [
    new Seas(
      'Horseshoe Bay, Bermuda',
      'Although one of the most popular beaches on the island, Horseshoe Bay has a hidden secret: Port Royal Cove (pictured), which has shallow water perfect for young kids and dramatic rock formations that complement wonderfully soft, pink sand. Nearby Spicelands Equestrian Centre even offers trail rides down to the private cove, which is located in part of South Shore Park in Southampton Parish.',
      '../../assets/images/sea_palm_trees.jpg'),
    new Seas(
      'Harbour Island, Bahamas',
      'Located off the northeast coast of Eleuthera Island and away from the buzz of other Bahamian beaches, families and couples alike can spend the day on pink sands only seeing a handful of other people. After basking in the sun and getting serenaded by the breeze rustling through the palm trees, visitors can pop into the town to roam down quaint Dunmore Street, dine on the fresh catch of the day at The Landing, and grab a sunset cocktail at Beyond the Reef.',
      '../../assets/images/sea_surf_sky_shore.jpg'),
    new Seas(
      'Trunk Bay, St. John, USVI',
      'Undeniably one of the most photographed beaches in the Caribbean, if not the world, Trunk Bay sits in the northwestern corner of the Virgin Islands National Park (it was donated to the park service by Laurence S. Rockefeller more than 50 years ago). Calm, clear water, and a 225-yard-long Underwater Trail for superb snorkeling are big draws, as are hiking trails up and into the surrounding greenery filled with the ruins of historic sugar cane plantations.',
      '../../assets/images/sea_coast_foam_rocks.jpg'),
    new Seas(
      'Lindquist Beach, St. Thomas',
      'Part of a protected 21-acre area called Smith Bay Park, this white-sand beach has shallow, calm turquoise water ideal for everyone in the family to enjoy a swim. After a dip, head to either the right or left side of the shore, where you can enjoy a packed picnic of conch chowder in the coconut grove or under the sea grape trees. Typically quiet during the week, the beach becomes livelier on weekends, as locals tend to throw small parties.',
      '../../assets/images/sea_ocean_evening.jpg'),
  ];

  constructor() { }



  getSeas() {
    return this.seas.slice()
  }

  // getSea(index: number) {
  //   return this.seas[index];
  // }

}
