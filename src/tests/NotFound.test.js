import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { NotFound } from '../pages';

describe('Testando o About.js , verificar se', () => {
  test('se a página contém um heading h2 com o texto Page requested not found', () => {
    render(<MemoryRouter><NotFound /></MemoryRouter>);

    const notFoundH2 = screen.getByRole('heading', {
      name: /page requested not found/i,
      level: 2,
    });
    expect(notFoundH2).toBeInTheDocument();
  });

  test('se a página contém a imagem do pikachu', () => {
    render(<MemoryRouter><NotFound /></MemoryRouter>);

    const imgPikachu = screen.getByRole('img', {
      name: /pikachu crying because the page requested was not found/i,
    });
    expect(imgPikachu.src).toContain('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
