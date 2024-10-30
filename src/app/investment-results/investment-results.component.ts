import { Component } from '@angular/core';
import { AppService } from '../app.services';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  constructor(private appService: AppService){}

  get investmentResults(){
    return this.appService.annualData()
  }
}
