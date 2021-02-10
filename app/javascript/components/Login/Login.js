import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const {register, handleSubmit} = useForm();
  const [notify, setNotifier] = useState(null)
  const onSubmit = (data) => {
    console.log(data)
    axios.post(`/login`, data)
      .then(res => {
        console.log(res);
        setNotifier(() => toast.success('Login successfull', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          }))
        console.log(res.data);
      })
      .catch((error) => {
        // returns login error Request failed with status code 422
        setNotifier(() => toast.error(error.response.data.message,{
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }));
        console.log('login error', error.response.data.message);
    });
  }

  return(
    <React.Fragment>
    <div class="bg-grey-light py-8 w-full flex justify-center items-center">
    <form onSubmit={handleSubmit(onSubmit)}>
    <div class="mb-4">
      <label class="block text-grey-darker text-sm font-bold mb-4" for="username">
        Username
      </label>
      <input  class="shadow appearance-none border rounded  py-2 px-3 text-grey-darker" type="text" placeholder="Email" name="email" ref={register} />
      </div>
      <div class="mb-6">
      <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input class="shadow appearance-none border border-red rounded py-2 px-3 text-grey-darker mb-3" type="password" placeholder="Password" name="password" ref={register} />
      </div>
      <div class="flex items-center justify-between">
      <input class="bg-blue hover:bg-blue-dark text-black font-bold py-2 px-4 rounded" onClick={setNotifier} type="submit" />
      </div>
    </form>
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
    </div>
    </React.Fragment>
  );
}
export default Login