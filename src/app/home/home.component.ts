import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  readonly baseUrl = 'https://jsonplaceholder.typicode.com/photos';

  housingLocationList: HousingLocation[] = [];

  housingService: HousingService = inject(HousingService);
  
  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}
