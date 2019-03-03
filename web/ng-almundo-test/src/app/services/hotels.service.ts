import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Hotel } from '../entities/hotel.entity';
import { Filters } from '../entities/filters.entity';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>('/hotels');
  }

  public getAllFiltered(filters: Filters): Observable<Hotel[]> {
    const data = {};
    if (filters.name) data['name'] = filters.name;
    if (filters.stars) data['stars'] = filters.stars.toString();
    const params = new HttpParams({ fromObject: data });
    return this.http.get<Hotel[]>('/hotels/filter', { params });
  }
}
