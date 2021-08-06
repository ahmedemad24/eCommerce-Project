import { Booking } from 'src/app/service/Booking/booking';
import { HouseService } from 'src/app/service/Houses/house.service';
import { BookingService } from './../service/Booking/booking.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booking-data',
  templateUrl: './booking-data.component.html',
  styleUrls: ['./booking-data.component.css']
})
export class BookingDataComponent implements OnInit {

  constructor(public servic:BookingService,public ar:ActivatedRoute,public servicehouse:HouseService) { }

  booking:any[]=[]

  ngOnInit(): void {

  }


}
