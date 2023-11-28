import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import { GlobalStyles } from "./styles/GlobalStyles";
import { RoutesMain } from "./routes";
import Modal from 'react-modal'
import { ModalStyles } from "./styles/ModalStyles";
import { ModalAddContact } from "./components/Modals/ModalAddContact";
import { useContext } from "react";
import { UserContext } from "./providers/UserContext";

Modal.setAppElement('#root')

const App = () => {

  const {modalAdd, setModalAdd} = useContext(UserContext)
  return (
    <>
    <GlobalStyles/>
    <ModalStyles/>
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
      <Modal isOpen={modalAdd} onRequestClose={()=>{setModalAdd(false)}} contentLabel='' overlayClassName='modal-overlay' className='add-modal-content'>
        <ModalAddContact/>
      </Modal>
      <RoutesMain/>
      
    </>
  );
};

export default App;
