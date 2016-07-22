import { Component, provide } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Marker } from './mapa.model';

import {
  MapsAPILoader,
  NoOpMapsAPILoader,
  MouseEvent,
  GOOGLE_MAPS_PROVIDERS,
  GOOGLE_MAPS_DIRECTIVES
} from 'angular2-google-maps/core';

@Component({
  selector: 'mapa-app',
  templateUrl: 'app/mapa/cuadro.html',
  directives: [GOOGLE_MAPS_DIRECTIVES],
})

export class AppComponent {
	// google maps zoom level
	zoom: number = 7;

	// initial center position for the map
	lat: number = 21.0833;
	lng: number = -86.85;

	//marcardores
	markers: Marker[] = [
		{
			lat: 21.0833,
			lng: -86.85,
			label: 'A',
			draggable: true
		}
	];

	constructor(){
		setInterval(() => this.cambiarPosicion(), 1000);
	}

	cambiarPosicion(){
		this.markers[0].lat = this.markers[0].lat + 0.0001;
		this.markers[0].lng = this.markers[0].lng + 0.0001;
	}

	clickedMarker(label: string, index: number) {
		console.log(`clicked the marker: ${label || index}`)
	}

	mapClicked($event: MouseEvent) {

		var latitud  = $event.coords.lat;
		var longitud = $event.coords.lng;

		this.markers.push({
			lat: latitud,
			lng: longitud,
			label: 'A',
			draggable: true
		});
	}

	markerDragEnd(m: Marker, $event: MouseEvent) {
		console.log('dragEnd', m, $event);
	}


}
