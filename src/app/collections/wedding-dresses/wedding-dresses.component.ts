import { ApiServiceService } from './../../services/api-service.service';
import { Info } from './../info-property';
import { Component, OnInit } from '@angular/core';
import { WEDDING } from '../mock-list';
import { ListService } from 'src/app/list.service';

@Component({
  selector: 'app-wedding-dresses',
  templateUrl: './wedding-dresses.component.html',
  styleUrls: ['./wedding-dresses.component.scss']
})
export class WeddingDressesComponent implements OnInit {
  route = 'wedding'
  quickView: Info;
  title = "QUICK VIEW"
  lists: Info[];
  thumbImg;
  constructor(private service: ListService, private apiService: ApiServiceService) { }

  ngOnInit() {
    this.getWedding();
  }
  /* getWedding(){
    this.service.getWedding()
      .subscribe(wedding => this.lists = wedding)
  } */
  getWedding() {
    this.apiService.getAllInfo(this.route)
      .subscribe(res => {
        this.lists = res;
      })
  }
  openQuickView(id) {
    this.apiService.getInfo(id, this.route)
      .subscribe(res => {
        this.quickView = res;
      })
    this.apiService.getThumb(id)
      .subscribe(res => this.thumbImg = res)
  }
}
