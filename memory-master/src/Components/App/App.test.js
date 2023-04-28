// import { render, screen } from "@testing-library/react";
// import App from "./App";

// // tests

// describe("App", () => {
//   it("Should render the app with all its components", () => {
//     render(<App />); //renders the app
//     expect(screen.getByRole("main")).toBeInTheDocument(); //check if main has loaded
//     expect(screen.getByText("Memory Master")).toBeInTheDocument(); //check if the app has loaded
//     expect(screen.getAllByAltText("Memory-Master-Logo")).toBeInTheDocument(); //check if logo has loaded
//     expect(screen.getByClassName("Form-div")).toBeInTheDocument(); //check if Form-div has loaded
//     expect(screen.getByText("FlashCard Generator")).toBeInTheDocument(); //check if FlashCard Generator has loaded
//     expect(screen.getByText("Subject:")).toBeInTheDocument(); //check if Subject: has loaded
//     expect(screen.getByText("Question:")).toBeInTheDocument(); //check if Question: has loaded
//     expect(screen.getByText("Answer:")).toBeInTheDocument(); //check if Answer: has loaded
//     expect(screen.getByText("Submit")).toBeInTheDocument(); //check if Submit button has loaded
//     //check if next and previous button has loaded
//     expect(screen.getByText("Next Card")).toBeInTheDocument();
//     expect(screen.getByText("Previous Card")).toBeInTheDocument();

//     //check if reveal button has loaded
//     expect(screen.getByText("Reveal Answer")).toBeInTheDocument();

//     //check if an item in the subject list has loaded
//     expect(screen.getByText("Computational Thinking")).toBeInTheDocument();

//     //check if the subject card div has loaded
//     expect(screen.getByClassName("subject-div")).toBeInTheDocument();
//   });
// });

// describe("Form", () => {
//   it("Should render the app with all of the form components", () => {
//     render(<App />); //renders the app

//     expect(screen.getByText("FlashCard Generator")).toBeInTheDocument(); //check if FlashCard Generator has loaded
//     expect(screen.getByText("Subject:")).toBeInTheDocument(); //check if Subject: has loaded
//     expect(screen.getByText("Question:")).toBeInTheDocument(); //check if Question: has loaded
//     expect(screen.getByText("Answer:")).toBeInTheDocument(); //check if Answer: has loaded
//     expect(screen.getByText("Submit")).toBeInTheDocument(); //check if Submit button has loaded
//   });
// });
