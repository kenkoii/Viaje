import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  private isMenuClose: boolean = true;
  emergencies: any;
  constructor(private userService: UserService) {
     
  }

  ngOnInit() {
  }

  openMenuBar(){
    this.isMenuClose = !this.isMenuClose;
  }

}
