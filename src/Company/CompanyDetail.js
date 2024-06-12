import React,{useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "./Api";
import JobCardList from "./JobCardList";

const CompanyDetail = () => {

    const {handle} = useParams();

    const [company, setCompany] = useState(null);

    useEffect(function getCompaniesAndJobsOnMount(){
      async function getCompany() {
        setCompany(await JoblyApi.getCompany(handle));
      }
    getCompany();
    },[handle])
  
    if(!company) return <h3>Loading...</h3>

    return (
        <div className="CompanyDetail col-md offset-md-2">
            <h3>{company.name}</h3>
            <div>
            <h5>{company.description}</h5>
            </div>
            <JobCardList jobs={company.jobs}/>

        </div>
    )
}

export default CompanyDetail;