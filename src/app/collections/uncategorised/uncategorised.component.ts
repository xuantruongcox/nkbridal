import { ApiServiceService } from './../../services/api-service.service';
import { AuthService } from './../../auth/auth.service';
import { ListService } from 'src/app/list.service';
import { Component, OnInit } from '@angular/core';
import { Info } from '../info-property';

@Component({
  selector: 'app-uncategorised',
  templateUrl: './uncategorised.component.html',
  styleUrls: ['./uncategorised.component.scss']
})
export class UncategorisedComponent implements OnInit {
  route = 'uncategorised';
  uncategorisedQuickView: Info;
  idFormal;
  title = "Special Offers"
  lists: Info[];
  thumbImg;
  adminIsLoggedIn = false;
  fadeOut = false;
  p: number = 1;
  collection: any[];
  constructor(private service: ListService, private auth: AuthService, private apiService: ApiServiceService) {
    this.adminIsLoggedIn = this.auth.isLoggedInAdmin;
  }
  ngOnInit() {
    setTimeout(() => {
      this.getInfoUncategorised()
    },100)

  }

  deleteProduct(id: number) {
    this.apiService.deleteProduct(id)
      .subscribe(res => {
        this.apiService.deleteThumbnail(res)
          .subscribe(resThumb => {

            console.log(resThumb);

          })
        return this.getInfoUncategorised();
      })
  }

  getInfoUncategorised() {
    this.apiService.getAllInfo(this.route)
      .subscribe(res => {
        this.lists = res;
      })
  }

  openQuickView(id) {
    this.apiService.getInfo(id, this.route)
      .subscribe(res => {
        this.uncategorisedQuickView = res;
        console.log(res);
      })
    this.apiService.getThumb(id)
      .subscribe(res => this.thumbImg = res)
  }

  /*======/.FORMAL ======*/

}
