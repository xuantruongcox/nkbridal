import { Component, OnInit } from '@angular/core';
import { WEDDING } from '../mock-list';

@Component({
  selector: 'app-wedding-dresses',
  templateUrl: './wedding-dresses.component.html',
  styleUrls: ['./wedding-dresses.component.scss']
})
export class WeddingDressesComponent implements OnInit {
  title="QUICK VIEW"
  lists = WEDDING;
  constructor() { }

  ngOnInit() {
  }

}
