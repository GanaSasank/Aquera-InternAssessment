// src/app/app.component.ts

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';

export interface Resident {
  name: string;
  height: string;
  mass: string;
  gender: string;
}

export interface Planet {
  name: string;
  climate: string;
  population: string;
  terrain: string;
  rotation_period: string;
  orbital_period: string;
  gravity: string;
  surface_water: string;
  residents: Resident[]; // New property for residents
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  planets: Planet[] = [];
  currentPage: number = 1;
  totalPages: number =10;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPlanets();
  }

  fetchPlanets(page: number = 1) {
    const apiUrl = `https://swapi.dev/api/planets/?page=${page}&format=json`;

    this.http.get<any>(apiUrl).subscribe(data => {
      if (data && data.results) {
        this.totalPages = Math.ceil(data.count / data.results.length);
        this.planets = data.results.map((planet: any) => {
          return {
            ...planet,
            residents: [] // Initialize residents as an empty array
          };
        });
        

      }
    });
  }
  onPageChange(page: number) {
    this.currentPage = page;
  }
}
