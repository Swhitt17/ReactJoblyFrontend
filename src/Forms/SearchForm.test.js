import React from "react";
import { render } from "@testing-library/react";
import SearchForm from "./RegisterForm"

test("it matches snapshot", function(){
    const {asFragment} = render(
            <SearchForm />
    );

    expect(asFragment()).toMatchSnapshot();
})