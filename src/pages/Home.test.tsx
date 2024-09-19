import { render, screen } from "@testing-library/react";
import Home from "./index";
import { useRouter } from "next/router";
import { useToast } from "@/hooks/use-toast";

// Mock next/font/local
jest.mock("next/font/local", () => {
  return () => ({
    className: "mocked-classname",
    variable: "--mocked-variable",
  });
});

// Mock next/router
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

// Mock useToast hook
jest.mock("@/hooks/use-toast", () => ({
  useToast: jest.fn(() => ({
    toast: jest.fn(),
  })),
}));

describe("Home Component", () => {
  it("renders navigation links", () => {
    (useRouter as jest.Mock).mockReturnValue({ query: {} });
    render(<Home />);
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(4);
    expect(links[0]).toHaveTextContent("Candlestick Chart");
    expect(links[1]).toHaveTextContent("Line Chart");
    expect(links[2]).toHaveTextContent("Bar Chart");
    expect(links[3]).toHaveTextContent("Pie Chart");
  });

  it("shows toast message if error query parameter is present", () => {
    const toastMock = jest.fn();
    (useToast as jest.Mock).mockReturnValue({ toast: toastMock });
    (useRouter as jest.Mock).mockReturnValue({ query: { error: "true" } });

    render(<Home />);

    expect(toastMock).toHaveBeenCalledWith({
      title: "Uh oh! Something went wrong.",
      description: "Server API Data Fetching Failed!",
      variant: "destructive",
    });
  });
});
