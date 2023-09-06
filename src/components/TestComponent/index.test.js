import { render, screen } from "@testing-library/react";
import { test, expect } from "jest";
import TestComponent from "./index";

test("render a text hello world", () => {
  render(<TestComponent />);
  const header = screen.getByText("hello world");
  expect(header).toBeInTheDocument;
});
