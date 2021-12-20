
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {
  products: Product[] = [];
  displayedColumns = ['id', 'name', 'price']

  constructor(private produtoService: ProductService) { }

  ngOnInit(): void {
    this.produtoService.read().subscribe(products =>{
      this.products = products;
      console.log(products)
    });
  }

}
