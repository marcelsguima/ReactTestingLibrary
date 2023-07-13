import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import App from '../App';

describe('Testando o APP.js , verificar se', () => {
  test('renderiza os links de navegação Home, About e Favorite Pokémons', () => {
    render(<MemoryRouter><App /></MemoryRouter>);

    const linkHome = screen.getByRole('link', { name: /home/i });
    expect(linkHome).toBeInTheDocument();

    const linkAbout = screen.getByRole('link', { name: /about/i });
    expect(linkAbout).toBeInTheDocument();

    const linkFavPkmn = screen.getByRole('link', { name: /favorite pokémons/i });
    expect(linkFavPkmn).toBeInTheDocument();
  });
});
