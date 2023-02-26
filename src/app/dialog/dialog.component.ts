import { Component, Inject, inject, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../Services/product.service';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit{
 title:String="save";
 
  
  freshnesslist =
   [ "Brand new","Second hand","refurbished"]
  
   productForm!:FormGroup;
  constructor(private formBuilder:FormBuilder,private api:ProductService, @Inject(MAT_DIALOG_DATA) private editData:any, private dialog:MatDialogRef<DialogComponent>){}

  
 ngOnInit(): void {
   this.productForm =this.formBuilder.group({
    productName: ['', Validators.required],
    category: ['', Validators.required],
    freshness: ['', Validators.required],
    price: ['', Validators.required],
    comment: ['', Validators.required],
    date: ['', Validators.required],
  });
  if(this.editData){
    this.title="Update"
    this.productForm.controls['productName'].setValue(this.editData.productName);
    this.productForm.controls['category'].setValue(this.editData.category);
    this.productForm.controls['freshness'].setValue(this.editData.freshness);
    this.productForm.controls['price'].setValue(this.editData.price);
    this.productForm.controls['comment'].setValue(this.editData.comment);
    this.productForm.controls['date'].setValue(this.editData.date);
  }
     
 } 


  addProduct(){
 // console.log(this.productForm.value);
  if(!this.editData){
    if(this.productForm.valid){
      this.api.postProducts(this.productForm.value).subscribe({
        next:(res)=>{
          Swal.fire(
            'Good job!',
            'Your Product added sucessfully!',
            'success'
          )
          // alert("Product added sucessfully")
          //Swal.fire('Any fool can use a computer')
          this.productForm.reset();
          this.dialog.close('save');
        },
        error:(err)=>{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: err
          })
         // alert("error")
        }
      })
    }
  }
  else{
    this.updateProduct();
  }
 }

 updateProduct(){
this.api.putProduct(this.productForm.value,this.editData.id).subscribe({
  next:(res)=>{
    Swal.fire(
  'Good job!',
  'Your Product updated sucessfully!',
  'success'
)
    //alert("update sucessfully");
    this.productForm.reset();
    this.dialog.close('update');
  },
  error:(err)=>
  {
//alert("error");
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Something went wrong!',
    footer: err
  })
  }
})
 }

}
