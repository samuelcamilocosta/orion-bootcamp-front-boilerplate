import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  constructor(private auth: AuthService, private route: Router) {}

  remove() {
    this.auth.removeItem('token');
    console.log('removeu e redirecionado');

    this.route.navigate(['/']);
  }

  ngOnInit(): void {
    //just as placeholder
    // console.log(this.formGroup.value);

    // check if user is authenticated or not and redirect to another page
    if (!this.auth.isAuthenticated()) {
      this.route.navigate(['/']);
    }
  }
}
