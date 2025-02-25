import { Component } from '@angular/core';
import { User } from '../model/user';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  errorMessage: string  = '';
  user: User = new User(0,'','','','','','');
  constructor(private authService: AuthService, private router: Router ) {
    
  }
 
  onSubmit() {
    if (this.user.userName === '') {
      alert("please add User Name");
      // this.errorMessage = 'User name should not be blank';
      document.getElementById('errordiv')?.scrollIntoView(true);
      return;
    }
   
   
    if (this.user.userAddress === '') {
      alert("please add Address");
      document.getElementById('errordiv')?.scrollIntoView(true);
      return;
    }

    if (this.user.phoneNumber === '') {
      alert("please add PhoneNumber .Must have 10 numbers and start from 9 or 6");
      document.getElementById('errordiv')?.scrollIntoView(true);
      return;
    }


    if (this.user.userEmail === '' ) {
      alert("Email Should Not Be Blank");
      // this.errorMessage = 'Email should not be blank';
      document.getElementById('errordiv')?.scrollIntoView(true);
      return;
    }
    const regularExpression = /^[_A-Za-z0-9-\\+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/;
    if (!regularExpression.test(this.user.userEmail)) {
      document.getElementById('errordiv')?.scrollIntoView(true);
      alert("Email is Not Valid");
      // this.errorMessage = 'Email is not valid';
      return;
    }
   
   
        const passwordPatter = /^(?=.[a-z])*(?=.[A-Z])*(?=.\d)*(?=.[@.#$!%?&^])*[A-Za-z\d@.#$!%?&]{8,15}$/;
        if (!passwordPatter.test(this.user.userPassword)) {
      alert('Password must have minimum eight characters, at least one letter and one number, one special chracter');
      return
    }
    // this.user.role="user";
    // console.log('>>>>>', this.user)

    this.errorMessage = '';
   
  // this.user.userRole = "admin";
 this.user.userRole = "user"; 
 console.log(this.user);
    this.authService.registerUser(this.user).pipe(take(1)).subscribe(
      (data:any ) => {
        alert("Account Created Successfully");
        this.router.navigate(['/login']);
      }, error => {
       
        const message = error?.error?.message;
        console.log("",message)
        if (message && message.includes('[Duplicate entry ')) {
          alert("Username / Email / Mobile already available. Please use differnt one.");
        } else {
          alert(" ...You Entered Wrong Input... !");
        }
      }
      
    )
  }

  goBack() {
    this.router.navigate(['/login']); // Replace 'login' with the actual path to your login page
  }
}