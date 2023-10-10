import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from './environment';

@Injectable({
  providedIn: 'root'
})
export class BucketService {

  constructor(private http: HttpClient) { }

  getBucketTypes(): Observable<String[]> {
    return this.http.get<String[]>(`${environment.apiUrl}/buckets`);
  }

  getBucketData(bucket: string, pivot: number | string): Observable<BucketData[]> {
    return this.http.get<BucketData[]>(`${environment.apiUrl}/buckets/${bucket}?pivot=${pivot}`);
  }
}

export interface BucketData {
  key: string
  over: BucketSide
  under: BucketSide
}

export interface BucketSide {
  average: number
  count: number
}
