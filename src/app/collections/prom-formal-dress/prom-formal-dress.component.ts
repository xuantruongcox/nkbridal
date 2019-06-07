import { ApiServiceService } from './../../services/api-service.service';
import { Component, OnInit } from '@angular/core';
import { Info } from '../info-property';
import { ListService } from 'src/app/list.service';

@Component({
  selector: 'app-prom-formal-dress',
  templateUrl: './prom-formal-dress.component.html',
  styleUrls: ['./prom-formal-dress.component.scss']
})
export class PromFormalDressComponent implements OnInit {
  route = 'formal';
  formalQuickView: Info;
  idFormal;
  title = "QUICK VIEW"
  lists: Info[];
  thumbImg;

  constructor(private service: ListService, private apiService: ApiServiceService) { }

  ngOnInit() {
    this.getInfoFormal();
  }


  getInfoFormal() {
    this.apiService.getAllInfo(this.route)
      .subscribe(res => {
        this.lists = res;
      })
  }

  openQuickView(id) {
    this.apiService.getInfo(id, this.route)
      .subscribe(res => {
        this.formalQuickView = res;
        console.log(res);
      })
    this.apiService.getThumb(id)
      .subscribe(res => this.thumbImg = res)
  }

  /*======/.FORMAL ======*/
}
