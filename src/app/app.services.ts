import { Injectable, signal } from "@angular/core";
import { type InvestmentInput } from "./user-input/user-input";

interface AnnualData{
    year: number
    interest: number
    valueEndOfYear: number
    annualInvestment: number
    totalInterest: number,
    totalAmountInvested: number
}

@Injectable({providedIn: 'root'})
export class AppService{
  public annualData = signal<AnnualData[]| undefined>(undefined);

  public calculateInvestmentResults(userInput: InvestmentInput){
    const annualData = [];
    let investmentValue = userInput.initialInvestment;

    for (let i = 0; i < userInput.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (userInput.expectedReturn / 100);
      investmentValue += interestEarnedInYear + userInput.annualInvestment;
      const totalInterest =
        investmentValue - userInput.annualInvestment * year - userInput.initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: userInput.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: userInput.initialInvestment + userInput.annualInvestment * year,
      });
    }
    this.annualData.set(annualData);
  }
}
