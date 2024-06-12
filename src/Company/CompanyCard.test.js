import CompanyCard from "./CompanyCard";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

test("it matches snapshot with no picture", () => {
    const {asFragment} = render(
        <MemoryRouter>
           <CompanyCard 
           handle={'davis-davis'}
           name={'Davis-Davis'}
           description={'Career participant difficult. Decide claim particular century society. Question growth two staff.'}

           /> 
        </MemoryRouter>
    )
    expect(asFragment()).toMatchSnapshot()
})



test("it matches snapshot with picture", () => {
    const {asFragment} = render(
        <MemoryRouter>
        <CompanyCard 
         handle={'watson-davis'}
         name={'Watson-Davis'}
         description={'Year join loss.'}
         logoUrl={'/logos/logo3.png'}
        
        />
        </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot()
})