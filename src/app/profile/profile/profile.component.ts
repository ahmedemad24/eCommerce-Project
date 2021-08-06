import { HouseService } from 'src/app/service/Houses/house.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from 'src/app/service/Booking/booking.service';
import { UserService } from 'src/app/User/Shared/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  ids:any

  user?:any

  booking:any=[]
  constructor(public servic: UserService,public ar:ActivatedRoute,public servics:BookingService,public servichouse:HouseService) { }

  ngOnInit(): void {
    this.servic.getalluserById(this.ar.snapshot.params["id"]).subscribe(e=>{this.user=e;console.log(e)},er=>console.log(er))
    this.servics.GetAllBookingToUser(this.ar.snapshot.params["id"]).subscribe(e=>{console.log(e)},er=>console.log(er))
  }


  houses:any
  btn(){
    this.servichouse.getHousesByIdUser(this.ar.snapshot.params["id"]).subscribe(e=>{console.log(e) ; this.houses=e})
  }
}
