import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../shared/payment.service';
import { CartItem } from '../shared/cart-item';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  private cartSubscription!: Subscription;
  cart!:CartItem[]
  total!:number

  constructor(private paymentService:PaymentService, private router:Router){
    this.cart=this.paymentService.getItems()
    this.total=this.paymentService.getTotal()
  }
  ngOnInit(): void {

    this.cartSubscription = this.paymentService.itemsChanged.subscribe(
      (items: CartItem[]) => {
        this.cart = items;
        this.total = this.paymentService.getTotal();
      })
  }

  decreaseItemAmount(item:CartItem){
    const amount = item.amount-1
    this.paymentService.updateItemAmount(item,amount)
  }
  increaseItemAmount(item:CartItem){
    const amount = item.amount+1
    this.paymentService.updateItemAmount(item,amount)
  }
  updateItemAmount(item:CartItem){
    this.paymentService.updateItemAmount(item,
      item.amount < 1 || !item.amount || isNaN(item.amount) ? 1 : item.amount)
  }
  clearAll(){
    this.paymentService.clearCart()
  }

  checkOut(){
    this.router.navigateByUrl("/checkout")
  }



}
