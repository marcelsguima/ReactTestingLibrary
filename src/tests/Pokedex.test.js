import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

import App from '../App';

describe('Testando o Pokedex.js , verificar se', () => {
  test('se a página contém um heading h2 com o texto Encountered pokémons', () => {
    render(<MemoryRouter><App /></MemoryRouter>);

    const encounteredPkmnH2 = screen.getByRole('heading', {
      name: /encountered pokémons/i,
      level: 2,
    });
    expect(encounteredPkmnH2).toBeInTheDocument();
  });

  test('se é exibido o próximo pokémon da lista quando'
  + 'o botão Próximo pokémon é clicado', () => {
    render(<MemoryRouter><App /></MemoryRouter>);

    const nxtBtn = screen.getByRole('button', { name: /próximo pokémon/i });
    expect(nxtBtn).toBeInTheDocument();

    userEvent.click(nxtBtn);
    expect(screen.queryByText(/pikachu/i)).not.toBeInTheDocument();
    const cardName2 = screen.getByText(/charmander/i);
    expect(cardName2).toBeInTheDocument();
  });

  test('os botões de filtragem por tipo possuem o nome correto', () => {
    render(<MemoryRouter><App /></MemoryRouter>);

    const allTypes = ['Electric', 'Fire', 'Bug', 'Poison', 'Psychic', 'Normal', 'Dragon'];

    const allBtns = screen.getAllByTestId('pokemon-type-button');
    allBtns.forEach((btn, index) => {
      expect(btn).toHaveTextContent(allTypes[index]);
    });
  });

  test('se é possível clicar no botão de filtragem', () => {
    render(<MemoryRouter><App /></MemoryRouter>);

    const btnAll = screen.getByRole('button', { name: /all/i });
    expect(btnAll).toBeInTheDocument();
    userEvent.click(btnAll);
  });
});
