import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Button.stories'; // import all stories from the stories file

// Every component that is returned maps 1:1 with the stories, but they already contain all decorators from story level, meta level and global level.
const { Basic } = composeStories(stories);

describe('Button', () => {
  test('renders primary button with default args', () => {
    render(<Basic />);
    const buttonElement = screen.getByText(/Button/i);
    expect(buttonElement).not.toBeNull();
  });
  test('renders primary button with overriden props', () => {
    render(<Basic>Hello world</Basic>); // you can override props and they will get merged with values from the Story's args
    const buttonElement = screen.getByText(/Hello world/i);
    expect(buttonElement).not.toBeNull();
  });
  test('onclick handler is called', () => {
    const onClickSpy = jest.fn();
    render(<Basic onClick={onClickSpy} />);
    const buttonElement = screen.getByRole('button');
    buttonElement.click();
    expect(onClickSpy).toHaveBeenCalled();
  });
});
