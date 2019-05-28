import { FORMAL } from '../mock-list';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prom-formal-dress',
  templateUrl: './prom-formal-dress.component.html',
  styleUrls: ['./prom-formal-dress.component.scss']
})
export class PromFormalDressComponent implements OnInit {
  title = "QUICK VIEW"
  lists = FORMAL;
  ngOnInit() {
   
  }
}
