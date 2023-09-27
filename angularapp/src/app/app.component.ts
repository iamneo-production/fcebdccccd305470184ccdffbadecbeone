import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';
  age: number = 0;
  ageGroup: string = '';

  checkAge(): void {
    if (this.age < 0 || this.age > 120) {
      this.ageGroup = 'Invalid age';
    } else if (this.age < 1) {
      this.ageGroup = 'Foetus Infancy';
    } else if (this.age < 3) {
      this.ageGroup = 'Toddler years';
    } else if (this.age < 12) {
      this.ageGroup = 'Childhood';
    } else if (this.age < 18) {
      this.ageGroup = 'Teenage';
    } else if (this.age < 65) {
      this.ageGroup = 'Adult';
    } else if (this.age >= 65) {
      this.ageGroup = 'Senior citizen';
    }
  }
}
