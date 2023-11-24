import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import { GlobalStyles } from "./styles/GlobalStyles";
import { RoutesMain } from "./routes";

const App = () => {
  return (
    <>
    <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <GlobalStyles/>
      <RoutesMain/>
      
    </>
  );
};

export default App;
