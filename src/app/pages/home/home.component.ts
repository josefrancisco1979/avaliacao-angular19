import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="home-container">
      <div class="welcome-section">
        <h2>Bem-vindo à Aplicação</h2>
        <p>Selecione uma das opções abaixo para começar:</p>
      </div>
      
      <div class="buttons-container">
        <button 
          class="action-button calculate-btn"
          (click)="navigateToCalculator()">
          <span class="button-icon">📐</span>
          Calcular Área ao Quadrado
        </button>
        
        <button 
          class="action-button auth-btn"
          (click)="navigateToAuth()">
          <span class="button-icon">🔐</span>
          Autenticar e Listar Dados
        </button>
      </div>
    </div>
  `,
  styles: [`
    .home-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 60vh;
      padding: 2rem;
    }
    
    .welcome-section {
      text-align: center;
      margin-bottom: 3rem;
      color: white;
    }
    
    .welcome-section h2 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    }
    
    .welcome-section p {
      font-size: 1.2rem;
      opacity: 0.9;
    }
    
    .buttons-container {
      display: flex;
      gap: 2rem;
      flex-wrap: wrap;
      justify-content: center;
    }
    
    .action-button {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      padding: 2rem 3rem;
      border: none;
      border-radius: 15px;
      font-size: 1.2rem;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
      min-width: 250px;
    }
    
    .calculate-btn {
      background: linear-gradient(135deg, #ff6b6b, #ee5a52);
      color: white;
    }
    
    .auth-btn {
      background: linear-gradient(135deg, #4ecdc4, #44a08d);
      color: white;
    }
    
    .action-button:hover {
      transform: translateY(-5px);
      box-shadow: 0 12px 35px rgba(0, 0, 0, 0.3);
    }
    
    .button-icon {
      font-size: 3rem;
    }
    
    @media (max-width: 768px) {
      .buttons-container {
        flex-direction: column;
        align-items: center;
      }
      
      .action-button {
        min-width: 200px;
      }
    }
  `]
})
export class HomeComponent {
  constructor(private router: Router) {}
  
  navigateToCalculator() {
    this.router.navigate(['/calcular-quadrado']);
  }
  
  navigateToAuth() {
    this.router.navigate(['/auth-api']);
  }
}
