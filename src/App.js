import React, {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './Home';
import CompaniesList from './Company/CompanyList';
import JobsList from './Job/JobsList';
import RegisterForm from './Forms/RegisterForm';
import LoginForm from './Forms/LoginForm';
import Profile from './Forms/Profile';
import NavBar from './NavBar';
import CompanyDetail from './Company/CompanyDetail';
import JoblyApi from './Api';
import {jwtDecode} from "jwt-decode"
import { UserContext } from './UserContext';
import useLocalStorage from './hooks/useLocalStorage';
import PrivateRoute from './PrivateRoute';
// import background from "./backgroundImage.jpg"



export const TOKEN_ID = "jobly-token";

function App() {

  const [token,setToken]= useLocalStorage(TOKEN_ID);
  const [currentUser, setCurrentUser] = useState(null);
  const [applications, setApplications] = useState(new Set([]));


   async function register(registerData){
    let token = await JoblyApi.register(registerData);
    setToken(token);
    return {success:true};

  }

   async function login(loginData){
    let token = await JoblyApi.login(loginData)
    setToken(token);
    return {success:true};

  }

   async function logout(){
    setToken(null);
    setCurrentUser(null);
    
  }

  useEffect(function getUserData(){

    async function getCurrentUser(){
       let {username} = jwtDecode(token)
       JoblyApi.token = token
       let currentUser = await JoblyApi.getCurrentUser(username);
       setApplications(new Set(currentUser.applications))
       setCurrentUser(currentUser)
    }

    getCurrentUser();
  },[token]);


    function hasApplied(jobId){
      return applications.has(jobId)

    }


    function apply(jobId){
      if(applications.has(jobId)) return;
      JoblyApi.applyToJob(currentUser.username, jobId);
      setApplications(new Set([...applications, jobId]));
    }

  




  return (
    <div className="App" >
      <UserContext.Provider
      value={{currentUser, setCurrentUser, hasApplied, apply}}>

      <NavBar logout={logout}/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        

        <Route element={<PrivateRoute />}>
          <Route path='/companies' element={ <CompaniesList />}></Route>
          <Route path='/companies/:handle' element={ <CompanyDetail /> }></Route>
          <Route path='/jobs' element={ <JobsList /> }></Route>
          <Route path='/profile' element={ <Profile />}></Route>
        </Route>
        <Route path='/register' element={<RegisterForm register={register}/>}></Route>
        <Route path='/login' element={<LoginForm login={login} />}></Route>
      </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
