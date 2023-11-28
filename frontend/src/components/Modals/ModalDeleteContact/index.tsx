import { Button } from "../../Button";
import { AiOutlineClose } from "react-icons/ai";
import { StyledDeleteContactModal } from "./style";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";

export interface IEditContact {
  id: string,
  name: string;
  phone: string;
  email: string;
}

export const ModalDeleteContact = () => {
  const { setModalDeleteContact, deleteContact, selectedContact } =
    useContext(UserContext);



  const closeDeleteModal = () => {
    setModalDeleteContact(false);
  };

  
  return (
    <>
      <StyledDeleteContactModal>
        <div className="deleteModalHeader">
          <h2></h2>
          <AiOutlineClose className="closeModal" onClick={closeDeleteModal} />
        </div>
        <div className="deleteModalBody">
            <h2>Tem certeza que deseja excluir este contato?</h2>
            <p className="deleteModalName">{selectedContact?.name}</p>         

            <Button text="Excluir" onClick={()=>{deleteContact()}} />
          
        </div>
      </StyledDeleteContactModal>
    </>
  );
};
