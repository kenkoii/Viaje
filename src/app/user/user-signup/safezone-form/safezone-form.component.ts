import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFire } from 'angularfire2';
import { Safezone } from '../../../models/safezone.model';

declare var swal: any;
@Component({
  selector: 'app-safezone-form',
  templateUrl: './safezone-form.component.html',
  styleUrls: ['./safezone-form.component.scss']
})
export class SafezoneFormComponent implements OnInit {

  public safezone = new Safezone();
  public address : Object;
  public addressForm: string;
  private isLocationModalOpen: boolean = false;

  constructor( private af: AngularFire, private router: Router ) { }

  ngOnInit() {
  }

  openLocationModal(){
    this.isLocationModalOpen = !this.isLocationModalOpen;
  }

  getAddress(place:Object) {
          this.address = place['formatted_address'];
          var location = place['geometry']['location'];
          var lat =  location.lat();
          var lng = location.lng();
          console.log("lat:"+lat+",lng:"+lng);
          this.safezone.address = {
            address: this.address,
            lat: lat,
            lng: lng
          };
      }

  mapClicked(obj){
    console.log(obj.lat);
    console.log(obj.lng);
    this.safezone.address = {
      address: this.addressForm,
      lat: obj.lat,
      lng: obj.lng
    };
    console.log(this.safezone.address)
    this.openLocationModal();
  }

  onSignupSafezone() {
    if(this.safezone.address){
      this.af.auth.createUser({
          email: this.safezone.email_address,
          password: this.safezone.password
      }).then(
          (success) => {
          console.log(success);

          //Then push other fields to firebase real time DB.
          let user_safezone = {
               type: 'safezone',
               shop_name: this.safezone.shop_name,
               owner: this.safezone.owner,
               address: this.safezone.address,
               username: this.safezone.username,
               email_address: this.safezone.email_address,
               contact_number: this.safezone.contact_number,
               service_information_type: this.safezone.service_information_type
          };
          //Push list of safezone to firebase.
          const safezones = this.af.database.list('users');
          safezones.push(user_safezone)
                    .then(data => {
                            swal({
                                title: "Congratulations!",
                                text: "Registration Successful, please login again.",
                                type: "success",
                                confirmButtonColor: "#2ECC71",
                                confirmButtonText: "OK",
                                closeOnConfirm: true
                            });
                            this.router.navigateByUrl('login');
                        })
                    .catch(err =>
                            swal({
                              title: "Login Error",
                              text: err.message,
                              type: "error",
                              confirmButtonColor: "#DD6B55",
                              confirmButtonText: "OK",
                              closeOnConfirm: true
                            }));
      }).catch(
          (err) => {
            swal({
              title: "Error",
              text: err.message,
              type: "error",
              confirmButtonColor: "#DD6B55",
              confirmButtonText: "OK",
              closeOnConfirm: true
            });
      });
    }else{
      swal({
        title: "Error",
        text: "Please select location by pressing the 'Pin Location' button",
        type: "error",
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "OK",
        closeOnConfirm: true
      });
    }
  }

}
