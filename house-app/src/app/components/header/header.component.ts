import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentImage: string = 'assets/logo.png'; 

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.onWindowScroll(); 
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      const viewportHeight = window.innerHeight; 

      const scrollPosition135vh = viewportHeight * 1.35; 
      
      if (scrollPosition > scrollPosition135vh) {
        this.currentImage = 'assets/logo_negro.png';
      } else {
        this.currentImage = 'assets/logo.png'; 

      }
    }
  }
}
