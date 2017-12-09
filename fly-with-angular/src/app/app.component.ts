import { Component } from '@angular/core';
import { Trip } from './models/trip';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  trips: Trip[] = [{
    name: 'Super Flights to Mars',
    price: 200000,
    duration: '2+ Earth ears',
    description: '  Race through the Solar System to reach the Red planet. This flight will take 11 Earth Years for each side of the journey.',
    image: 'http://blog-en.condorchem.com/img/mars.png'
  },
  {
    name: 'Trip to the moon',
    price: 100000,
    duration: '0.1 Earth Years',
    description: 'Visit the moon, look at our solar system from a different perspective.',
    image: 'http://pngimg.com/uploads/moon/moon_PNG36.png'
  },
  {
    name: 'Trip to the Jurasic world',
    price: 150000,
    duration: 'instant',
    description: 'Watch the dinosaurs rule the world',
    image: 'https://stickeroid.com/uploads/pic/full-pngmart/0f25ed9f326c6996ed767adf26dc78f1f0c4edde.png'
  }
  ];

}
