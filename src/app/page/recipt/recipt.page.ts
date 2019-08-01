import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipt',
  templateUrl: './recipt.page.html',
  styleUrls: ['./recipt.page.scss'],
})
export class ReciptPage implements OnInit {
coff:number;
pric
pack
extra
tot:number;
total:number;
tots:number;
totals
  constructor(private route: ActivatedRoute,private router: Router) {
    this.tot=0
    this.tots=0
    this.total=0
    this.pric=0
    this.total=0
    this.totals=0
   }

  ngOnInit() {
    this.route.queryParams.subscribe(params =>{
      console.log(params)
    this.coff = params.coffee
    console.log(this.coff)

    this.pric = params.price
    console.log(this.pric)

    this.pack = params.packets
    console.log(this.pack)

    this.extra = params.extras
    console.log(this.extra)
   


  })



if(this.pack=="1 Packet"){
  this.tots=5
}else if(this.pack=="2 Packets"){
  this.tots=10
}else if(this.pack=="3 Packets"){
  this.tots=15
}else if(this.pack=="4 Packets"){
  this.tots=20
}else if(this.pack=="5 Packets"){
  this.tots=25
}



if(this.extra=="Pancake"){
  this.tot=20
}else if(this.extra=="Muffin"){
  this.tot=20
}else if(this.extra=="Biscuits"){
  this.tot=20
}else if(this.extra=="Cake slice"){
  this.tot=20
}else if(this.extra=="Pizza slice"){
  this.tot=20
}

this.totals = parseInt(this.pric)


this.total= this.tot+ this.tots + this.totals

console.log(this.tot)
console.log(this.tots)
console.log(this.pric)
console.log(this.total)



  }
  onHome(){
    this.router.navigateByUrl("home")
  }

}
