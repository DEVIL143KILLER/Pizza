import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { filter } from 'rxjs';
// import {userName}from '../model/user';

@Component({
  selector: 'app-adminheader',
  templateUrl: './adminheader.component.html',
  styleUrl: './adminheader.component.css'
})
export class AdminheaderComponent {
  url: string = '/';
  userName: string = localStorage.getItem('uname') || '';
  constructor(
    private route: Router,
    private authService: AuthService
  ) 
  { }
  
  ngOnInit(): void {
    // this.route.events.pipe(
    //   filter(event => event instanceof NavigationStart)
    // ).subscribe((event: any) => {
    //   this.url = event?.url;
  // };
  this.url = this.route?.routerState?.snapshot?.url; 
  }
  gotourl(url: string): void {
    if (url === 'logout') {
      this.authService.clientLogout();
      return;
    }
    this.route.navigate(["/"+url]);
  }
}
