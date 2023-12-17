import { Component } from '@angular/core';
import { debug } from 'console';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  age: number = 0;
  workclass: string = '';
  education: string = '';
  educationNum: number = 0;
  maritalStatus: string = '';
  occupation: string = '';
  relationship: string = '';
  race: string = '';
  sex: string = '';
  capitalGain: number = 0;
  capitalLoss: number = 0;
  hoursPerWeek: number = 0;
  nativeCountry: string = '';

  onCheckIncome(): void {
    alert("CheckIncome")

    console.log('Checking income:', {
      age: this.age,
      workclass: this.workclass,
      education: this.education,
      educationNum: this.educationNum,
      maritalStatus: this.maritalStatus,
      occupation: this.occupation,
      relationship: this.relationship,
      race: this.race,
      sex: this.sex,
      capitalGain: this.capitalGain,
      capitalLoss: this.capitalLoss,
      hoursPerWeek: this.hoursPerWeek,
      nativeCountry: this.nativeCountry
    });
  }
}
