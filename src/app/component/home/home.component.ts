import { DragScrollModule, DragScrollComponent } from 'ngx-drag-scroll';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgImageSliderComponent } from 'ng-image-slider';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent {
  @ViewChild('nav', {read: DragScrollComponent})ds: DragScrollComponent;
  moveLeft(){
    this.ds.moveLeft();
  }
  moveRight(){
    this.ds.moveRight();
  }
}
