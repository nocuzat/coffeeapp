import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-extas',
  templateUrl: './extas.page.html',
  styleUrls: ['./extas.page.scss'],
})
export class ExtasPage implements OnInit {
c1
e1
a1
l1
m1
coffee
price
stat
packets
extras
name
  constructor(private route: ActivatedRoute,private router: Router) { 
    this.coffee=""
    this.price=0

    this.stat=2/3
    console.log(this.stat)
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params =>{
      console.log(params)
    this.c1 = params.capuccino
    console.log(this.c1)

    this.e1 = params.espresso
    console.log(this.e1)

    this.a1 = params.americano
    console.log(this.a1)

    this.l1 = params.latte
    console.log(this.l1)

    this.m1 = params.mocha
    console.log(this.m1)
  })


if(this.c1==25){
    this.coffee="Capuccino"
    this.price=25

}else if(this.e1==30){
  this.coffee="Espresso"
  this.price=30

}else if(this.a1==50){
  this.coffee="Americano"
  this.price=50

}else if(this.l1==20){
  this.coffee="Latte"
  this.price=20

}else if(this.m1==45){
  this.coffee="Mocha"
  this.price=45

}

console.log(this.coffee)
console.log(this.price)



}

onOrder(){
  this.router.navigateByUrl("recipt")
  this.router.navigate(['/recipt'], { queryParams: { coffee: this.coffee,price:this.price,packets:this.packets,extras:this.extras,name:this.name } });
}

}
