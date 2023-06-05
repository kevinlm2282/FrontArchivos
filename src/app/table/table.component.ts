import { Component, OnInit, Output } from '@angular/core';
import { ProductGet } from '../models/productGet';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  public products:Array<ProductGet> = [];
  productList:Array<ProductGet> = [];
  constructor(private service:ServiceService) { }

  ngOnInit(): void {
    this.service.getProduct().subscribe(product => {
      this.products = product;
    })

    console.log(this.products.length)

    // this.products.forEach(pro =>{
    //   console.log(pro);
    //   const imageGet:any = this.service.getImage(pro.image).subscribe()
    //   const prooduct:ProductGet = {
    //     id: pro.id,
    //     name: pro.name,
    //     amount:pro.amount,
    //     price:pro.price,
    //     image: imageGet,
    //   }
    //   this.productList.push(prooduct);
    // });
    // console.log(this.productList);

  }

}
