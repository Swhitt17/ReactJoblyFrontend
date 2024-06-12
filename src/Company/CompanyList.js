import React, {useState,useEffect} from "react";
import CompanyCard from "./CompanyCard";
import JoblyApi from "./Api"
import SearchForm from "./SearchForm";

const CompanyList = () => {

  const [companies, setCompanies] = useState(null);

  useEffect(function getCompaniesOnMount(){
    console.debug("CompanyList useEffect getCompaniesOnMount")
    search();

  },[])

  async function search(name){
    let companies = await JoblyApi.getCompanies(name);
    setCompanies(companies);
  }
  if(!companies) return <h3>Loading...</h3>
 return (

    <div className="CompanyList-list">
        <h2>Companies</h2>
        <SearchForm search={search}/>

        {companies.length ? (
        <div className="CompanyList-list">
        {companies.map(c =>(
           <CompanyCard  
           key={c.handle}
            handle={c.handle}
             name={c.name} 
             description={c.description}
             logo={c.logoUrl}
             /> 
        ))}
        </div>
         ):(
          <p className="lead">Sorry, Cannot find any results</p>
         )}
    </div>
 );
}

export default CompanyList;