import { Component, OnInit, Output, EventEmitter } from '@angular/core';

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

  private starsInput: number;
  private nameInput: string;

  @Output() filter: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.stars = Array(MAX_STARS).fill(MAX_STARS).map((value, index) => value - index);
  }

  public setStars(quantity?: number): void {
    if (quantity) this.starsInput = quantity;
    else this.starsInput = null;
    this.filterHotels(this.nameInput, this.starsInput);
  }

  public setName(name?: string): void {
    if (name) this.nameInput = name;
    else this.nameInput = null;
    this.filterHotels(this.nameInput, this.starsInput);
  }

  public filterHotels(name: string, stars: number) {
    const data = { name, stars };
    this.filter.emit(data);
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
