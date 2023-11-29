import { useState, useEffect, useContext } from "react";
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
import { UserContext, IContact } from "../../providers/UserContext";
import { HiOutlinePhone } from "react-icons/hi";
import { AiOutlineMail } from "react-icons/ai";

export const ContactList = () => {
  const {
    contactsList,
    setModalAdd,
    setSelectedContact,
    setModalEditContact,
    setModalDeleteContact,
  } = useContext(UserContext);

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredContacts, setFilteredContacts] = useState<IContact[]>([]);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredContacts(contactsList);
    } else {
      const filtered = contactsList.filter(
        (contact) =>
          contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          contact.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
          contact.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredContacts(filtered);
    }
  }, [searchTerm, contactsList]);

  const handleEdit = (contact: IContact) => {
    setSelectedContact(contact);
    setModalEditContact(true);
  };

  const handleDelete = (contact: IContact) => {
    setSelectedContact(contact);
    setModalDeleteContact(true);
  };

  return (
    <>
      <StyledContactList>
        <StyledContactHeader>
          <h2>Lista de Contatos</h2>
          <div>
            <input
              type="text"
              placeholder="Pesquisar"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button
              text="Adicionar"
              onClick={() => {
                setModalAdd(true);
              }}
            />
          </div>
        </StyledContactHeader>
        <StyledContactContent>
          {filteredContacts.length > 0 ? (
            filteredContacts.map((contact) => (
              <div key={contact.id} className="contact-items">
                <StyledContact>
                  <div className="cardContact">
                    <div className="cardBorder">
                      <img src={espiral} alt="espiral" />
                    </div>
                    <div className="cardInfos">
                      <FaRegUser className="cardIcon" />
                      <h3>{contact.name}</h3>
                      <p><HiOutlinePhone  className='cardIcon2'/>{contact.phone}</p>
                      <p><AiOutlineMail className='cardIcon2'/>{contact.email}</p>
                      <div className="cardOptions">
                        <FaRegEdit
                          className="cardOptionIcon"
                          value={contact.id}
                          onClick={() => {
                            handleEdit(contact);
                          }}
                        />
                        <AiOutlineDelete
                          className="cardOptionIcon"
                          value={contact.id}
                          onClick={() => {
                            handleDelete(contact);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </StyledContact>
              </div>
            ))
          ) : (
            <>
              {searchTerm ? (
                <h3 className="noFound">Nenhum contato encontrado</h3>
              ) : (
                <h3
                  className="noContent"
                  onClick={() => setModalAdd(true)}
                >
                  Adicione um Contato
                </h3>
              )}
            </>
          )}
        </StyledContactContent>
      </StyledContactList>
    </>
  );
};
