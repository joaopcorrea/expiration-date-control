import { ControlledProduct } from './controlledProduct.model';
import { SharedProduct } from './sharedProduct.model';

export interface Product extends SharedProduct, ControlledProduct {
}