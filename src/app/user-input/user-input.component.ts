import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppService } from '../app.services';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})

export class UserInputComponent {
  inputInitialInvestment!: number;
  inputAnnualInvestment!: number;
  inputExpectedReturn!: number;
  inputDuration!: number;

  constructor (private appService: AppService) {}

  protected  onSubmit(){
    this.appService.calculateInvestmentResults({
        initialInvestment: this.inputInitialInvestment,
        annualInvestment: this.inputAnnualInvestment,
        expectedReturn: this.inputExpectedReturn,
        duration: this.inputDuration
      }
    )
  }
}
