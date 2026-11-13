import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDetalhe } from './pokemon-detalhe';

describe('PokemonDetalhe', () => {
  let component: PokemonDetalhe;
  let fixture: ComponentFixture<PokemonDetalhe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonDetalhe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonDetalhe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
