import { Component } from '@angular/core';
declare var jQuery: any;
declare var WOW: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularShop';
  
  ngOnInit(): void {
    (function ($) {
      $(document).ready(function(){
        new WOW().init();

        $('.slider').slick({
          autoplay: true,
          fade: true,
          autoplaySpeed: 4000,
          speed: 800,
          arrows: false,
          dots: false,
          pauseOnFocus: false,
          pauseOnHover: false
        });
      });
    })(jQuery);
  }
}
