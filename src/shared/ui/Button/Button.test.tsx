import { render, screen } from "@testing-library/react";
import { Button, ThemeButton } from "./Button";

describe("Button test", () => {
  test("first test button", () => {
    render(<Button>Test</Button>);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  test("button with firs param", () => {
    render(<Button theme={ThemeButton.CLEAR}>Test</Button>);
    expect(screen.getByText("Test")).toHaveClass("clear");
  });
});
