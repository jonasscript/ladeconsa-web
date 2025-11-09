import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ApiService, Project } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CardModule, ButtonModule, RouterModule, CommonModule],
  template: `
    <div class="projects-container">
      <h1 class="text-center mb-4">Nuestros Proyectos</h1>

      <div class="mb-4">
        <p-button
          label="Todos"
          [outlined]="selectedCategory !== 'all'"
          (click)="filterProjects('all')"
          class="mr-2">
        </p-button>
        <p-button
          label="Edificaciones"
          [outlined]="selectedCategory !== 'edificaciones'"
          (click)="filterProjects('edificaciones')"
          class="mr-2">
        </p-button>
        <p-button
          label="Casas"
          [outlined]="selectedCategory !== 'casas'"
          (click)="filterProjects('casas')"
          class="mr-2">
        </p-button>
        <p-button
          label="Remodelaciones"
          [outlined]="selectedCategory !== 'remodelaciones'"
          (click)="filterProjects('remodelaciones')"
          class="mr-2">
        </p-button>
      </div>

      <div class="grid">
        <div class="col-12 md:col-6 lg:col-4" *ngFor="let project of filteredProjects">
          <p-card [header]="project.title" class="project-card">
            <p>{{ project.description }}</p>
            <ng-template pTemplate="footer">
              <p-button label="Ver Detalles" styleClass="p-button-outlined"></p-button>
            </ng-template>
          </p-card>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .projects-container {
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
    .project-card {
      height: 100%;
    }
  `]
})
export class ProjectsComponent implements OnInit {
  allProjects: Project[] = [];
  edificaciones: Project[] = [];
  casas: Project[] = [];
  remodelaciones: Project[] = [];
  filteredProjects: Project[] = [];
  selectedCategory: string = 'all';

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loadProjects();

    this.route.queryParams.subscribe(params => {
      if (params['category']) {
        this.filterProjects(params['category']);
      }
    });
  }

  loadProjects(): void {
    this.apiService.getProjects().subscribe({
      next: (projects) => {
        this.allProjects = projects;
        this.edificaciones = projects.filter(p => p.category === 'edificaciones');
        this.casas = projects.filter(p => p.category === 'casas');
        this.remodelaciones = projects.filter(p => p.category === 'remodelaciones');
        this.filteredProjects = this.allProjects;
      },
      error: (error) => {
        console.error('Error loading projects:', error);
      }
    });
  }

  filterProjects(category: string): void {
    this.selectedCategory = category;
    switch (category) {
      case 'edificaciones':
        this.filteredProjects = this.edificaciones;
        break;
      case 'casas':
        this.filteredProjects = this.casas;
        break;
      case 'remodelaciones':
        this.filteredProjects = this.remodelaciones;
        break;
      default:
        this.filteredProjects = this.allProjects;
        break;
    }
  }
}