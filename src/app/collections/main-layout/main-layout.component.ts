import { AwsServiceService } from './../../services/aws-service.service';
import { ApiServiceService } from './../../services/api-service.service';
import { Component, OnInit, Input } from '@angular/core';
import { Info } from '../info-property';
import * as AWS from 'aws-sdk';
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
  constructor(private apiService: ApiServiceService, private awsService: AwsServiceService) { }

  ngOnInit() {
    this.getInfo()
  }

  getInfo() {

    this.apiService.getAllInfo(this.route)
      .subscribe(res => {
        this.lists = res;
        this.collection = res;
      })
  }

  deleteProduct(id: number, albumName, delSingleFile) {
    // s3_Delete
    this.apiService.getThumb(id)
      .subscribe(res => {
        this.awsService.deleteFile(albumName, delSingleFile)
        setTimeout(() => {
          for (let i = 0; i < res.length; i++) {
            this.awsService.deleteFile(albumName, res[i].s3_image)
            console.log(res[i].s3_image)
          }
        })
        this.apiService.deleteProduct(id)
          .subscribe(res => {
            this.apiService.deleteThumbnail(res)
              .subscribe(resThumb => {
                return this.ngOnInit();
              })
          })
      })
    /* /.S3_DELETE */

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
