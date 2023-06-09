import { ProductGet } from "./productGet";

export interface ProductResponse{
    content:Array<ProductGet>;
    pageNo:number;
    pageSize:number;
    totalElements:number;
    totalPages:number;
    last:Boolean;
}