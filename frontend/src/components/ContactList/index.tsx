import { Button } from "../Button";
import {
  StyledContact,
  StyledContactContent,
  StyledContactHeader,
  StyledContactList,
} from "./style";
import { FaRegUser, FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import espiral from "../../assets/img/espiral.png";
import { useContext } from "react";
import { IContact, UserContext } from "../../providers/UserContext";
import ReactLoading from "react-loading";

export const ContactList = () => {
  const { contactsList, setModalAdd, setSelectedContact, setModalEditContact, setModalDeleteContact } = useContext(UserContext);


  const handleEdit = (contact: IContact) =>{
    setSelectedContact(contact)
    setModalEditContact(true)
  }

  const handleDelete = (contact: IContact) =>{
    setSelectedContact(contact)
    setModalDeleteContact(true)
  }

  return (
    <>
      <StyledContactList>
        <StyledContactHeader>
          <h2>Lista de Contatos</h2>
          <Button
            text="Adicionar"
            onClick={() => {
              setModalAdd(true);
            }}
          />
        </StyledContactHeader>
        <StyledContactContent>
          {contactsList && contactsList.length > 0 ? (
            contactsList.map((contact) => (
              <div key={contact.id} className="contact-items">
                <StyledContact>
                  <div className="cardContact">
                    <div className="cardBorder">
                      <img src={espiral} />
                    </div>
                    <div className="cardInfos">
                      <FaRegUser className="cardIcon" />
                      <h3>{contact.name}</h3>
                      <p>{contact.phone}</p>
                      <p>{contact.email}</p>
                      <div className="cardOptions">
                        <FaRegEdit
                          className="cardOptionIcon"
                          value={contact.id}
                          onClick={()=>{handleEdit(contact)}}
                        />
                        <AiOutlineDelete
                          className="cardOptionIcon"
                          value={contact.id}
                          onClick={()=>{handleDelete(contact)}}
                        />
                      </div>
                    </div>
                  </div>
                </StyledContact>
              </div>
            ))
          ) : (
            <div className="loading__div">
              <ReactLoading
                type="spin"
                color="var(--color-dark)"
                height={"3.3rem"}
                width={"3.3rem"}
              />
            </div>
          )}
        </StyledContactContent>
      </StyledContactList>
    </>
  );
};
