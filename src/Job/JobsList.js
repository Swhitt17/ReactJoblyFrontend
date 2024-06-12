import React, {useState, useEffect, useContext} from "react";
import SearchForm from "../SearchForm";
import JoblyApi from "../Api";
import JobCardList from "./JobCardList";


const JobsList = () => {
 
    const [jobs, setJobs] = useState(null);

  useEffect(function getJobsOnMount(){
    console.debug("JobsList useEffect getJobsOnMount")
    search();
  },[]);

  async function search(title){
    let jobs = await JoblyApi.getJobs(title);
    setJobs(jobs);
  }
  if(!jobs) return <h3>Loading...</h3>

 return (
    <div className="JobList col-md-8 offset-md-2"> 
        <h2>Jobs</h2>
        
        <SearchForm searchFor={search}/>

        {jobs.length 
        ?  <JobCardList jobs={jobs}/>
        :  <p className="lead">Sorry, Cannot find any results</p>
         }
    </div>
 );
 
}

export default JobsList;