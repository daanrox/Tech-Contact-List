import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import { GlobalStyles } from "./styles/GlobalStyles";
import { RoutesMain } from "./routes";
import Modal from 'react-modal'
import { ModalStyles } from "./styles/ModalStyles";
import { ModalAddContact } from "./components/Modals/ModalAddContact";
import { useContext } from "react";
import { UserContext } from "./providers/UserContext";
import { ModalEditContact } from "./components/Modals/ModalEditContact";
import { ModalDeleteContact } from "./components/Modals/ModalDeleteContact";

Modal.setAppElement('#root')

const App = () => {

  const {modalAdd, modalEditContact, setModalEditContact, setModalAdd, modalDeleteContact, setModalDeleteContact} = useContext(UserContext)
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
        theme="light"
      />
      <Modal isOpen={modalAdd} onRequestClose={()=>{setModalAdd(false)}} contentLabel='' overlayClassName='modal-overlay' className='add-modal-content'>
        <ModalAddContact/>
      </Modal>
      <Modal isOpen={modalEditContact} onRequestClose={()=>{setModalEditContact(false)}} contentLabel='' overlayClassName='modal-overlay' className='edit-modal-content'>
        <ModalEditContact/>
      </Modal>
      <Modal isOpen={modalDeleteContact} onRequestClose={()=>{setModalDeleteContact(false)}} contentLabel='' overlayClassName='modal-overlay' className='delete-modal-content'>
        <ModalDeleteContact/>
      </Modal>
      <RoutesMain/>
      
    </>
  );
};

export default App;
