import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  readonly baseUrl = 'https://jsonplaceholder.typicode.com/photos';
  housingLocation: HousingLocation = {
    albumId: 1,
    id: 1,
    title: "Teste",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg",
    thumbnailUrl: "https://picsum.photos/id/231/1800/1200"
  };
}
