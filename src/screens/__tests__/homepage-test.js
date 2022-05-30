import React from 'react';
import renderer from 'react-test-renderer';
import {Homepage} from '../Homepage';

const mockedDispatch = jest.fn();

jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: mockedDispatch,
    }),
  };
});


describe("HomePage", () => {
  beforeEach(() => {
    mockedDispatch.mockClear();
  });
  test('renders homepage correctly', () => {
    const tree = renderer.create(<Homepage/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
