import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image_url: string;
  created_at: string;
}

export interface BlogPost {
  id: number;
  title: string;
  content: string;
  author: string;
  image_url: string;
  created_at: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getProjects(category?: string): Observable<Project[]> {
    const url = category ? `${this.apiUrl}/projects?category=${category}` : `${this.apiUrl}/projects`;
    return this.http.get<Project[]>(url);
  }

  getProject(id: number): Observable<Project> {
    return this.http.get<Project>(`${this.apiUrl}/projects/${id}`);
  }

  getBlogPosts(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>(`${this.apiUrl}/blog`);
  }

  getBlogPost(id: number): Observable<BlogPost> {
    return this.http.get<BlogPost>(`${this.apiUrl}/blog/${id}`);
  }

  sendContactMessage(contactData: { name: string; email: string; message: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/contact`, contactData);
  }
}