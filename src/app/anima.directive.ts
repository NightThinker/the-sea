import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appAnima]'
})
export class AnimaDirective {

  constructor() { }

  @HostBinding('style.transform') transform: string = 'scale(1)';
  @HostBinding('style.transition-duration') transformDelay = '0'

  @HostListener('mouseenter') mpuseover(eventData: Event) {
    this.transform = 'scale(1.1)';
    this.transformDelay = '1s';
  }
  @HostListener('mouseleave') mpuseleave(eventData: Event) {
    this.transform = 'scale(1)' ;
  }

  // @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  //
  // @HostListener('mouseenter') mpuseover(eventData: Event) {
  //   this.backgroundColor = 'yellow';
  // }
  // @HostListener('mouseleave') mpuseleave(eventData: Event) {
  //   this.backgroundColor = 'transparent';
  // }

}
