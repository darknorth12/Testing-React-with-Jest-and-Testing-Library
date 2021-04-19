import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const element = screen.getByRole("link", { name: /learn react/i });
  expect(element).toBeInTheDocument();
});