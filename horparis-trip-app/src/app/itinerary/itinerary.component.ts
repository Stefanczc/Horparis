import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Activity } from '../objectives/activity.model';
import { ObjectivesService } from '../objectives/objectives.service';

@Component({
  selector: 'app-itinerary',
  standalone: true,
  imports: [NgFor, CommonModule, FormsModule],
  templateUrl: './itinerary.component.html',
  styleUrl: './itinerary.component.css'
})
export class ItineraryComponent implements OnInit {

  itineraryDays = ['Ziua 1 - Costuri Muzee: 22€', 'Ziua 2 - Costuri Muzee: 50€', 'Ziua 3 - Costuri Muzee: 76€', 'Ziua 4 - Costuri Muzee: 47€'];
  itineraryContent: Activity[] = [];
  expandedDayIndex: number | null = null;
  airbnbRoute = 'https://www.google.com/maps/dir/47.10017,27.543903/86+Rue+Raymond+Lefebvre,+94250+Gentilly,+Fran%C5%A3a/@48.2751946,4.8761471,5z/data=!3m1!4b1!4m10!4m9!1m1!4e1!1m5!1m1!1s0x47e6710b4ff665b1:0x1541088fec314107!2m2!1d2.3400906!2d48.8117068!3e3?entry=ttu&g_ep=EgoyMDI0MTExMS4wIKXMDSoASAFQAw%3D%3D';

  constructor(private objectivesService: ObjectivesService){}

  ngOnInit(): void {
    this.itineraryContent = this.objectivesService.getItinerary();
  }

  onObjectiveChecked(activityId: number, objectiveId: number, checked: boolean) {
    this.objectivesService.updateCheckedState(activityId, objectiveId, checked);
  }
  
  toggleDay(index: number) {
    this.expandedDayIndex = this.expandedDayIndex === index ? null : index;
  }

  toggleObjectives(dayIndex: number) {
    this.itineraryContent[dayIndex].showObjectives = !this.itineraryContent[dayIndex].showObjectives;
  }

}
