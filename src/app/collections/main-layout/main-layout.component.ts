import { AwsServiceService } from './../../services/aws-service.service';
import { ApiServiceService } from './../../services/api-service.service';
import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Info } from '../info-property';
import * as AWS from 'aws-sdk';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  active = false;
  @Input() title;
  @Input() route;
  @Input() QuickView: Info;
  @Input() id;
  @Input() lists: Array<Info>[] = [];
  @Input() thumbImg;
  @Input() adminIsLoggedIn = false;
  @Input() fadeOut = false;
  @Input() p: number = 1;
  @Input() collection: any[];
  list: Array<Info> = [
    {
      id: 0,
      name: '',
      category: '',
      image: '/assets/img-process/loading.gif',
      price: 0,
      content: '',
      imgThumb: '/assets/img-process/loading.gif'

    }
  ];
  responsive: boolean = false;
  get;
  constructor(
    private httpClient: HttpClient,
    private apiService: ApiServiceService, private awsService: AwsServiceService) { }

  ngOnInit() {
    this.getInfo()
    /* Responsive image */
    this.get = document.getElementsByClassName('image-responsive')

  }

  loading = false;
  getInfo() {
    this.loading = true
    this.apiService.getAllInfo(this.route)
      .subscribe(res => {
        setTimeout(() => {
          this.loading = false;
          this.lists = res;
        }, 2000)
        this.collection = res;

      })
  }
  activeFeature(id, status) {
    if (status == 0) {
      status = 1;
    } else if (status == 1) {
      status = 0;
    }
    let _status = {
      "id": id,
      "featured": status
    };
    this.apiService.actiaveFeature(_status)
      .subscribe(res => {
        console.log(res);
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
