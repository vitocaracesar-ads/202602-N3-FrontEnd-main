import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon-service';

@Component({
  selector: 'app-pokemon-lista',
  standalone: false,
  templateUrl: './pokemon-lista.html',
  styleUrl: './pokemon-lista.css',
})
export class PokemonLista implements OnInit {
  pokemons: any[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.pokemonService.listar(20).subscribe({
      next: (data: any) => {
        this.pokemons = data.results.map((p: any) => {
          // a URL termina em .../pokemon/{id}/
          const id = Number(p.url.split('/').filter(Boolean).pop());
          return {
            id,
            nome: p.name,
            imagem: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
          };
        });
      },
      error: (e) => console.error('Erro ao listar Pokémon:', e)
    });
  }
}