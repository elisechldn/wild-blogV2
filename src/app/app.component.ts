import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { ArticleThumbnailComponent } from './components/article-thumbnail/article-thumbnail.component';
import { ArticlePageComponent } from './pages/article-page/article-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HomePageComponent, ContactFormComponent, SignupPageComponent, SignupFormComponent,ArticleThumbnailComponent, ArticlePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'wild-blog';
}
