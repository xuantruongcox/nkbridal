import { ApiServiceService } from './../../services/api-service.service';
import { ListService } from './../../list.service';
import { Info } from './../info-property';
import { Component, OnInit } from '@angular/core';
import { BRIDESMAIDS } from '../mock-list';

@Component({
  selector: 'app-bridesmaid-dress',
  templateUrl: './bridesmaid-dress.component.html',
  styleUrls: ['./bridesmaid-dress.component.scss']
})
export class BridesmaidDressComponent implements OnInit {
  route = 'bridesmaid'
  quickView: Info;
  title = "QUICK VIEW";
  lists: Info[];
  thumbImg;
  constructor(private listService: ListService, private apiService: ApiServiceService) { }

  ngOnInit() {
    this.getBride();
  }

  /* getBride(){
    this.listService.getBride()
      .subscribe(bride => this.lists = bride)
  } */
  getBride() {
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
