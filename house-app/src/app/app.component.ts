import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SectionBlackComponent } from './components/section-black/section-black.component';
import { ProjectsSectionComponent } from './components/projects-section/projects-section.component';
import { SocialNavBarComponent } from './components/social-nav-bar/social-nav-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,FooterComponent,SectionBlackComponent,ProjectsSectionComponent,SocialNavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'house-app';
}
