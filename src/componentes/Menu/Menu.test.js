import React from 'react';
import { render, screen } from '@testing-library/react';
import Menu from './index.jsx';
import { listaMenu } from './index.jsx';

test('Buscar item do Menu', () => {
  render(<Menu listaMenu={listaMenu} />);
  // Busca um elemento que tenha o texto passado
  const nomeMenu = screen.getByText('Início');
  expect(nomeMenu).toBeInTheDocument();
});

test('Renderizar uma lista do Menu', () => {
  render(<Menu />);
  // Retorna um array com todos os links
  const listaLinks = screen.getAllByRole('link');
  expect(listaLinks).toHaveLength(4);
});

test('Não deve renderizar o link para Extrato', () => {
  render(<Menu />);
  const linkExtrato = screen.queryByText('Extrato');
  // Se está presente na árvore do DOM
  expect(linkExtrato).not.toBeInTheDocument();
});

test('Verificar existência de classe', () => {
  render(<Menu />);
  const classItem = screen.getAllByRole('link');
  classItem.forEach((link) => expect(link).toHaveClass('link'));
  expect(classItem).toMatchSnapshot();
});
