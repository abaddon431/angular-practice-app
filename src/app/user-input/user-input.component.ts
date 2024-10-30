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

  private appService = inject(AppService);

  protected  onSubmit(){
    this.appService.calculateInvestment({
        initialInvestment: this.inputInitialInvestment,
        annualInvestment: this.inputAnnualInvestment,
        expectedReturn: this.inputExpectedReturn,
        duration: this.inputDuration
      }
    )
  }
}
