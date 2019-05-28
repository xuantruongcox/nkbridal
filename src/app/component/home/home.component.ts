import { DragScrollModule, DragScrollComponent } from 'ngx-drag-scroll';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgImageSliderComponent } from 'ng-image-slider';
import * as $ from 'jquery';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})



export class HomeComponent implements OnInit {

  lists = [
    {title: 'FORMAL/PROM',img:'https://cdn.shopify.com/s/files/1/0908/9320/files/PA162450_edited_540x.jpg?v=1542864753'},
    {title: 'WEDDING DRESS',img:'https://cdn.shopify.com/s/files/1/0908/9320/files/P8220187_FITTED_540x.jpg?v=1542865688'},
    {title: 'BRIDESMAID',img:'https://cdn.shopify.com/s/files/1/0908/9320/files/PA303297_540x.JPG?v=1542865804'},
  ]
  
  ngOnInit() {
   
    $('.carousel.carousel-multi-item.v-2 .carousel-item').each(function () {
      var next = $(this).next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));
      for (var i = 0; i < 3; i++) {
        next = next.next();
        if (!next.length) {
          next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
      }
    })
  }

  constructor() {
  }
}

