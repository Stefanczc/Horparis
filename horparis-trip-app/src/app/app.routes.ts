import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';  
import { ItineraryComponent } from './itinerary/itinerary.component'; 
import { ObjectivesComponent } from './objectives/objectives.component';  

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'itinerary', component: ItineraryComponent },
  { path: 'objectives', component: ObjectivesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule {}
