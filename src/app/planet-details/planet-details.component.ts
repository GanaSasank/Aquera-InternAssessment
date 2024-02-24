import { Component, Input } from '@angular/core';
import { Planet } from '../app.component';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrl: './planet-details.component.css'
})
export class PlanetDetailsComponent {
  @Input() selectedPlanet: Planet | null = null;
}
