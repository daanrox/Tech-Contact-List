import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addContactSchema } from "./addContactSchema";
import { Button } from "../../Button";
import { AiOutlineClose } from "react-icons/ai";
import { Input } from "../../Input";
import { StyledAddContactModal } from "./style";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";

export interface IAddContact {
  name: string;
  phone: string;
  email: string;
}

export const ModalAddContact = () => {

const { setModalAdd, addContact } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAddContact>({
    resolver: zodResolver(addContactSchema),
  });

  const closeAddModal = () =>{
    setModalAdd(false)
  }


  const submit = (data: IAddContact) => {
    addContact(data);
    closeAddModal()
  };

  return (
    <>
      <StyledAddContactModal>
        <div className="addModalHeader">
          <h2>Adicionar Contato</h2>
          <AiOutlineClose  className='closeModal' onClick={closeAddModal}/>
        </div>
        <div className="addModalBody">
          <form onSubmit={handleSubmit(submit)} noValidate>
            <Input
              type="text"
              placeholder="Nome"
              autoComplete="name"
              {...register("name")}
            />
            <p className='warning'>{errors.name?.message}</p>
            <Input
              type="text"
              placeholder="Telefone"
              autoComplete="phone"
              {...register("phone")}
            />
            <p className='warning' >{errors.phone?.message}</p>
            <Input
              type="text"
              placeholder="Email"
              autoComplete="email"
              {...register("email")}
            />
            <p className='warning' >{errors.email?.message}</p>

            <Button text="Adicionar" onClick={() => {}} />
          </form>
        </div>
      </StyledAddContactModal>
    </>
  );
};
