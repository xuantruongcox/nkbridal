import { ApiServiceService } from './../../../services/api-service.service';
import { Info } from './../../info-property';
import { Component, OnInit, Input, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit {
  @Input() info: Info;
  thumb;
  constructor(private route: ActivatedRoute,private service: ApiServiceService) { }

  ngOnInit() {
    this.getThumb();
  }

  getThumb() {
    const id_product = +this.route.snapshot.paramMap.get('id');
    this.service.getThumb(id_product)
      .subscribe(res => {
        this.thumb = res;
        
      })
  }

}
