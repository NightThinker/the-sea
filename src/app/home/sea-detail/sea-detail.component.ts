import { Component, OnInit } from '@angular/core';
import {Seas} from '../seas.model';
import {SeaPhotoService} from '../sea-photo.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-sea-detail',
  templateUrl: './sea-detail.component.html',
  styleUrls: ['./sea-detail.component.css']
})
export class SeaDetailComponent implements OnInit {
  seas: Seas;
  id: number;

  constructor(private seaPhotoService: SeaPhotoService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    // this.route.params
    //   .subscribe(
    //     (params: Params) => {
    //       this.id = +params['id'];
    //       this.seas = this.seaPhotoService.getSea(this.id)
    //     }
    //   );
  }

}
