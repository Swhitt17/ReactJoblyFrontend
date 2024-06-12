import React,{useContext} from "react";
import { UserContext } from "./UserContext";
import { Link } from "react-router-dom";
import "./Home.css"

const Home = () => {

    const {currentUser} = useContext(UserContext);

 return (
    <div className="Homepage">
      <div className="container text-center">
        <h2 className="mb-4 fw-bold">Jobly</h2>
         <p className="lead">The place to find a job</p>

        {currentUser ?
         <h3>Welcome Back, {currentUser.firstName}!</h3> 
        : (
            <div> 
              <h3>Please log in or register to continue</h3>
            <p>
                <Link className="btn btn-primary font-weight-bold me-3"
                    to="/login"
                >
                  Log in
                </Link>

            <Link className="btn btn-danger font-weight-bold"
                   to="/register"
            >
                Register
            </Link>
            </p>
         </div> 
        )}
    </div>
</div>

 );
}

export default Home;