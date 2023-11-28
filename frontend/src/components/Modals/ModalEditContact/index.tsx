import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { editContactSchema } from "./editContactSchema";
import { Button } from "../../Button";
import { AiOutlineClose } from "react-icons/ai";
import { Input } from "../../Input";
import { StyledEditContactModal } from "./style";
import { useContext, useEffect } from "react";
import { UserContext } from "../../../providers/UserContext";

export interface IEditContact {
  id: string,
  name: string;
  phone: string;
  email: string;
}

export const ModalEditContact = () => {
  const { setModalEditContact, editContact, selectedContact } =
    useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IEditContact>({
    resolver: zodResolver(editContactSchema),
  });

  useEffect(() => {
    if (selectedContact) {
      setValue("id", selectedContact.id)
      setValue("name", selectedContact.name);
      setValue("phone", selectedContact.phone);
      setValue("email", selectedContact.email);
    }
  }, [selectedContact, setValue]);

  const closeEditModal = () => {
    setModalEditContact(false);
  };

  const submit = (data: IEditContact) => {
    editContact(data);
    closeEditModal();
  };

  return (
    <>
      <StyledEditContactModal>
        <div className="editModalHeader">
          <h2>Editar Contato</h2>
          <AiOutlineClose className="closeModal" onClick={closeEditModal} />
        </div>
        <div className="editModalBody">
          <form onSubmit={handleSubmit(submit)} noValidate>
            <Input
              type="text"
              placeholder="Nome"
              autoComplete="name"
              {...register("name")}
            />
            <p className="warning">{errors.name?.message}</p>
            <Input
              type="text"
              placeholder="Telefone"
              autoComplete="phone"
              {...register("phone")}
            />
            <p className="warning">{errors.phone?.message}</p>
            <Input
              type="text"
              placeholder="Email"
              autoComplete="email"
              {...register("email")}
            />
            <p className="warning">{errors.email?.message}</p>

            <Button text="Editar" onClick={()=>{}} />
          </form>
        </div>
      </StyledEditContactModal>
    </>
  );
};
