import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  form: FormGroup;
  image = '';

  constructor(private productService: ProductService, 
              private formBuilder: FormBuilder,
              private router: Router) { 
    this.form = this.formBuilder.group({
      expirationDate: [null],
      barcode: [null],
      name: [null],
      category: [null],
      price: [null],
      quantity: [null]
    });
  }

  ngOnInit(): void {
    
  }

  async clickAdd() {
    let product: Product = {
      creationDate: new Date(),
      expirationDate: new Date(this.form.controls['expirationDate'].value),
      barcode: this.form.controls['barcode'].value,
      name: this.form.controls['name'].value,
      category: this.form.controls['category'].value,
      price: this.form.controls['price'].value,
      quantity: this.form.controls['quantity'].value,
      image: this.image,
      group: ''
    };

    await this.productService.create(product);
    this.router.navigateByUrl('home');
  }

  async captureImage() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      source: CameraSource.Prompt,
      resultType: CameraResultType.Base64
    });

    if (image) {
      this.image = `data:image/jpeg;base64,${image.base64String}`!;
    }
  }

}
