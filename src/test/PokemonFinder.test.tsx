import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import PokemonFinder from "../components/PokemonFinder";
import userEvent from "@testing-library/user-event";

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

  // データ表示に関するテスト
  test("ボタンクリックでポケモンデータがフェッチされ、表示される", async () => {
    render(<PokemonFinder />);

    const user = userEvent.setup();
    const inputElement = screen.getByPlaceholderText("ポケモンのIDを入力");
    await user.type(inputElement, "25");

    const buttonElement = screen.getByRole("button");
    await user.click(buttonElement);

    const pokemonName = screen.getByText("pikachu");
    expect(pokemonName).toBeInTheDocument();

    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", "http://example.com/pikachu.png");
    expect(image).toHaveAttribute("alt", "pikachu");
  });

  // エラーメッセージに関するテスト
});
