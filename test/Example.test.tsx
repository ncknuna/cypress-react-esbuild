import { Example } from "../src/Example";
import { mount } from "cypress-react-unit-test";
import React from "react";

describe("Example tests", () => {
  it("renders with the right class", () => {
    mount(<Example />);
    cy.get(".example-component")
      .should("have.length", 1)
      .should("have.css", "background-color", "blue");
  });
});
