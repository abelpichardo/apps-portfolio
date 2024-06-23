import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-project-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-component.component.html',
  styleUrl: './project-component.component.css'
})
export class ProjectComponent {
  @Input() index: number | undefined;
  @Input() image: string | undefined; 
}
