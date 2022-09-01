import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'Controle de Validade';
  image = '';

  products: any = [{}];

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

  constructor() { }

  ngOnInit(): void {
    this.products = [{
      barcode: '1111111',
      name: 'Manga',
      image: '',
      expirationDate: '',
      category: '',
      group: '',
      price: '',
      quantity: ''
    },
    {
      barcode: '22222',
      name: 'Garrafa',    
    },
    {
      barcode: '3333333',
      name: 'Pão',
    }];
  }

}
