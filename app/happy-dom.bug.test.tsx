import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { FC } from "react";

type ViewProps = {};

export const View: FC<ViewProps> = ({}) => {
  return (
    <div>
      <button>Hi</button>
    </div>
  );
};

describe("test", () => {
  it("should", () => {
    render(<View />);

    const button = screen.getByRole("button", { name: /hi/i });

    userEvent.click(button);
  });
  it("should", () => {
    render(<View />);

    const button = screen.getByRole("button", { name: /hi/i });

    userEvent.click(button);
  });
});
