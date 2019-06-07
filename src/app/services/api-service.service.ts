import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const apiUrl = 'http://localhost:49160/api/';
const ProductImg = 'products/';
const thumbnailImg = 'thumbnail/';
const user = 'users/'
@Injectable({
  providedIn: 'root'
})

export class ApiServiceService {

  constructor(private http: HttpClient) { }
  /* THUMBNAILS API */
  addThumb(bodyParams): Observable<any>{
    return this.http.post<any>(apiUrl + thumbnailImg + 'add', bodyParams)
  }
  getThumb(id_product):Observable<any>{
    return this.http.get<any>(apiUrl + thumbnailImg + id_product);
  }
  /* /.THUMBNAILS API */
  /* ===================== */
  /* PRODUCTS API */
  addProducts(bodyParams){
    return this.http.post<any>(apiUrl + ProductImg + 'add', bodyParams)
  }
  getInfo(id: any,route: any):Observable<any>{
    return this.http.get<any>(apiUrl + 'products/' + route + '/' + id);
  }
  getAllInfo(route):Observable<any>{
    return this.http.get<any>(apiUrl + 'products/' + route);
  }
  /* /.PRODUCTS API */
  /* ===================== */
  /* SETTING API */
  getSetting():Observable<any>{
    return this.http.get<any>(apiUrl + 'setting');
  }
  /* /.SETTING API */
  /* ===================== */
}
