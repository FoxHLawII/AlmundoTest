import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

import { Hotel } from '../../entities/hotel.entity';
import { HotelsService } from '../../services/hotels.service';
import { Filters } from '../../entities/filters.entity';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  public hotels: Hotel[];

  constructor(private hotelService: HotelsService) { }

  ngOnInit() {
    this.hotelService.getAll()
      .pipe(take(1)).subscribe((hotels: Hotel[]) => {
      this.hotels = hotels;
    });
  }

  public filterHotels(data: Filters): void {
    this.hotelService.getAllFiltered(data)
      .pipe(take(1)).subscribe((hotels: Hotel[]) => {
      this.hotels = hotels;
    });
  }

  get areResults(): boolean {
    return this.hotels && this.hotels.length !== 0;
  }

}
