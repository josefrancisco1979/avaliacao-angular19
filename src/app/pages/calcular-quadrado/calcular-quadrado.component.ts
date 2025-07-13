 import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CalcularQuadradoService } from '../../services/calcular-quadrado.service';

@Component({
  selector: 'app-calcular-quadrado',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './calcular-quadrado.component.html',
  styleUrls: ['./calcular-quadrado.component.css']
})
export class CalcularQuadradoComponent {
  largura: number = 0;
  altura: number = 0;
  resultado: number | null = null;
  erro: string = '';

  constructor(
    private calcularQuadradoService: CalcularQuadradoService,
    private router: Router
  ) {}

  calcular() {
    this.erro = '';
    if (!this.calcularQuadradoService.validarInputs(this.largura, this.altura)) {
      this.erro = 'Por favor, insira valores válidos maiores que zero para largura e altura.';
      this.resultado = null;
      return;
    }
    this.resultado = this.calcularQuadradoService.calcularAreaQuadrado(this.largura, this.altura);
  }

  goBack() {
    this.router.navigate(['/']);
  }
}