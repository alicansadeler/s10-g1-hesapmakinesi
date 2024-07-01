import { beforeEach, expect, test } from 'vitest';

import React from 'react';
import App from '../App';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import userEvent from '@testing-library/user-event';

beforeEach(() => {
  render(<App />);
});

test('Başlangıç operations değeri + olarak doğru ayarlanmış', () => {
  const operation = document.querySelector('#operation');
  expect(operation.textContent).toBe('Operation: +');
});

test('Başlangıç memory değeri 0 olarak doğru ayarlanmış', () => {
  const operation = document.querySelector('#memory');
  expect(operation.textContent).toBe('Memory: 0');
});

test('Başlangıç total değeri 0 olarak doğru ayarlanmış', () => {
  const operation = document.querySelector('#total');
  expect(operation.textContent).toBe('0');
});

test('1, 2, 3 rakamına tıklanınca ekranda 123 sayısını gösteriyor', async () => {
  const user = userEvent.setup();
  await user.click(screen.getByText('1'));
  await user.click(screen.getByText('2'));
  await user.click(screen.getByText('3'));
  await screen.findByText('123');
});

test('CE ekranı sıfırlıyor', async () => {
  const user = userEvent.setup();
  const operation = document.querySelector('#total');
  await user.click(screen.getByText('2'));
  expect(operation.textContent).toBe('2');
  await user.click(screen.getByText('CE'));
  expect(operation.textContent).toBe('0');
});

test('operatörlere tıklanınca ekranda 0 görünüyor.', async () => {
  const user = userEvent.setup();
  const operation = document.querySelector('#total');
  await user.click(screen.getByText('CE'));
  await user.click(screen.getByText('2'));
  expect(operation.textContent).toBe('2');
  await user.click(screen.getByText('*'));
  expect(operation.textContent).toBe('0');

  await user.click(screen.getByText('2'));
  await user.click(screen.getByText('+'));
  expect(operation.textContent).toBe('0');

  await user.click(screen.getByText('2'));
  await user.click(screen.getByText('/'));
  expect(operation.textContent).toBe('0');

  await user.click(screen.getByText('2'));
  await user.click(screen.getByText('-'));
  expect(operation.textContent).toBe('0');
});

test('operatörlere tıklanınca Operation: metni doğru işlemi gösteriyor.', async () => {
  const user = userEvent.setup();
  const operation = document.querySelector('#operation');
  await user.click(screen.getByText('*'));
  expect(operation.textContent).toBe('Operation: *');

  await user.click(screen.getByText('+'));
  expect(operation.textContent).toBe('Operation: +');

  await user.click(screen.getByText('/'));
  expect(operation.textContent).toBe('Operation: /');

  await user.click(screen.getByText('-'));
  expect(operation.textContent).toBe('Operation: -');
});

test('Memory add(M+) butonu ekrandaki değeri hafızaya(memory) aktarıyor.', async () => {
  const user = userEvent.setup();
  const operation = document.querySelector('#memory');
  await user.click(screen.getByText('1'));
  await user.click(screen.getByText('2'));
  await user.click(screen.getByText('M+'));
  expect(operation.textContent).toBe('Memory: 12');
});

test('Memory clear(MC) butonu memorydeki değeri sıfırlıyor.', async () => {
  const user = userEvent.setup();
  const operation = document.querySelector('#memory');
  await user.click(screen.getByText('1'));
  await user.click(screen.getByText('2'));
  await user.click(screen.getByText('M+'));
  expect(operation.textContent).toBe('Memory: 12');
  await user.click(screen.getByText('MC'));
  expect(operation.textContent).toBe('Memory: 0');
});

test('Memory recall(MR) butonu memorydeki değeri ekrana getiriyor.', async () => {
  const user = userEvent.setup();
  const memory = document.querySelector('#memory');
  const display = document.querySelector('#total');
  await user.click(screen.getByText('2'));
  await user.click(screen.getByText('3'));
  await user.click(screen.getByText('M+'));
  expect(memory.textContent).toBe('Memory: 23');
  await user.click(screen.getByText('CE'));
  expect(display.textContent).toBe('0');
  await user.click(screen.getByText('MR'));
  expect(display.textContent).toBe('23');
});

test('= ile işlemin sonucu ekrana geliyor. (23-15 = 8)', async () => {
  const user = userEvent.setup();
  const operation = document.querySelector('#operation');
  const display = document.querySelector('#total');
  await user.click(screen.getByText('CE'));
  await user.click(screen.getByText('2'));
  await user.click(screen.getByText('3'));
  await user.click(screen.getByText('-'));
  await user.click(screen.getByText('1'));
  await user.click(screen.getByText('5'));
  await user.click(screen.getByText('='));
  expect(display.textContent).toBe('8');
});