import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'

import { Trip } from './models/trip';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  totalMoney: number;
  pendingAmount: number = 0;
  buttonText: string = '+ Add a Trip';
  showAddForm: boolean = false;
  tripForm: FormGroup;
  moneyForm: FormGroup;
  trips: Trip[] = [{
    name: 'Super Flights to Mars',
    price: 2000000,
    duration: '2+ Earth ears',
    description: '  Race through the Solar System to reach the Red planet. This flight will take 11 Earth Years for each side of the journey.',
    image: 'http://blog-en.condorchem.com/img/mars.png',
    booked: false
  },
  {
    name: 'Trip to the moon',
    price: 1000000,
    duration: '0.1 Earth Years',
    description: 'Visit the moon, look at our solar system from a different perspective.',
    image: 'http://pngimg.com/uploads/moon/moon_PNG36.png',
    booked: false
  },
  {
    name: 'Trip to the Jurasic world',
    price: 15000000,
    duration: 'instant',
    description: 'Watch the dinosaurs rule the world',
    image: 'https://stickeroid.com/uploads/pic/full-pngmart/0f25ed9f326c6996ed767adf26dc78f1f0c4edde.png',
    booked: false
  }
  ];
  constructor(private formBuilder: FormBuilder) {

  }
  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.tripForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      price: new FormControl(0, [Validators.required]),
      duration: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      imageUrl: new FormControl('', [Validators.required])
    });
    this.moneyForm = this.formBuilder.group({
      totalMoney: new FormControl()
    })
  }
  toggleAddTripForm() {
    this.showAddForm = !this.showAddForm;
    this.buttonText = this.showAddForm ? "Cancel" : "+ Add a Trip";
  }
  addTrip() {
    const trip: Trip = {
      name: this.tripForm.controls.name.value,
      price: this.tripForm.controls.price.value,
      duration: this.tripForm.controls.duration.value,
      description: this.tripForm.controls.description.value,
      image: this.tripForm.controls.imageUrl.value,
      booked: false
    }

    this.trips.push(trip);
    this.toggleAddTripForm();
  }

  totalMoneyChanged() {
    this.totalMoney = this.moneyForm.controls.totalMoney.value;
    this.pendingAmount = this.totalMoney;
  }

  toggleBooking(tripVal: Trip) {
    for (let trip of this.trips) {
      if (trip == tripVal) {
        if (trip.booked) {
          trip.booked = false;
          this.addToPendingAmmount(trip.price);
        } else {
          trip.booked = this.reducePendingAmmount(trip.price);
        }


      }
    }

  }
  addToPendingAmmount(ammount: number) {
    this.pendingAmount += ammount;
  }
  reducePendingAmmount(ammount: number): boolean {
    if (this.pendingAmount < ammount) {
      alert("Not enough funds");
      return false;
    }
    this.pendingAmount = this.pendingAmount - ammount;
    return true;
  }
}