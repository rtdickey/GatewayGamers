import { render, screen, cleanup } from "@testing-library/react";
import Banner from "./Banner";

afterEach(cleanup);

test("banner renders without children", () => {
  const result = render(<Banner />);
  const someElement = result.container.querySelector("div");
  expect(someElement).toBeInTheDocument();
});

test("banner renders with children", () => {
  const children = "Hello";
  render(<Banner>{children}</Banner>);
  expect(screen.queryByText("Hello")).toBeInTheDocument();
});
