import { EventEmitter, Injectable } from '@angular/core';
import { CartItem } from './cart-item';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private cartItems: CartItem[];
  public itemsChanged: EventEmitter<CartItem[]> = new EventEmitter<CartItem[]>();

  user:User
  transactionIds: string[] = []

  constructor() {
    const cartRecord = JSON.parse(localStorage.getItem("cart")!)
    this.user = JSON.parse(localStorage.getItem("user")!)
    this.cartItems = cartRecord ? cartRecord : []

  }

  public getItems() {
    return this.cartItems.slice();
  }

  // Get Product ids out of CartItem[] in a new array
  private getItemIds() {
    return this.getItems().map(cartItem => cartItem.product.name);
  }

  public addItem(item: CartItem) {
    // If item is already in cart, add to the amount, otherwise push item into cart
    if (this.getItemIds().includes(item.product.name)) {
      this.cartItems.forEach(function (cartItem) {
        if (cartItem.product.name === item.product.name) {
          cartItem.amount += item.amount;
        }
      });
    } else {
      this.cartItems.push(item);
    }
    this.itemsChanged.emit(this.cartItems.slice());
    this.recordStorage(this.cartItems)
  }

  public addItems(items: CartItem[]) {
    items.forEach((cartItem) => {
      this.addItem(cartItem);
    });
  }

  public removeItem(item: CartItem) {
    const indexToRemove = this.cartItems.findIndex(element => element === item);
    this.cartItems.splice(indexToRemove, 1);
    this.itemsChanged.emit(this.cartItems.slice());
    this.recordStorage(this.cartItems)
  }

  public updateItemAmount(item: CartItem, newAmount: number) {
    if(1>newAmount){
      this.removeItem(item)
    }
    this.cartItems.forEach((cartItem) => {
      if (cartItem.product.name === item.product.name) {
        cartItem.amount = newAmount;
      }
    });
    this.itemsChanged.emit(this.cartItems.slice());
    this.recordStorage(this.cartItems)
  }

  public clearCart() {
    this.cartItems = [];
    this.itemsChanged.emit(this.cartItems.slice());
    this.recordStorage(this.cartItems)
  }

  public completeOrder() {

  }

  public getTotal() {
    let total = 0;
    this.cartItems.forEach((cartItem) => {
      total += cartItem.amount * cartItem.product.price;
    });
    return total;
  }

  public recordStorage(cartItems:CartItem[]){
    localStorage.setItem("cart", JSON.stringify(cartItems))
  }

  createTransactionId(): number {
    let transactionId = (Math.floor(Math.random() * 10000000) + 1000000)
    while (this.transactionIds.indexOf(transactionId.toString()) !== -1 || transactionId.toString().length >= 8) {
      transactionId = (Math.floor(Math.random() * 10000000) + 1000000)
    }
    return transactionId
  }

}
