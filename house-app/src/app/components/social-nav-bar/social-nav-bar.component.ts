import { isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, PLATFORM_ID} from '@angular/core';

@Component({
  selector: 'app-social-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './social-nav-bar.component.html',
  styleUrl: './social-nav-bar.component.css'
})
export class SocialNavBarComponent {
  currentColor = "fill-primary_white";

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
      console.log(scrollPosition)
      if (scrollPosition > 400 && scrollPosition < 2400 ) {
        this.currentColor = 'fill-primary_black';
      } else {
        this.currentColor = 'fill-primary_white'; 
      
      }
    }
  }

}
