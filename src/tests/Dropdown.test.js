import { render, cleanup } from "@testing-library/react";

import Dropdown from "../components/Dropdown";

afterEach(cleanup);

test("renders without crashing", () => {
  render(<Dropdown />);
});

test("renders length selection correctly", () => {
  render(<Dropdown id="length" label="Common Shade Length (Inches)" />);
});

test("renders width selection correctly", () => {
  render(<Dropdown id="length" label="Common Shade Length (Inches)" />);
});
