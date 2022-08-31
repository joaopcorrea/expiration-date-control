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
  }

}
