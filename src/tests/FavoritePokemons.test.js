import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { FavoritePokemons } from '../pages';

describe('Testando o FavoritePokemons.js , verificar se', () => {
  test('Teste se é exibida na tela a mensagem No favorite pokemon found'
  + 'caso a pessoa não tenha pokémons favoritos;', () => {
    render(<MemoryRouter><FavoritePokemons /></MemoryRouter>);

    const favPkmn = screen.getByText(/no favorite pokemon found/i);
    expect(favPkmn).toBeInTheDocument();
  });
});
