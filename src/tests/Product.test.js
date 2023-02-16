import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
// import FavoriteInput from "./FavoriteInput";
import Product from "../Product";


describe('product displays on dom', () => {
  it('props.item should set to nothing if pass empty', () => {
    const car = {name:""}
    render(<Product item={car}></Product>);
    const itemName = screen.getByRole("item");

    expect(itemName.textContent).toContain('$');

    
  })

  it('props.item should set to the item', () => {
    const car = {name:"carz"}
    render(<Product item={car}></Product>);
    const itemName = screen.getByRole("item");

    expect(itemName.textContent).toContain('carz');

    
  })

});