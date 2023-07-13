import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { About } from '../pages';

describe('Testando o About.js , verificar se', () => {
//   test('se a página contém dois parágrafos com texto sobre a Pokédex', () => {
//     render(<MemoryRouter><About /></MemoryRouter>);
//   });

  test('se a página contém um heading h2 com o texto About Pokédex', () => {
    render(<MemoryRouter><About /></MemoryRouter>);

    const aboutH2 = screen.getByRole('heading', {
      name: /about pokédex/i,
      level: 2,
    });
    expect(aboutH2).toBeInTheDocument();
  });

  test('se a página contém a imagem de uma Pokédex', () => {
    render(<MemoryRouter><About /></MemoryRouter>);

    const imgPokedex = screen.getByRole('img', {
      name: /pokédex/i,
    });
    expect(imgPokedex.src).toContain('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
