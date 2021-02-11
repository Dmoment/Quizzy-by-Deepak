import React, {useState} from 'react';
import axios from 'axios';
import {handleErrorResponse, handleSuccessResponse} from "../../src/apis/axios"


function Login() {
  
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
    console.log(state);
    axios.post('/sessions', state)
      .then(res => {
        handleSuccessResponse(res)
      })
      .catch((error) => {
        // returns login error Request failed with status code 422
        handleErrorResponse(error)
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