import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ApiService, BlogPost } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CardModule, ButtonModule, CommonModule, RouterModule],
  template: `
    <div class="blog-container">
      <h1 class="text-center mb-4">Nuestro Blog</h1>

      <div class="grid">
        <div class="col-12 md:col-6 lg:col-4" *ngFor="let post of blogPosts">
          <p-card [header]="post.title" class="blog-card">
            <p class="text-sm text-gray-600 mb-2">Por {{ post.author }} - {{ post.created_at | date:'shortDate' }}</p>
            <p>{{ post.content.substring(0, 150) }}...</p>
            <ng-template pTemplate="footer">
              <p-button label="Leer Más" styleClass="p-button-outlined"></p-button>
            </ng-template>
          </p-card>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .blog-container {
      max-width: 1200px;
      margin: 0 auto;
    }
    .grid {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    }
    .col-12 {
      flex: 0 0 100%;
    }
    .col-12.md\\:col-6 {
      flex: 0 0 100%;
    }
    .col-12.md\\:col-6.lg\\:col-4 {
      flex: 0 0 100%;
    }
    @media (min-width: 768px) {
      .col-12.md\\:col-6 {
        flex: 0 0 calc(50% - 1rem);
      }
      .col-12.md\\:col-6.lg\\:col-4 {
        flex: 0 0 calc(50% - 1rem);
      }
    }
    @media (min-width: 1024px) {
      .col-12.md\\:col-6.lg\\:col-4 {
        flex: 0 0 calc(33.333% - 1rem);
      }
    }
    .blog-card {
      height: 100%;
    }
    .text-sm {
      font-size: 0.875rem;
    }
    .text-gray-600 {
      color: #6b7280;
    }
  `]
})
export class BlogComponent implements OnInit {
  blogPosts: BlogPost[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadBlogPosts();
  }

  loadBlogPosts(): void {
    this.apiService.getBlogPosts().subscribe({
      next: (posts) => {
        this.blogPosts = posts;
      },
      error: (error) => {
        console.error('Error loading blog posts:', error);
      }
    });
  }
}