 import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthApiService } from '../../services/auth-api.service';

@Component({
  selector: 'app-auth-api',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  template: `
    <h2>Lista de Posts</h2>
    <table>
      <thead>
        <tr><th>Título</th><th>Conteúdo</th></tr>
      </thead>
      <tbody>
        <tr *ngFor="let post of posts">
          <td>{{ post.title }}</td>
          <td>{{ post.body }}</td>
        </tr>
      </tbody>
    </table>
  `,
  styles: [`
    table { width: 100%; border-collapse: collapse; }
    th, td { border: 1px solid #ccc; padding: 10px; text-align: left; }
    th { background-color: #eee; }
  `]
})
export class AuthApiComponent implements OnInit {
  posts: any[] = [];
  constructor(private servico: AuthApiService) {}
  ngOnInit() {
    this.servico.getPosts().subscribe(data => this.posts = data);
  }
}