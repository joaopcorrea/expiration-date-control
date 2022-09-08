import { Storage } from '@ionic/storage-angular';
import { Injectable } from '@angular/core';
import * as CordovaSQLiteDriver from 'localforage-cordovasqlitedriver';
import * as cordovaSQLiteDriver from 'localforage-cordovasqlitedriver';
import { BehaviorSubject, filter, from, of, switchMap } from 'rxjs';

const STORAGE_KEY = 'products';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private storageReady = new BehaviorSubject(false);

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    await this.storage.defineDriver(cordovaSQLiteDriver);
    await this.storage.create();

    this.storageReady.next(true);
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
    return this.storageReady.pipe(
      filter(ready => ready),
      switchMap(_ => {
        return from(this.storage.get(STORAGE_KEY)) || of([]);
      })
    )
  }

}
