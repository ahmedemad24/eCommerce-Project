import { HousePhotoService } from './../../service/HousesPhoto/house-photo.service';
import { UserService } from 'src/app/User/Shared/user.service';
import { House } from './../../service/Houses/house';
import { Component, OnInit,ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HouseService } from 'src/app/service/Houses/house.service';

declare var google:any
@Component({
  selector: 'app-allhouses',
  templateUrl: './allhouses.component.html',
  styleUrls: ['./allhouses.component.css']

})
export class AllhousesComponent implements OnInit {

  constructor(public service :HouseService , private router: Router,public services :UserService,public ar:ActivatedRoute ,public serviceimg:HousePhotoService) { }

  options: any;
  filterBySteert:string=''
  filterByCity:string=''
  TotalLength:any;
  page:any = 1;
  overlays: any[]=[];
  items:any=[]
  itemshouse:any=[]
  id=0
  filterByPrice:any=300
  isShown = false
  isShown2 = false
  isShown3 = false



  toggleShow() {
    this.isShown = ! this.isShown;
  }
  toggleShow2() {
    this.isShown2 = ! this.isShown2;
  }

  toggleShow3() {
    this.isShown3 = ! this.isShown3;
  }
  ngOnInit(): void {
    this.fetchPosts()
    this.options = {
        center: {lat: 36.890257, lng: 30.707417},
        zoom: 12
    };

    this.overlays = [
        new google.maps.Marker({position: {lat: 36.879466, lng: 30.667648}, title:"Giza"}),
        new google.maps.Marker({position: {lat: 36.883707, lng: 30.689216}, title:"Ataturk Park"}),
        new google.maps.Marker({position: {lat: 36.885233, lng: 30.702323}, title:"Oldtown"}),
        new google.maps.Polygon({paths: [
            {lat: 36.9177, lng: 30.7854},{lat: 36.8851, lng: 30.7802},{lat: 36.8829, lng: 30.8111},{lat: 36.9177, lng: 30.8159}
        ], strokeOpacity: 0.5, strokeWeight: 1,fillColor: '#1976D2', fillOpacity: 0.35
        }),
        new google.maps.Circle({center: {lat: 36.90707, lng: 30.56533}, fillColor: '#1976D2', fillOpacity: 0.35, strokeWeight: 1, radius: 1500}),
        new google.maps.Polyline({path: [{lat: 36.86149, lng: 30.63743},{lat: 36.86341, lng: 30.72463}], geodesic: true, strokeColor: '#FF0000', strokeOpacity: 0.5, strokeWeight: 2})
    ];
  }


city=false
  fetchPosts(): void {

    if (this.ar.snapshot.params["City"]=="All Cities") {
      this.service.GetAllHouses().subscribe(e=>{this.items=e; this.TotalLength=e.length;console.log(e)},er=>console.log(er))
      this.city=true
    }
    else{
      this.city=false

      this.service.getHousesByCity(this.ar.snapshot.params["City"]).subscribe(e=>{this.items=e; this.TotalLength=e.length;console.log(e)},er=>console.log(er))
    }
    this.serviceimg.GetAllHousesPhoto().subscribe(e=>{this.itemshouse=e;})

  }

  onTableDataChange(event:any){
    this.page = event;
    this.fetchPosts();
  }



}
