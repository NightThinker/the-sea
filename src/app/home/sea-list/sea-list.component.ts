import {Component, Input, OnInit} from '@angular/core';
import {animate, group, keyframes, state, style, transition, trigger} from '@angular/animations';
import {Seas} from "../seas.model";

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
  @Input() seas: Seas;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }



}
