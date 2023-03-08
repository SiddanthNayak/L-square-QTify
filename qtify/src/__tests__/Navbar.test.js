import { render, screen, fireEvent, act } from "@testing-library/react";
import Navbar from "../components/Navbar/Navbar";
import userEvent from "@testing-library/user-event";

describe("Navbar Component", () => {
  const navbar = () => {
    render(<Navbar />);
  };

  beforeEach(async () => {
    navbar();
  });

  it("Should render logo", () => {
    const images = screen.getAllByRole("img");
    const logo = images.find((img) => img.getAttribute("alt") === "Qtify-Logo");

    expect(logo).toBeInTheDocument();
  });

  it("Should have give feedback button", async () => {
    const log = jest.spyOn(console, "log");

    const feedbackButton = screen.getByRole("button", {
      name: "Give Feedback",
    });

    fireEvent.click(feedbackButton);

    expect(log).toHaveBeenCalled();
  });

  it("should have a search bar", () => {
    const searchInput = screen.getAllByPlaceholderText(/search/i)[0];
    expect(searchInput).toBeInTheDocument();
  });
});
