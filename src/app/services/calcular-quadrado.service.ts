import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CalcularQuadradoService {
  calcularAreaQuadrado(largura: number, altura: number): number {
    return Math.pow(largura * altura, 2);
  }
  validarInputs(largura: number, altura: number): boolean {
    return largura > 0 && altura > 0;
  }
}