import CompanyDetail from "./CompanyDetail";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

test("it renders without crashing", () => {
    render(
        <CompanyDetail />
    )
})



test("it matches snapshot", () => {
    const {asFragment} = render(
        <CompanyDetail />
    );
    expect(asFragment()).toMatchSnapshot()
})