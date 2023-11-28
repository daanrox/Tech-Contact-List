import { useContext, useEffect } from "react";
import { PanelContext } from "../../providers/PanelContext";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import {
  InputDivRegister,
  RegisterBox,
  RegisterFormParagraph,
  RegisterFormTitle,
  StyledRegisterForm,
} from "./style";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { iRegisterForm, registerSchema } from "./registerSchema";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserContext } from "../../providers/UserContext";

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<iRegisterForm>({ resolver: zodResolver(registerSchema) });
  const { setPage } = useContext(PanelContext);
  const { userRegister } = useContext(UserContext);


  useEffect(() => {
    setPage({ page: "register" });
  }, [setPage]);


  const registerUser = (data: iRegisterForm) =>{
    userRegister(data)
  }

  const submit: SubmitHandler<iRegisterForm> = (formData: iRegisterForm) => {
    const { ...newFormData } = formData;
    registerUser(newFormData);
    reset();
  };
  return (
    <>
      <Container>
        <Header />

        <RegisterBox>
          <StyledRegisterForm onSubmit={handleSubmit(submit)} noValidate>
            <RegisterFormTitle>Cadastre um usuário</RegisterFormTitle>
            <RegisterFormParagraph>
              Preencha os campos corretamente para fazer seu cadastro
            </RegisterFormParagraph>

            <InputDivRegister>
              <Input
                type="text"
                placeholder="Nome"
                autoComplete="name"
                {...register("name")}
                error={errors.name}
              />
              <Input
                type="email"
                placeholder="E-mail"
                autoComplete="email"
                {...register("email")}
                error={errors.email}
              />
              <Input
                type="text"
                placeholder="Telefone"
                autoComplete="phone"
                {...register("phone")}
                error={errors.phone}
              />
              <Input
                type="password"
                placeholder="Senha" 
                autoComplete="current-password"
                {...register("password")}
                error={errors.password}
              />
            </InputDivRegister>

            <Button text="Cadastrar" onClick={()=>{}} />
          </StyledRegisterForm>
        </RegisterBox>
      </Container>
      <Footer />
    </>
  );
};
