import { fireEvent, render, waitFor } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

// this test won't pass (yet), but is here just to show that custom function on mathlive is not available in tests
describe('test', () => {
  it('renders learn react link', async () => {
    const { getByTestId } = render(<App />);

    userEvent.type(getByTestId('test-id'), '10 + 2')

    // fireEvent.input(getByTestId('test-id'), {
    //   target: {value: '10+2'}
    // })

    await waitFor(() => {
      expect(getByTestId('result')).toHaveTextContent('Value: 10 + 2')
    })
  });
})