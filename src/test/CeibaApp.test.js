import { render, screen } from '@testing-library/react';
import { CeibaApp } from '../CeibaApp';

describe('Pruebas en <CeibaApp/>', () => {
  test('El Título Iniciar Sesión debería estar renderizado', () => {
    render(<CeibaApp />);
    const text = screen.getByText('Iniciar Sesión');
    expect(text).toBeInTheDocument();
  });
});
