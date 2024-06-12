import React,{useState} from "react";
import {useNavigate} from "react-router-dom"
import Alert from "../Alert";

const LoginForm = ({login}) => {
    let navigate = useNavigate();

    const initialState = {
        username:"danir099",
        password:"tOa5teR887%",
     
    }

    const [formErrors, setFormErrors] = useState([]);

    const [formData, setFormData]=useState(initialState);

    const handleChange = e => {
        const {name,value} = e.target;
        setFormData(data => ({
            ...data,[name]: value

        }))

    }

     async function handleSubmit(e){
        e.preventDefault();
        let res = await login(formData)
        if(res.success){
            navigate('/')
            console.log(formData)
            setFormData(initialState);
        }
        else{
            setFormErrors(res.errors)
        }
        

    }

 return (
    <div className="LoginForm">
      <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
        <h2 className="mb-3">Login</h2>
          <div className="card">
             <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group"> 
                   <label htmlFor="username">Username</label>
                    <input
                      id="username"
                      className="form-control"
                      type="text"
                      name="username"
                     value={formData.username}
                    onChange={handleChange}
                    required
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
                     autoComplete="current-password"
                     required
                     />
                    </div>

                    {formErrors.length
                      ? <Alert type="danger" messages={formErrors} />
                      : null
                    }


                   <button 
                   className="btn btn-info float-right"
                   onClick={handleSubmit}
                   >Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
 )
}

export default LoginForm;