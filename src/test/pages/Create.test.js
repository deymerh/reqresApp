import { render } from '@testing-library/react';
import { Create } from '../../pages/Create';

describe('<Create />', () => {
  test('Renderiza dos cajas de texto en el documento', async () => {
    const component = render(<Create />);
    const input = component.container.querySelectorAll('input');
    expect(input.length).toEqual(2);
  });

});