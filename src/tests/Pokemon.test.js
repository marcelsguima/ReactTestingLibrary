import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';

import App from '../App';

describe('Testando se', () => {
  test('O nome correto do pokémon deve ser mostrado na tela', () => {
    renderWithRouter(<App />);

    const pkmnName = screen.getByTestId('pokemon-name');
    expect(pkmnName).toBeInTheDocument();
  });

  test('O tipo correto do pokémon deve ser mostrado na tela', () => {
    renderWithRouter(<App />);

    const pkmnType = screen.getByTestId('pokemon-type');
    expect(pkmnType).toBeInTheDocument();
    expect(pkmnType.innerHTML).toBe('Electric');
  });

  test('A imagem do pokémon está sendo exibida com o atributo src correto', () => {
    renderWithRouter(<App />);

    const img = screen.getByAltText('Pikachu sprite');
    expect(img).toBeInTheDocument();
    expect(img.src).toBe('https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
  });

  test('o card do pokémon indicado na Pokédex contém um link More Details', () => {
    renderWithRouter(<App />);

    const about = screen.getByRole('link', { name: /more details/i });
    expect(about).toBeInTheDocument();
    expect(about.href).toContain('/pokemons/25');
  });

  test('clicar no link de navegação, é feito o redirecionamento da aplicação', () => {
    renderWithRouter(<App />);

    const details = screen.getByRole('link', { name: /more details/i });
    expect(details).toBeInTheDocument();

    userEvent.click(details);

    const fav = screen.getByRole('checkbox', { name: /pokémon favoritado\?/i });
    expect(fav.type).toBe('checkbox');
    userEvent.click(fav);

    const star = screen.getByRole('img', { name: /pikachu is marked as favorite/i });
    expect(star.src).toContain('/star-icon.svg');
  });
});
