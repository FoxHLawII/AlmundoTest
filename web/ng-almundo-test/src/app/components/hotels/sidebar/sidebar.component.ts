import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public stars: number[];
  public showAllFilters = true;
  public showByName = true;
  public showByStars = true;

  constructor() { }

  ngOnInit() {
    this.stars = Array(MAX_STARS).fill(MAX_STARS).map((value, index) => value - index);
  }

  public getStars(quantity: number): any {
    return Array(quantity).fill(1);
  }

  public toggleShowAllFilters(): void {
    this.showAllFilters = !this.showAllFilters;
  }

  public toggleShowByName(): void {
    this.showByName = !this.showByName;
  }

  public toggleShowByStars(): void {
    this.showByStars = !this.showByStars;
  }

}

const MAX_STARS = 5;
