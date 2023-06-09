import { Component, OnInit, Output } from '@angular/core';
import { ProductGet } from '../models/productGet';
import { ProductResponse } from '../models/productResponse';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  public products:Array<ProductGet> = [];
  productResponse:ProductResponse;
  pageSize:number = 1;
  page:number = 1;
  totalPages:number;
  currentPage:number = 0;
  // dataPages:number = 3;
  pageSizeSelect:number = 5;
  @Output() lenght:number;


  constructor(private service:ServiceService) { }

  ngOnInit(): void {
    this.service.getProduct().subscribe(product => {
      // this.products = product;
    })
    // (numero de pagina, tamanho de la pagina, ordrnar por algun atributo, orden des asc)
    this.loadData(this.currentPage,this.pageSizeSelect)
  }
  // Se pasa como parametro la pagina para que se envie al backend
  loadData(page:number,pageSizeSel:number):void{
    // Se consume el servicio del metodo GET http://localhost/products?NroPagina&TamanhoPagina&ordenadoAtributo&Ordenacion
    this.service.getProductPagination(page,pageSizeSel ,"","desc").subscribe(datos =>{
      console.log(datos)
      this.products = datos.content;
      // console.log(datos.totalPages)
      this.totalPages = datos.totalPages;
    })
  }

  // Metodo para cambiar la pagina 
  onPageChange(event:number): void{
    // Se recive la nueva pagina y empieza desde el 1 y la paginacion desde backend empieza en 0 
    this.currentPage = event - 1;
    // Se muestra el numero de pagina seleccionada
    console.log(`El numero de pagina es: ${event}`);
    // Se vuelve a cargar la peticion de carga del servicio de GET 
    this.loadData(this.currentPage,this.pageSizeSelect)
  }

  // selectedValue(){
  //   console.log(this.pageSizeSelect)
  //   this.loadData(this.currentPage,this.pageSizeSelect)
  // }

  selectSizeElements(event:any){
    console.log(event)
    this.loadData(this.currentPage,event)
  }

}
