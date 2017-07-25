import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  // @HostListener("window:scroll", [])
  // onWindowScroll() {
  //   let number = this.document.body.scrollTop;
  //   if (number > 100) {
  //     this.navIsFixed = true;
  //   } else if (this.navIsFixed && number < 10) {
  //     this.navIsFixed = false;
  //   }
  // }


//   $(function() {
//   $(window).scroll(function() {
//     var scroll = $(window).scrollTop();
//
//     if (scroll >= 20) {
//       $('.navigation').addClass('fixed');
//       $('header').css({
//         "border-bottom": "none",
//         "padding": "35px 0"
//       });
//
//     } else {
//       $('.navigation').removeClass('fixed');
//       $('header').css({
//         "border-bottom": "solid 1px rgba(255, 255, 255, 0.2)",
//         "padding": "50px 0"
//       });
//     }
//   });
// });


  // public isScrolled = false;
  //
  // @HostListener('window:scroll', ['$event'])
  // onWindowScroll($event) {
  //   const number = this.document.body.scrollTop;
  //   if (number > 150) {
  //     this.isScrolled = true;
  //   } else if (this.isScrolled && number < 10) {
  //     this.isScrolled = false;
  //   }
  //
  //   window.addEventListener('scroll', this.scroll, <any>this.eventOptions);
  //
  // }
}
