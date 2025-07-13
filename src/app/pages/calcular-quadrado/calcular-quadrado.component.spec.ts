import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcularQuadradoComponent } from './calcular-quadrado.component';

describe('CalcularQuadradoComponent', () => {
  let component: CalcularQuadradoComponent;
  let fixture: ComponentFixture<CalcularQuadradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalcularQuadradoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalcularQuadradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
