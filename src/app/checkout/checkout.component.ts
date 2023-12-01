import { Component } from '@angular/core';
import { PaymentService } from '../shared/payment.service';
import { Router } from '@angular/router';
import { CartItem } from '../shared/cart-item';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  cart!:CartItem[]
  total!:string
  sub!:string
  vat!:string

  constructor(private paymentService:PaymentService,private router:Router){
    this.cart=paymentService.getItems()
    this.total=paymentService.getTotal().toFixed(2)
    this.sub=((paymentService.getTotal()/100)*80).toFixed(2)
    this.vat=((paymentService.getTotal()/100)*20).toFixed(2)
  }

  complateOrder(){
    this.paymentService.clearCart()
    this.router.navigateByUrl("/account")
  }

  cancelCheckout(){
    this.router.navigateByUrl("/cart")
  }

}
