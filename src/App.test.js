import { render, fireEvent } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
// import axios from 'axios';



test('/ route', () => {
  const {getByText} = render((
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  ));

  expect(getByText("Welcome")).toBeInTheDocument();
});


test('/navbar link - companies', () => {
  const {getByText} = render((
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  ));

  expect(getByText("Welcome")).toBeInTheDocument();
  const link = getByText('Companies');
  fireEvent.click(link);
  expect(getByText("Companies"))
});

test('/navbar link - jobs', () => {
  const {getByText} = render((
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  ));

  expect(getByText("Welcome")).toBeInTheDocument();
  const link = getByText('Jobs');
  fireEvent.click(link);
  expect(getByText("Jobs"))
});
