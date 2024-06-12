import JobCard from "./JobCard";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

test("it matches snapshot", () => {
    const {asFragment} = render(
        <MemoryRouter>
           <JobCard 
           title={'Consulting civil engineer'}
           salary={'60000'}
           equity={'0'}
            companyHandle={'sellers=bryant'}
           /> 
        </MemoryRouter>
    )
    expect(asFragment()).toMatchSnapshot()
})