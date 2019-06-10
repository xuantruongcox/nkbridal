import { Footer } from './../../collections/info-property';
import { ApiServiceService } from './../../services/api-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  footer:Footer;
  constructor(private service: ApiServiceService) { }

  ngOnInit() {
    this.getFooter();
  }

  getFooter(){
    this.service.getFooter()
      .subscribe(res=>{
        this.footer = res[0];
      })
  }

}
