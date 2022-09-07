import { Storage } from '@ionic/storage-angular';
import { Injectable } from '@angular/core';

const STORAGE_KEY = 'products';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private storage: Storage) {
    this.init();
  }

  init() {
    this.storage.create();
  }

  async create<T>(item: T) {
    const storedData = await this.storage.get(STORAGE_KEY) || [];
    storedData.push(item);
    return this.storage.set(STORAGE_KEY, storedData);
  }

  async remove(index: number) {
    // const storedData = await this.storage.get(STORAGE_KEY) || [];
    // storedData.splice(index, 1);
    // return this.storage.set(STORAGE_KEY, storedData);
  }

  getAll() {
    return this.storage.get(STORAGE_KEY) || [];
  }

}
