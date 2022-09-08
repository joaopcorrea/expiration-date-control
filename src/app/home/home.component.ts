import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'Controle de Validade';
  image = '';

  products: Product[] = [];

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

  constructor(private productService: ProductService) { 
  }

  ngOnInit(): void {
    this.loadProducts();
  }

  async loadProducts() {
    // this.products = await this.productService.getAll();
    this.productService.getAll().subscribe(res => {
      this.products = res;
    });
  }

  async refreshProducts(event: any) {
    await this.loadProducts();

    event.target.complete();
  }

}
