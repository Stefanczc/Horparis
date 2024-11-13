import { Component, OnInit } from '@angular/core';
import { ObjectivesService } from './objectives.service';
import { Activity } from './activity.model';

@Component({
  selector: 'app-objectives',
  standalone: true,
  imports: [],
  templateUrl: './objectives.component.html',
  styleUrl: './objectives.component.css'
})
export class ObjectivesComponent implements OnInit {

  itineraryContent: Activity[] = [];

  constructor(private objectivesService: ObjectivesService){}

  ngOnInit(): void {
    this.itineraryContent = this.objectivesService.getItinerary();
  }

}
