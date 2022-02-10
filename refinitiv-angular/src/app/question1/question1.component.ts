import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question1',
  templateUrl: './question1.component.html',
  styleUrls: ['./question1.component.css']
})
export class Question1Component implements OnInit {

  checkResults : boolean = false;
  inputNumbers : number = 0;

  selectedDropDown : number = 1;

  dropDownList : any[] =[ {name : "isPrime", code : 1}, {name : "isFibonacci", code : 2}, ]

  constructor() { }

  ngOnInit(): void {
    if(this.inputNumbers) this.OnOptionsSelected(this.selectedDropDown)
  }

  async onKeyUp(event: any){
    if(this.inputNumbers) this.OnOptionsSelected(this.selectedDropDown)
  }

  async OnOptionsSelected(code : number){
    console.log(`code : ${code}, this.inputNumbers : ${this.inputNumbers}, this.checkResults : ${this.checkResults}`)
    if(code == 1) {
      this.checkResults = await this.CheckIsPrime(this.inputNumbers)
    }
    if(code == 2) {
      this.checkResults = this.CheckIsFibonacci(this.inputNumbers)
    }
  }


  async CheckIsPrime(input : number){
    if (input < 2) return false
    for(let i = 2, s = Math.sqrt(input); i <= s; i++) {
      if(input % i === 0) return false
    }
    return true
  }

  CheckIsFibonacci(input : number, start: number=1, last: number=0) : boolean {
    console.log(`input : ${input}, start : ${start}, last : ${last},`)
    if(start < input){
      return this.CheckIsFibonacci(input, start+last, start)
    }
    if(input == start){
      return true;
    }
    return false;
  }

  numberOnly(event: any) {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) { return false; }
    return true;
  }



}
