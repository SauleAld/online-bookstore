import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    // Handle login logic here
    this.authService.login(this.username, this.password).subscribe(
      response => {
        console.log('Login successful', response);
        this.authService.setToken(response.token); 
        this.router.navigate(["/books"]);// Assuming the response contains a token
        // Redirect to another page or perform other actions on successful login
      },
      error => {
        console.error('Login failed', error);
        this.errorMessage = 'Invalid username or password';
      }
    );
    console.log('Login form submitted');
  }

}
