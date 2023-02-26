import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  postProducts(data:any){
    return this.http.post<any>('http://localhost:8383/product/addProduct',data);
  }

  getProducts(){
    return this.http.get<any>('http://localhost:8383/product/showProduct');
  }

  putProduct(data:any,id:number){
    return this.http.put<any>('http://localhost:8383/product/updateProduct/'+id,data);
  }

  destroyProduct(id:number){
    return this.http.delete<any>('http://localhost:8383/product/deleteProduct/'+id);
  }
}
