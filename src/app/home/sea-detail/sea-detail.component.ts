import { Component, HostBinding, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import {Sea,SeaPhotoService} from '../sea-photo.service';
import {slideInDownAnimation} from '../../animations';


@Component({
  selector: 'app-sea-detail',
  templateUrl: './sea-detail.component.html',
  styleUrls: ['./sea-detail.component.scss'],
  animations: [ slideInDownAnimation ]
})
export class SeaDetailComponent implements OnInit {

  // @HostBinding('@routeAnimation') routeAnimation = true;
  // @HostBinding('style.display')   display = 'block';
  // @HostBinding('style.position')  position = 'absolute';

  sea: Sea;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: SeaPhotoService
  ) {}

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.service.getSea(params.get('id')))
      .subscribe((sea: Sea) => this.sea = sea);
  }

  // gotoSeas() {
  //   let seaId = this.sea ? this.sea.id : null;
  //   // Pass along the hero id if available
  //   // so that the HeroList component can select that hero.
  //   // Include a junk 'foo' property for fun.
  //   this.router.navigate(['/test', { id: seaId, foo: 'foo' }]);
  // }

}
