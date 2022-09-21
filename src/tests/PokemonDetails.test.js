import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

import App from '../App';

describe('Testando o PokemonDetails.js , verificar se', () => {
  test('É exibido na tela um h2 com o texto <name> Details', () => {
    render(<MemoryRouter><App /></MemoryRouter>);

    const detailsBtn = screen.getByRole('link', { name: /more details/i });
    userEvent.click(detailsBtn);

    const detailsH2 = screen.getByRole('heading', { name: /pikachu details/i });
    expect(detailsH2).toBeInTheDocument();
  });

  test('É exibido na tela um h2 com o texto Summary', () => {
    render(<MemoryRouter><App /></MemoryRouter>);

    const detailsBtn = screen.getByRole('link', { name: /more details/i });
    userEvent.click(detailsBtn);

    const summaryH2 = screen.getByRole('heading', { name: /summary/i });
    expect(summaryH2).toBeInTheDocument();
  });

  test('É exibido na tela um texto contendo <summary>', () => {
    render(<MemoryRouter><App /></MemoryRouter>);

    const detailsBtn = screen.getByRole('link', { name: /more details/i });
    userEvent.click(detailsBtn);

    const summaryText = screen.getByText(/this intelligent pokémon roasts hard/i);
    expect(summaryText).toBeInTheDocument();
  });

  test('É exibido na tela um h2 com o Game Locations of <name>', () => {
    render(<MemoryRouter><App /></MemoryRouter>);

    const detailsBtn = screen.getByRole('link', { name: /more details/i });
    userEvent.click(detailsBtn);

    const locationsH2 = screen.getByRole('heading', { name: /game locations of/i });
    expect(locationsH2).toBeInTheDocument();
  });

  test('São exibidas na tela imagens de localização com o src correto', () => {
    render(<MemoryRouter><App /></MemoryRouter>);

    const detailsBtn = screen.getByRole('link', { name: /more details/i });
    userEvent.click(detailsBtn);

    const src = screen.getAllByAltText(/location/);
    expect(src[0]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
    expect(src[1]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png');
  });

  test('É exibido na tela uma label com o texto Pokémon favoritado?', () => {
    render(<MemoryRouter><App /></MemoryRouter>);

    const detailsBtn = screen.getByRole('link', { name: /more details/i });
    userEvent.click(detailsBtn);

    const favLabel = screen.getByText(/pokémon favoritado\?/i);
    expect(favLabel).toHaveAttribute('for', 'favorite');
  });
});
