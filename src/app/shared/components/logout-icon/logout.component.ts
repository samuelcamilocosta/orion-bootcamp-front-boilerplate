import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent {
  constructor(private auth: AuthService, private route: Router) {}

  logout() {
    this.auth.removeItem('token');

    this.route.navigate(['/']);
  }
}
