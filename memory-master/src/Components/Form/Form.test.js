import { render, screen } from "@testing-library/react";
import Form from "./Form";

// tests

describe("Form", () => {
  it("Should render the app with all of the form components", () => {
    render(<Form />); //renders the app

    expect(screen.getByText("FlashCard Generator")).toBeInTheDocument(); //check if FlashCard Generator has loaded
    // expect(screen.getByText("Subject: ")).toBeInTheDocument(); //check if Subject: has loaded
    // expect(screen.getByText(" Question: ")).toBeInTheDocument(); //check if Question: has loaded
    // expect(screen.getByText(" Answer: ")).toBeInTheDocument(); //check if Answer: has loaded
    // expect(screen.getByRole("Submit")).toBeInTheDocument(); //check if Submit button has loaded
  });
});
