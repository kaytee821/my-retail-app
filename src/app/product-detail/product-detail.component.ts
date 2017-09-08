import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { ProductDetailService } from 'app/product-detail.service';
import { ProductDetail } from 'app/models/product-detail.model';
import { ProductImageComponent } from 'app/product-image/product-image.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: ProductDetail;
  
  productImageUrl: string;

  constructor(
    private productDetailService: ProductDetailService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.product = new ProductDetail();
    
    this.route.params
    .switchMap((params: Params) => this.productDetailService.getProductData(+params['id']))
    .subscribe(product => {
      this.product = product;
      this.productImageUrl = this.getPrimaryImageUrl();
    });

  }

  // We want grocery specific logic on this component so others can stay generic
  getPrimaryImageUrl(): string {
    if (!!this.product.Images) {
      return this.product.Images[0].PrimaryImage[0].image;
    }
  }

  getCustomerReviews(): Array<string> {
    if (!!this.product.CustomerReview) {
      return this.product.CustomerReview;
    }
  }
}
