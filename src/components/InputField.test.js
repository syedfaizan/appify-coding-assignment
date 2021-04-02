import { render, screen } from '@testing-library/react';
import InputField from './InputField';

test('renders error text when no InputField data passed', () => {
  render(<InputField />);
  const inputElement = screen.getByTestId('input-error');
  expect(inputElement).toBeInTheDocument();
});


test('renders error input of number type', () => {
  let formItem = {
    "label": "Mobile",
    "id": "mobile",
    "type": "number",
    "sequence": 2
  };
  render(<InputField {...formItem}/>);
  const inputElement = screen.getByTestId('data-mobile');
  expect(inputElement).toBeInTheDocument();
});
