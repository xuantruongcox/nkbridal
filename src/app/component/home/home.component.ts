import { AuthService } from './../../auth/auth.service';
import { Info } from './../../collections/info-property';
import { ApiServiceService } from './../../services/api-service.service';
import { SECTIONSLIDE } from './../../collections/mock-list';
import { SECTIONMODEL, SECTIONSTYLE } from 'src/app/collections/mock-list';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import 'bootstrap'
import { NguCarouselConfig } from '@ngu/carousel';
import { NguButton, CarouselInterval, Transfrom } from '@ngu/carousel/lib/ngu-carousel/ngu-carousel';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})



export class HomeComponent implements OnInit {

  sectionModels;
  sectionStyles;
  sectionSlides: Info[];
  sectionEnd;

  quickView: Info[];
  routeFormal = 'formal';
  thumbImg;
  ngOnInit() {
    this.getFormal();
    // ==================
    this.getShowSlide();
    // ==================
    this.getShowCategories();
    // ==================
    this.getEndHome();
  }
  constructor(private service: ApiServiceService,private adminControls: AuthService) {
  }
  getFormal() {
    this.service.getAllInfo(this.routeFormal)
      .subscribe(res => {
        this.sectionSlides = res;

      })
  }
  openQuickView(id) {
    this.service.getInfo(id, this.routeFormal)
      .subscribe(res => {
        this.quickView = res;
      })
    this.service.getThumb(id)
      .subscribe(res => this.thumbImg = res)
  }
  /*  */

  // Show Product
  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: "#next",
    prevArrow: "#prev",
    dots: true,
    infinite: false,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      }
    },{
      breakpoint: 995,
      settings:{
        slidesToShow: 2,
        slidesToScroll: 1,
        dots:false,
      }
    },{
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },{
      breapoint: 1600,
      settings:{
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    }]

  };
  // Head Slide
  getShowSlide(){
    this.service.getSlideInfo()
      .subscribe(res=>{
        this.sectionModels = res;
      })
  }
  adminSlideControl;
  // Show Categories
  getShowCategories(){
    this.service.getCategoriesShow()
      .subscribe(res=>{
        this.sectionStyles = res;
      })
  }
  // Footer
  getEndHome(){
    this.service.getEndHome()
      .subscribe(res=>{
        this.sectionEnd = res[0]
      })
  }
}

