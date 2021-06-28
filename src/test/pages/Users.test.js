import { render } from '@testing-library/react';
import { Users } from '../../pages/Users';

describe('<Users/>', () => {
  test('Cantidad de tablas en el documento', async () => {
    const component = render(<Users />);
    const table = component.container.querySelectorAll('table');
    expect(table.length).toEqual(1);
  });
});