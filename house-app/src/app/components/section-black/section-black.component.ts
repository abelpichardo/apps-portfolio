import { Component, HostListener, Renderer2, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-section-black',
  standalone: true,
  imports: [],
  templateUrl: './section-black.component.html',
  styleUrls: ['./section-black.component.css']
})
export class SectionBlackComponent implements AfterViewInit {

  images: any;
  movementRange: number;

  constructor(private renderer: Renderer2, @Inject(PLATFORM_ID) private platformId: Object) {
    this.movementRange = 10;
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.images = document.querySelectorAll('img.movement'); // Acceder al DOM después de que las imágenes se han renderizado
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      const viewportHeight = window.innerHeight;
      const scrollPosition125vh = viewportHeight * 1.30;
      if (scrollPosition < scrollPosition125vh) {
        this.images.forEach((img: any) => {
          const currentTransform = img.style.transform;
          const regex = /translate3d\(([^,]+)%,\s*([^,]+)%,\s*[^)]+\)/;
          const match = currentTransform.match(regex);
          let currentX = 0;
          let currentY = 0;

          if (match) {
            currentX = parseFloat(match[1]);
            currentY = parseFloat(match[2]);
          }
          const randomX = currentX + Math.random() * this.movementRange - (this.movementRange / 2); // Mover horizontalmente dentro del rango
          const randomY = currentY + Math.random() * this.movementRange - (this.movementRange / 2); // Mover verticalmente dentro del rango

          // Aplicar la transformación aleatoria al estilo en línea de la imagen
          this.renderer.setStyle(img, 'transform', `translate3d(${randomX}%, ${randomY}%, 0) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`);
        });
      }
    }
  }
}
