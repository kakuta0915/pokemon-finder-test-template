import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import PokemonFinder from "../components/PokemonFinder";

describe(PokemonFinder, () => {
  // 初期レンダリングのテスト
  test("初期レンダリングが正しく行われる", () => {
    render(<PokemonFinder />);
    expect(screen.getByText("ポケモンファインダー")).toBeInTheDocument();
    expect(screen.getByText("ポケモンを見つける")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "ポケモンを見つける" })
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("ポケモンのIDを入力")
    ).toBeInTheDocument();
  });
});
