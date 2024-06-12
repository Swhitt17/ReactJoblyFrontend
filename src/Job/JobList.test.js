import JobsList from "./JobsList";
import { render } from "@testing-library/react";



test("it matches snapshot", () => {
    const {asFragment} = render(
        <JobsList />
    );
    expect(asFragment()).toMatchSnapshot()
})