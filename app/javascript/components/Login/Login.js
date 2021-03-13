import React, {useState, useContext} from 'react';
import axios from 'axios';
import {Context} from "../Layout/Layout"


function Login() {
  const {setName} = useContext(Context)
  const [state, setState] = useState({
    email: "",
    password: ""
  });

  const handleInputChange = (event) => {
    setState((prevProps) => ({
      ...prevProps,
      [event.target.name]: event.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    axios.post('/sessions', state)
      .then(res => {
        setName(res.data.user.first_name) 
      })
      .catch((error) => {
        // returns login error Request failed with status code 422
    });
  }


  return(
    <React.Fragment>
    <div className="bg-grey-light py-8 w-full flex justify-center items-center">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-grey-darker text-sm font-bold mb-4" >
            Username
          </label>
          <input  className="shadow appearance-none border rounded  py-2 px-3 text-grey-darker" 
                    type="text" 
                    placeholder="Email" 
                    name="email"
                    value={state.email}
                    onChange={handleInputChange}/>
          </div>
          <div className="mb-6">
            <label className="block text-grey-darker text-sm font-bold mb-2">
              Password
            </label>
            <input className="shadow appearance-none border border-red rounded py-2 px-3 text-grey-darker mb-3" 
                    type="password" 
                    placeholder="Password" 
                    name="password" 
                    value={state.password}
                    onChange={handleInputChange} />
          </div>
          <div className="flex items-center justify-between">
            <input className="text-black font-bold py-2 px-4 rounded" 
             type="submit" />
          </div>
          
      </form>
      
    </div>
    </React.Fragment>
  );
}
export default Login