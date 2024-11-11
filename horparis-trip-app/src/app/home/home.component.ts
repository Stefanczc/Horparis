import { Component } from '@angular/core';
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

  constructor(private router: Router) {}

  navigateToItinerary() {
    this.router.navigate(['/itinerary']);
  }
  
}
