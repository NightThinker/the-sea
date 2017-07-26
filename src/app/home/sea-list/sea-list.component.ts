import {Component, Input, OnInit} from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {animate, group, keyframes, state, style, transition, trigger} from '@angular/animations';
import {Sea, SeaPhotoService} from "../sea-photo.service";
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-sea-list',
  templateUrl: './sea-list.component.html',
  styleUrls: ['./sea-list.component.css'],
  animations: [
    trigger('listSea', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        animate(1000, keyframes([
          style({
            transform: 'translateY(100px)',
            opacity: 0,
            offset: 0
          }),
          style({
            transform: 'translateY(50px)',
            opacity: 0.5,
            offset: 0.3
          }),
          style({
            transform: 'translateY(20px)',
            opacity: 1,
            offset: 0.8
          }),
          style({
            transform: 'translateY(0px)',
            opacity: 1,
            offset: 1
          })
        ]))
      ])
    ])
  ]
})
export class SeaListComponent implements OnInit {


  seas: Observable<Sea[]>;
  private selectedId: number;

  constructor(    private service: SeaPhotoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.seas = this.route.paramMap
      .switchMap((params: ParamMap) => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        return this.service.getSeas();
      });
  }

    isSelected(sea: Sea) { return sea.id === this.selectedId; }

  onSelect(sea: Sea) {
    this.router.navigate(['/seas-list', sea.id]);
  }



}
