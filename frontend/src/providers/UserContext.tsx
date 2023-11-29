/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { api } from "../services";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { PanelContext } from "./PanelContext";
import { useNavigate } from "react-router-dom";
import { IAddContact } from "../components/Modals/ModalAddContact";

export interface IContact {
  id: string;
  name: string;
  email: string;
  phone: string;
  created_at: string;
  user_id: string;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  phone: string;
  contacts: IContact[];
}

interface iRegisterFormData {
  name: string;
  email: string;
  password: string;
  phone: string;
}

export interface IPartialUpdateContact extends Partial<IAddContact> {
  id?: string;
  name?: string;
  phone?: string;
  email?: string;
}

interface iLoginFormData {
  email: string;
  password: string;
}

export interface IUserProviderProps {
  children: React.ReactNode;
}

export interface IUserContext {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  userRegister: (formData: iRegisterFormData) => Promise<void>;
  userLogin: (formData: iLoginFormData) => Promise<void>;
  logout: () => void;
  getContactList: (userId: string) => void;
  contactsList: IContact[];
  setContactsList: Dispatch<SetStateAction<IContact[]>>;
  getUsersDetails: (userId: string) => void;
  modalAdd: boolean;
  setModalAdd: Dispatch<SetStateAction<boolean>>;
  modalEditContact: boolean;
  setModalEditContact: Dispatch<SetStateAction<boolean>>;
  modalDeleteContact: boolean;
  setModalDeleteContact: Dispatch<SetStateAction<boolean>>;
  selectedContact: IContact | null;
  setSelectedContact: Dispatch<SetStateAction<IContact | null>>;
  addContact: (formData: IAddContact) => Promise<void>;
  editContact: (formData: IPartialUpdateContact) => Promise<void>;
  deleteContact: () => Promise<void>;
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const navigate = useNavigate();

  const { setPage } = useContext(PanelContext);
  const [user, setUser] = useState<IUser | null>(null);
  const [contactsList, setContactsList] = useState<IContact[]>([]);
  const [modalAdd, setModalAdd] = useState<boolean>(false);
  const [modalEditContact, setModalEditContact] = useState<boolean>(false);
  const [modalDeleteContact, setModalDeleteContact] = useState<boolean>(false);
  const [selectedContact, setSelectedContact] = useState<IContact | null>(null);

  const userRegister = async (formData: iRegisterFormData) => {
    try {
      const { data } = await api.post("users", formData);
      if (data) {
        toast.success("Registro efetuado com sucesso");
        setTimeout(() => {
          toast.success("Redirecionando para a página de Login");
        }, 1000);
        setTimeout(() => {
          setPage({ page: "login" });
          navigate("/login");
        }, 3000);
      }
    } catch (error) {
      const currentError = error as AxiosError<string>;
      toast.error(currentError.message);
    }
  };

  const userLogin = async (formData: iLoginFormData) => {
    try {
      const { data } = await api.post("login", formData);
      if (data) {
        toast.success("Login efetuado com sucesso");
        localStorage.setItem("token", data.token);
        setTimeout(() => {
          setPage({ page: "dashboard" });
          navigate("/dashboard");
        }, 3000);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.response && error.response.data) {
        const { message } = error.response.data;
        if (message === "Invalid credentials.") {
          toast.error("Email e/ou Senha estão incorretos");
        }
        toast.error(message);
      } else {
        toast.error("Ocorreu um erro ao efetuar o login.");
      }
    }
  };

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  const getUsersDetails = async (userId: string) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("Token is not found.");
        setTimeout(() => {
          navigate("/");
        }, 3000);
      }

      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const { data } = await api.get(`users/${userId}`, { headers });

      if (data) {
        setUser(data);
        localStorage.setItem("userDetails", JSON.stringify(data));
      }
    } catch (error) {
      const currentError = error as AxiosError<string>;
      toast.error(currentError.message);
    }
  };

  const getContactList = async (userId: string) => {
    try {
      const token = localStorage.getItem("token");
      api.defaults.headers.common.Authorization = `Bearer ${token}`;

      if (!token) {
        toast.error("Token is not found.");
        setTimeout(() => {
          navigate("/");
        }, 3000);
        return;
      }

      const response = await api.get(`contacts?userId=${userId}`);
      const { data } = response;

      if (data && data.length > 0) {
        setContactsList(data);
        localStorage.setItem("contacts", JSON.stringify(data));
      } else {
        setContactsList([]);
        localStorage.setItem("contacts", JSON.stringify([]));
      }
    } catch (error: any) {
      if (error.response && error.response.status === 404) {
        setContactsList([]);
        localStorage.setItem("contacts", JSON.stringify([]));
      } else {
        console.log("Error:", error.message);
      }
    }
  };

  const addContact = async (formData: IAddContact) => {
    try {
      const { data } = await api.post("contacts", formData);
      if (data) {
        toast.success("Contato cadastrado com sucesso!");
        if (contactsList) {
          if (contactsList.length === 0) {
            setContactsList([data]);
          }
        }
        setContactsList([...contactsList, data]);
      }
    } catch (error) {
      const currentError = error as AxiosError<string>;
      toast.error(currentError.message);
    }
  };

  const editContact = async (formData: IPartialUpdateContact) => {
    try {
      const { data } = await api.patch(
        `contacts/${selectedContact?.id}`,
        formData
      );
      if (data) {
        toast.success("Contato editado com sucesso!");

        if (selectedContact && contactsList) {
          const contactIndex = contactsList.findIndex(
            (contact) => contact.id === selectedContact.id
          );

          if (contactIndex !== -1) {
            const updatedContactsList = [...contactsList];
            updatedContactsList[contactIndex] = {
              ...updatedContactsList[contactIndex],
              ...formData,
            };

            setContactsList(updatedContactsList);
          }
        }
      }
    } catch (error) {
      const currentError = error as AxiosError<string>;
      toast.error(currentError.message);
    }
  };

  const deleteContact = async () => {
    try {
      const response = await api.delete(`contacts/${selectedContact?.id}`);
      if (response.status === 200 || response.status === 204) {
        setModalDeleteContact(false);
        toast.success("Contato excluído!");

        if (selectedContact && contactsList) {
          const updatedContactsList = contactsList.filter(
            (contact) => contact.id !== selectedContact.id
          );
          setContactsList(updatedContactsList);
        }
      }
    } catch (error) {
      const currentError = error as AxiosError<string>;
      toast.error(currentError.message);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        userRegister,
        userLogin,
        modalAdd,
        setModalAdd,
        modalEditContact,
        setModalEditContact,
        modalDeleteContact,
        setModalDeleteContact,
        logout,
        getContactList,
        contactsList,
        setContactsList,
        getUsersDetails,
        selectedContact,
        setSelectedContact,
        addContact,
        editContact,
        deleteContact,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
