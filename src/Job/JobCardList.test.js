import JobsCardList from "./JobsCardList";
import { render } from "@testing-library/react";



test("it matches snapshot", () => {
    const {asFragment} = render(
        <JobsCardList />
    );
    expect(asFragment()).toMatchSnapshot()
})