import { Component, OnInit } from '@angular/core';

import { BathroomService } from '../bathroom.service';
import { Bathroom } from '../bathroom';

@Component({
  selector: 'app-nearby-map',
  templateUrl: './nearby-map.component.html',
  styleUrls: ['./nearby-map.component.css']
})
export class NearbyMapComponent implements OnInit {
  bathrooms: Bathroom[];
  initMap(): void {
    let map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });
  }

  constructor(private bathroomService: BathroomService) { }

  getNearbyBathrooms(): void {
    this.bathrooms = this.bathroomService.getNearbyBathrooms();
  }

  ngOnInit() {
    this.initMap();
    this.getNearbyBathrooms();
    console.log(this.bathrooms);
  }

}
