import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ErrorToast = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable={false}
      pauseOnHover
      theme="light"
    />
  );
};

export default ErrorToast;
