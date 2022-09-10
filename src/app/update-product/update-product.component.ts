import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

import { AlertController } from '@ionic/angular';

import { PhotoViewer, capShowOptions, capShowResult} from '@capacitor-community/photoviewer';
import { Category } from '../models/category.model';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {

  form: FormGroup;
  image = '';
  categories: Category[] = [];
  expirationDate: any;

  constructor(private productService: ProductService, 
              private formBuilder: FormBuilder,
              private router: Router,
              // private photoViewer: PhotoViewer,
              private alertController: AlertController) { 
    this.form = this.formBuilder.group({
      barcode: [null],
      name: [null],
      category: [null],
      price: [null],
      quantity: [null]
    });
  }

  ngOnInit(): void {
    
  }

  async clickSave() {
    let product: Product = {
      creationDate: new Date(),
      expirationDate: new Date(this.expirationDate),
      barcode: this.form.controls['barcode'].value,
      name: this.form.controls['name'].value,
      category: this.form.controls['category'].value,
      price: this.form.controls['price'].value,
      quantity: this.form.controls['quantity'].value,
      image: this.image,
      group: ''
    };

    // await this.productService.create(product);
    this.router.navigateByUrl('home');

    this.form.reset();
    this.expirationDate = null;
  }

  async captureImage() {
    const image = await Camera.getPhoto({
      quality: 10,
      allowEditing: false,
      source: CameraSource.Prompt,
      resultType: CameraResultType.Base64,
    });

    if (image) {
      this.image = `data:image/jpeg;base64,${image.base64String}`!;
    }
  }

  async showImage() {
    if (!this.image) {
      await this.captureImage();
      return;
    }

    const options: capShowOptions = {
      images: [{ url: this.image, title: 'Product' }],
      options: {share: false}
    }

    await PhotoViewer.show(options);
  }
}
