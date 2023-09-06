import { render, screen } from "@testing-library/react";
import { test, expect, describe } from "jest";
import FollowerList from "./FollowerList";

describe("FollowerList", () => {
  test("should render followers", async () => {
    render(<FollowerList />);
    const followerElement = await screen.findAllByRole("heading");
    expect(followerElement).toHaveLength(2);
  });
});
