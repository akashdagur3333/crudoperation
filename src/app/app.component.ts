import { Component, OnInit, ViewChild,AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { ProductService } from './Services/product.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
//   title = 'crud';

//   displayedColumns: string[] = ['id', 'productName', 'category', 'price','comment','date','freshness','action'];
//   dataSource!: MatTableDataSource<any>;

//   @ViewChild(MatPaginator) paginator!: MatPaginator;
//   @ViewChild(MatSort) sort!: MatSort;



// constructor(private dialog:MatDialog, private api:ProductService){

// }

// editProduct(row:any){
//   this.dialog.open(DialogComponent,{
//     width:'30%',
//     data:row
//   }).afterClosed().subscribe(val=>{
//     if(val==='update'){
//       this.getAllProducts();
//     }
//   })
// }

//   openDialog() {
//     this.dialog.open(DialogComponent, {
//       width:'30%'
//       // data: {
//       //   animal: 'panda',
//       // },
//     }).afterClosed().subscribe(val=>
//       {
//         if(val==='save'){
//           this.getAllProducts();
//         }
//       })
//   }

//   getAllProducts(){
//     this.api.getProducts().subscribe({
//       next:(res)=>
//       {
//         this.dataSource= new MatTableDataSource(res);
//         this.dataSource.paginator = this.paginator;
//         this.dataSource.sort = this.sort;
//         // console.log(res);
//        } ,
//     error:(err)=>
//   {
//     alert("error")
//   }

//     })
//   }

//   applyFilter(event: Event) {
//     const filterValue = (event.target as HTMLInputElement).value;
//     this.dataSource.filter = filterValue.trim().toLowerCase();

//     if (this.dataSource.paginator) {
//       this.dataSource.paginator.firstPage();
//     }
//   }

//   ngOnInit(){
//     this.getAllProducts();
//   }

//   deleteProduct(id:number){
//    var result= this.api.destroyProduct(id).subscribe(
//       {
//       next:(res)=>{
//         console.log(res)
//         // Swal.fire({
//         //   icon: 'error',
//         //   title: 'delete...',
//         //   text: 'Product Deleted!',
//         //   footer: res
//         // })
//         this.getAllProducts();
//       },
//       error:(err)=>{
//        // alert("error");
//        console.log(err)
//       //  Swal.fire({
//       //   icon: 'error',
//       //   title: 'Oops...',
//       //   text: 'Something went wrong!',
//       //   footer: err
//       // })
//       }
//     }
//     )
    
    
//   }
}
