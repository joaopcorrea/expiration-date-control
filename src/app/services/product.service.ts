import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { DatabaseService } from './database.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private dbService: DatabaseService) {
  }

  async create(product: Product) {
    await this.dbService.create(product);
  }

  getAll() {
    return this.dbService.getAll();
  }

}
