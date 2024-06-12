import React,{useContext, useState} from "react";
import { UserContext } from "./UserContext";
import JoblyApi from "./Api";
import Alert from "../Alert";

const Profile = () => {

    const {currentUser, setCurrentUser} = useContext(UserContext);

    const initialState = {
        username:currentUser.username,
        email:currentUser.email,
        firstName:currentUser.firstName,
        lastName:currentUser.lastName,
        password:""

    }

     const [formData, setFormData]=useState(initialState);
     const [formErrors, setFormErrors] = useState([]);
     const [changesSaved, setChangesSaved] = useState([]);

   
    const handleChange = e => {
        const {name,value} = e.target;
        setFormData(data => ({
            ...data,[name]: value

        }));
        setFormErrors([]);

    }

    async function handleSubmit(e) {
        e.preventDefault();

        let profileData = {
            password:formData.password,
            email:formData.email,
            firstName:formData.firstName,
            lastName:formData.lastName,
            
        }

        let username = formData.username;
        let updatedUser;
        try{
            updatedUser = await JoblyApi.updateCurrentUser(username,profileData) 
        }catch (errors){
            setFormErrors(errors);
            return;

        }
        setFormData(data => ({
            ...data, password:""
        }));
        setFormErrors([])
        setChangesSaved(true);
        setCurrentUser(updatedUser);
    
    }


    return (
        <div className="col-md-6 col-lg-4 offset-md-3 offset-lg-4">
          <h2>Profile</h2> 
            <div className="card">
              <div className="card-body">
                <form>
                 <div className="form-group">
                  <label htmlFor="username">Username</label>
                    <input
                      id="username"
                      className="form-control"
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                    />
                    </div>
                    <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                     id="password"
                     className="form-control"
                     type="password"
                     name="password"
                     value={formData.password}
                     onChange={handleChange}
                     />
                    </div>
                     <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                     id="email"
                     className="form-control"
                     type="email"
                     name="email"
                     value={formData.email}
                     onChange={handleChange}
                    />
                   </div>
                   <div className="form-group">
                    <label htmlFor="firstName"> First Name</label>
                    <input
                      id="firstName"
                      className="form-control"
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                    </div>
                    <div className="form-group">
                    <label htmlFor="Lname">Last Name</label>
                    <input
                     id="lastName"
                     className="form-control"
                     type="text"
                     name="lastName"
                     value={formData.lastName}
                     onChange={handleChange}
                    />
                    </div>

                    {formErrors.length
                      ? <Alert type="danger" messages={formErrors} />
                      : null
                    }


                    {changesSaved
                      ? <Alert type="success" messages={"Updated Successfully"} />
                      : null
                    }




                   <button 
                   onClick={handleSubmit}
                   className="btn btn-info btn-block mt-4"
                   >Submit
                   </button>
                </form> 
             </div>
          </div>
      </div>
 )
}

export default Profile;