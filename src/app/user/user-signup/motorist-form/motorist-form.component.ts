import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Motorist } from '../../../models/motorist.model';
import { AngularFire } from 'angularfire2';

declare var swal: any;
@Component({
  selector: 'app-motorist-form',
  templateUrl: './motorist-form.component.html',
  styleUrls: ['./motorist-form.component.scss']
})
export class MotoristFormComponent implements OnInit {

  public motorist = new Motorist();

  constructor( private af: AngularFire, private router: Router ) { }

  ngOnInit() {
  }

  onSignup() {

      //Call firebase createuser
      this.af.auth.createUser({
          email: this.motorist.email_address,
          password: this.motorist.password
      }).then(
          (success) => {
          console.log(success);

          //Then push other fields to firebase real time DB.
          let user_motorist = {
              username: this.motorist.username,
              family_name: this.motorist.family_name,
              given_name: this.motorist.given_name,
              email_address: this.motorist.email_address,
              contact_number: this.motorist.contact_number,
              address: this.motorist.address,
              type: 'motorist',
              license_number: this.motorist.license_number,
              vehicle_information_vehicle_type: this.motorist.vehicle_information_vehicle_type,
              vehicle_information_model_year: this.motorist.vehicle_information_model_year,
              vehicle_information_plate_number: this.motorist.vehicle_information_plate_number
          };

          const users = this.af.database.list('users');
          users.push(user_motorist)
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
      })

  } //end onSignup

}
