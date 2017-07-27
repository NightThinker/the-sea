import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appMoues]'
})
export class MouesDirective {

  constructor() { }
    @HostBinding('style.transform') transform: string = 'scale(1)';
  @HostBinding('style.transition-duration') transformDelay = '0';
  @HostBinding('style.z-index') zIndex = '0'

  @HostListener('mouseenter') mpuseover(eventData: Event) {
    this.transform = 'scale(1.1)';
    this.transformDelay = '1s';
    this.zIndex ='12';
  }
  @HostListener('mouseleave') mpuseleave(eventData: Event) {
    this.transform = 'scale(1)' ;
  }

}
