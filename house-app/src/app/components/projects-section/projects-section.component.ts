import { Component } from '@angular/core';
import { ProjectComponent } from './project-component/project-component.component';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [ProjectComponent],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.css'
})
export class ProjectsSectionComponent {

}
