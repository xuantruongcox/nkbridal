import { ApiServiceService } from './../../services/api-service.service';
import { Component, OnInit, Input } from '@angular/core';
import { Info } from '../info-property';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  @Input() title;
  @Input() route;
  @Input() QuickView: Info;
  @Input() id;
  @Input() lists: Info[];
  @Input() thumbImg;
  @Input() adminIsLoggedIn = false;
  @Input() fadeOut = false;
  @Input() p: number = 1;
  @Input() collection: any[];
  constructor(private apiService: ApiServiceService) { }

  ngOnInit() {
  }

  getInfo() {

    this.apiService.getAllInfo(this.route)
      .subscribe(res => {
        this.lists = res;
        this.collection = res;
      })
  }

  deleteProduct(id: number) {

    this.apiService.deleteProduct(id)
      .subscribe(res => {
        this.apiService.deleteThumbnail(res)
          .subscribe(resThumb => {

            console.log(resThumb);
          })
          return this.getInfo();
      })
  }

  openQuickView(id) {
    this.apiService.getInfo(id, this.route)
      .subscribe(res => {
        this.QuickView = res;
        console.log(res);
      })
    this.apiService.getThumb(id)
      .subscribe(res => this.thumbImg = res)
  }
}
