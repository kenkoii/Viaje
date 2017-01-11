import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFire } from 'angularfire2';
import { Safezone } from '../../../models/safezone.model';

@Component({
  selector: 'app-safezone-form',
  templateUrl: './safezone-form.component.html',
  styleUrls: ['./safezone-form.component.scss']
})
export class SafezoneFormComponent implements OnInit {

  public safezone = new Safezone();

  constructor( private af: AngularFire, private router: Router ) { }

  ngOnInit() {
  }

  onSignupSafezone() {



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
          safezones.push(user_safezone);

      }).catch(
          (err) => {
          console.log(err);
      })


  }

}
