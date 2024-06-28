import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  housingLocationList: HousingLocation[] = [

    {
      id: 1,
      name: "Teste",
      photo: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg",
      city: "cidade",
      state: "BR",
      availableUnits: 0,
      wifi: false,
      laundry: false
    },
    {
      id: 2,
      name: "Teste",
      photo: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/5.svg",
      city: "cidade",
      state: "BR",
      availableUnits: 0,
      wifi: false,
      laundry: false
    },
    {
      id: 3,
      name: "Teste",
      photo: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/9.svg",
      city: "cidade",
      state: "BR",
      availableUnits: 0,
      wifi: false,
      laundry: false
    }
  ];

  constructor() { }

  getAllHousingLocations(): HousingLocation[] {
    return this.housingLocationList;
  }
  getHousingLocationById(id: number): HousingLocation | undefined {
    return this.housingLocationList.find((housingLocation) => housingLocation.id === id);
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`,
    );
  }
}
