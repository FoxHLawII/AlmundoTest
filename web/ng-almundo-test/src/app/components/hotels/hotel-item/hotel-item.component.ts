import { Component, OnInit, Input } from '@angular/core';

import { Hotel } from '../../../entities/hotel.entity';

@Component({
  selector: 'app-hotel-item',
  templateUrl: './hotel-item.component.html',
  styleUrls: ['./hotel-item.component.css']
})
export class HotelItemComponent implements OnInit {

  @Input() hotel: Hotel;

  constructor() { }

  ngOnInit() {
  }

  public getStars(quantity: number): any {
    return Array(quantity).fill(1);
  }

}
