import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Formulario from './index';

describe('Deve renderizar o campo de input', () => {
  test('Verificar Placeholder', () => {
    render(<Formulario />);
    const textoInput = screen.getByPlaceholderText('Digite um valor');
    expect(textoInput).toBeInTheDocument;
  });

  test('Verificar type number', () => {
    render(<Formulario />);
    const campoTexto = screen.getByPlaceholderText('Digite um valor');
    expect(campoTexto).toHaveAttribute('type', 'number');
  });

  test('Valor do campo input preenchido', () => {
    render(<Formulario />);
    const campoTexto = screen.getByPlaceholderText('Digite um valor');
    userEvent.type(campoTexto, '10');
    expect(campoTexto).toHaveValue(10);
  });
});

test('Deve chamar o evento de onSubmit ao clicar em realizar transação', () => {
  const realizarTransacao = jest.fn();

  render(<Formulario realizarTransacao={realizarTransacao} />);
  const botao = screen.getByRole('button');

  userEvent.click(botao);
  expect(realizarTransacao).toHaveBeenCalledTimes(1);
});
