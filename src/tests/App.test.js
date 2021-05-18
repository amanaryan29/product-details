import { render } from "@testing-library/react";
import App from "../views/App";

test("renders without crashing", () => {
  render(<App />);
});
