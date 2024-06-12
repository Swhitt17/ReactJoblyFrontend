import CompanyList from "./CompanyList";
import { render } from "@testing-library/react";




test("it matches snapshot", () => {
    const {asFragment} = render(
        <CompanyList />
    );
    expect(asFragment()).toMatchSnapshot()
})