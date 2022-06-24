import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-conventer',
  templateUrl: './conventer.component.html',
  styleUrls: ['./conventer.component.scss']
})

export class ConventerComponent {

  @Input() leftValue:any;
  @Input() rightValue:any;
  @Input() options:any;
  @Input() chosenOptRight:any;
  @Input() chosenOptLeft:any; 
  @Input() usd:any;
  @Input() eur:any;
  
  @Output() leftValueChange = new EventEmitter();
  @Output() rightValueChange = new EventEmitter();
  @Output() optionsChange = new EventEmitter();
  @Output() chosenOptRightChange = new EventEmitter();
  @Output() chosenOptLeftChange = new EventEmitter();
  @Output() usdChange = new EventEmitter();
  @Output() eurChange = new EventEmitter();

  onInputLeftValue(value:number){
    this.leftValue = value;
  }
  
  selectedLeftOption() {
    switch(this.chosenOptLeft) {  
      case 'UAH': { 
        this.chosenOptRight==='UAH'?this.rightValue=this.leftValue
          :this.chosenOptRight==='USD'?this.rightValue=(this.leftValue / this.usd)
            :this.chosenOptRight==='EUR'?this.rightValue=(this.leftValue / this.eur)
              :false;
        break;
      }
      case 'USD': { 
        this.chosenOptRight==='UAH'?this.rightValue=(this.usd * this.leftValue)
          :this.chosenOptRight==='USD'?this.rightValue=this.leftValue
            :this.chosenOptRight==='EUR'?this.rightValue=(this.leftValue*this.usd / this.eur)
              :false;
        break;
      }
      case 'EUR': { 
        this.chosenOptRight==='UAH'?this.rightValue=(this.usd * this.leftValue)
          :this.chosenOptRight==='USD'?this.rightValue=(this.leftValue*this.eur / this.usd)
            :this.chosenOptRight==='EUR'?this.rightValue=this.leftValue
              :false;
        break;
      }
    } 
  }
  
  onInputRightValue(value:number) {
    this.rightValue = value;
  }

  selectedRightOption() {
    switch(this.chosenOptRight) {  
      case 'UAH': { 
        this.chosenOptLeft==='UAH'?this.leftValue=this.rightValue
          :this.chosenOptLeft==='USD'?this.leftValue=(this.usd * this.rightValue)
            :this.chosenOptLeft==='EUR'?this.leftValue=(this.eur * this.rightValue)
              :false;
        break;
      }
      case 'USD': { 
        this.chosenOptLeft==='UAH'?this.leftValue=(this.usd * this.rightValue)
          :this.chosenOptLeft==='USD'?this.leftValue=this.rightValue
            :this.chosenOptLeft==='EUR'?this.leftValue=(this.rightValue*this.usd / this.eur)
              :false;
        break;
      }
      case 'EUR': { 
        this.chosenOptLeft==='UAH'?this.leftValue=(this.eur * this.rightValue)
          :this.chosenOptLeft==='USD'?this.leftValue=(this.leftValue*this.eur / this.usd)
            :this.chosenOptLeft==='EUR'?this.leftValue=this.rightValue
              :false;
        break;
      }
    }
  } 
}
