import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms'; 
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule], 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  loginForm: FormGroup;

  constructor(private router: Router) {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),  
      password: new FormControl('', [Validators.required]) 
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      const userData = {
        username: this.loginForm.value.username,
        password: this.loginForm.value.password,
      };
  
      const localUser = JSON.parse(localStorage.getItem('localUser') || 'null');
  
      if (!localUser) {
        localStorage.setItem('localUser', JSON.stringify(userData));
        alert('Bine ai venit in Paris!');
        this.router.navigate(['/itinerary']);
        return;
      }
  
      if (userData.username === localUser.username && userData.password === localUser.password) {
        alert('Bine ai venit in Paris!');
        this.router.navigate(['/itinerary']);
      } else {
        alert('Date incorecte!');
      }
    } else {
      alert('Introdu toate datele');
    }
  }
  
}
