import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

interface HeroSlide {
  title: string;
  subtitle: string;
  image: string;
  number: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  currentSlideIndex = 0;
  isTransitioning = true; // Start with true to trigger initial animation
  private autoSlideInterval: any;
  
  heroSlides: HeroSlide[] = [
    {
      title: 'Latina',
      subtitle: 'de construcciones',
      image: 'assets/home/banner1.png',
      number: '01'
    },
    {
      title: 'Innovación',
      subtitle: 'en cada proyecto',
      image: 'assets/home/banner1.png',
      number: '02'
    },
    {
      title: 'Calidad',
      subtitle: 'garantizada',
      image: 'assets/home/banner1.png',
      number: '03'
    }
  ];

  ngOnInit(): void {
    // Trigger initial animation
    setTimeout(() => {
      this.isTransitioning = false;
      // Start auto-slide after initial animation
      this.startAutoSlide();
    }, 1200);
  }

  ngOnDestroy(): void {
    // Clean up interval when component is destroyed
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  startAutoSlide(): void {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 8000);
  }

  resetAutoSlide(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
    this.startAutoSlide();
  }

  get currentSlide(): HeroSlide {
    return this.heroSlides[this.currentSlideIndex];
  }

  nextSlide() {
    this.isTransitioning = true;
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.heroSlides.length;
    
    setTimeout(() => {
      this.isTransitioning = false;
    }, 1200);
  }

  prevSlide() {
    this.isTransitioning = true;
    this.currentSlideIndex = this.currentSlideIndex === 0 
      ? this.heroSlides.length - 1 
      : this.currentSlideIndex - 1;
    
    this.resetAutoSlide(); // Reset auto-slide timer when user manually navigates
    
    setTimeout(() => {
      this.isTransitioning = false;
    }, 1200);
  }
}