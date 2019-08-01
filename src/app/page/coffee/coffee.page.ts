import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.page.html',
  styleUrls: ['./coffee.page.scss'],
})
export class CoffeePage implements OnInit {
  capuccino=25
  espresso=30
  latte=20
  americano=50
  mocha=45
  stat
  constructor(private router: Router) { 
   this.stat=1/3
  console.log(this.stat)
  }


  ngOnInit() {
  }

  goCapuccino() {
    this.router.navigateByUrl("extas")
    this.router.navigate(['/extas'], { queryParams: { capuccino: this.capuccino } })
  }
  goEspresso() {
    this.router.navigateByUrl("extas")
    this.router.navigate(['/extas'], { queryParams: { espresso: this.espresso } })
  }
  goAmericano() {
    this.router.navigateByUrl("extas")
    this.router.navigate(['/extas'], { queryParams: { americano: this.americano } })
  }
  goLatte() {
    this.router.navigateByUrl("extas")
    this.router.navigate(['/extas'], { queryParams: { latte: this.latte } })
  }
  goMocha(){
    this.router.navigateByUrl("extas")
    this.router.navigate(['/extas'], { queryParams: { mocha: this.mocha } })
  }


}
