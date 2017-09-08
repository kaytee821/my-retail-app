import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { ProductDetail } from 'app/models/product-detail.model';

@Injectable()
export class ProductDetailService {
  private urls = {
    product: 'mocks/item-data.json'
  }

  constructor(private http: Http) { }

  getProductData(prodId: number): Observable<ProductDetail> {
    return this.http.get(this.urls.product)
      .map((res) => {
        const results = res.json().CatalogEntryView[0];
        return results;
      }).catch((err: any) => {
          this.handleError(err);
          return Observable.of({});
      });
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    return Promise.reject(error.message || error);
  }
}
