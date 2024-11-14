import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { SignupFormComponent } from '../signup-form/signup-form.component';
import { SignupPageComponent } from '../../pages/signup-page/signup-page.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, SignupPageComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  private route: Router = inject(Router);

  navigateToSignUpPage(): void {
    this.route.navigate(['/signup']);
  }
}
