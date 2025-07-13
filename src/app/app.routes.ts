import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CalcularQuadradoComponent } from './pages/calcular-quadrado/calcular-quadrado.component';
import { AuthApiComponent } from './pages/auth-api/auth-api.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'calcular-quadrado', component: CalcularQuadradoComponent },
  { path: 'auth-api', component: AuthApiComponent },
  { path: '**', redirectTo: '' }
];