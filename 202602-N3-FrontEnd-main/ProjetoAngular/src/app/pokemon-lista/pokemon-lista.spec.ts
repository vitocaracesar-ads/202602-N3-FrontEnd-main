import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonLista } from './pokemon-lista';

describe('PokemonLista', () => {
  let component: PokemonLista;
  let fixture: ComponentFixture<PokemonLista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonLista]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonLista);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
