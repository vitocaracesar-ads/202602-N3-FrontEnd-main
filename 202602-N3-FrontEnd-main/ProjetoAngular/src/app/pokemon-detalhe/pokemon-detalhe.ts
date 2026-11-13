import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../services/pokemon-service';

@Component({
  selector: 'app-pokemon-detalhe',
  standalone: false,
  templateUrl: './pokemon-detalhe.html',
  styleUrl: './pokemon-detalhe.css',
})
export class PokemonDetalhe implements OnInit {
  pokemon: any = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService
  ) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pokemonService.obterPorId(id).subscribe({
      next: (data) => this.pokemon = data,
      error: (e) => console.error('Erro ao obter Pokémon:', e)
    });
  }

  voltar() {
    this.router.navigate(['/pokemon']);
  }
}