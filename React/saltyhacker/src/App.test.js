import React from 'react';
import { render, fireEvent, getByTestId } from '@testing-library/react';
import {act} from "react-dom/test-utils";
import App from './App';

test("renders app without crashing", () => {
  render(<App />)
})

test('login works successfully', () =>{
  const {getByPlaceholderText, getByTestId} = render(<App />)

  const userField = getByPlaceholderText(/username/i)
  const passField = getByPlaceholderText(/password/i)
  const loginButton = getByTestId(/submitButton/i)


  act(()=> {
    fireEvent.change(userField, {target: { value: "newAccount"}})
    fireEvent.change(passField, {target: { value: "abcccccc"}})
    fireEvent.click(loginButton)
  })

  expect(userField).toBeVisible();
  expect(passField).toBeVisible();
})

test('register works successfully', () =>{
  const {getByPlaceholderText, getByTestId, getByText} = render(<App />)
  const createButton = getByText(/create an account/i)
  const userField = getByPlaceholderText(/username/i)
  const passField = getByPlaceholderText(/password/i)
  const loginButton = getByTestId(/submitButton/i)


  act(()=> {
    fireEvent.click(createButton);
    fireEvent.change(userField, {target: { value: "newAccount"}})
    fireEvent.change(passField, {target: { value: "abcccccc"}})
    fireEvent.click(loginButton)
  })

  expect(userField).toBeVisible();
  expect(passField).toBeVisible();
  
})