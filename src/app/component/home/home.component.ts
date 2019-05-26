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
    }).carousel({
      touch: true // default
    });
  }

  constructor() {
  }
}

