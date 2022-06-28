import { render, screen } from "@testing-library/react";
import NoteApp from "../pages";

test("renders note app", () => {
  render(<NoteApp />);
  const linkElement = screen.getByText(/note app/i);
  expect(linkElement).toBeInTheDocument();
});
