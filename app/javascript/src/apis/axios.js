import axios from "axios";
import Toastr from "../../components/Toastr/Toastr"

export const setAuthHeaders = (setLoading = () => null) => {
  axios.defaults.headers = {
    Accept: "applicaion/json",
    "Content-Type": "application/json",
    "X-CSRF-TOKEN": document.querySelector('[name="csrf-token"]').getAttribute('content'),
  };
  setLoading(false);
};


const handleSuccessResponse = response => {
  if (response) {
    response.success = response.status === 200;
    if (response.data.message) {
      Toastr.success(response.data.message);
    }
  }
  console.log("Hiiii")
  return response;
};

const handleErrorResponse = error => {
  console.log(error.response)
  if (error.response?.status === 401) {
    setToLocalStorage({ authToken: null, email: null, userId: null });
  }
  Toastr.error(
    error.response?.data?.error ||
      error.response?.data?.notice ||
      error.message ||
      error.notice ||
      "Something went wrong!"
  );
  if (error.response?.status === 423) {
    window.location.href = "/";
  }
  return Promise.reject(error);
};

export const registerIntercepts = () => {
  axios.interceptors.response.use(handleSuccessResponse, error =>
    handleErrorResponse(error)
  );
};