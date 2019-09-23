import { ApiServiceService } from './../../../services/api-service.service';
import { Info } from './../../info-property';
import { Component, OnInit, Input, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


export interface FORM {
  id: number,
  id_product: number,
  image: string,
  s3_image: string
}

@Component({
  selector: 'view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit {
  @Input() info: Info;
  thumb: FORM[] = [
    {
      id: 0,
      id_product: 0,
      image: '/assets/img-process/loading.gif',
      s3_image: ''
    }
  ]
  get;
  constructor(private route: ActivatedRoute, private httpClient: HttpClient, private service: ApiServiceService) { }

  ngOnInit() {
    this.getThumb();

    // 
    this.get = document.getElementsByClassName('image-indicator')
  }

  getThumb() {
    const id_product = +this.route.snapshot.paramMap.get('id');
    this.service.getThumb(id_product)
      .subscribe(res => {
        setTimeout(() => {
          this.thumb = res;
          for (let t of this.thumb) {
            this.httpClient.get(t.image)
              .subscribe(res => {

              }, error => {
                if (error.status === 404) {
                  t.image = '/assets/img-process/404.png';
                }
                if (error.status === 403) {
                  t.image = '/assets/img-process/404.png';
                }
              })
          }
        }, 1000)
      })
  }

}
