import { useEffect, useContext } from "react";
import { Container } from "../../components/Container";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { PanelContext } from "../../providers/PanelContext";
import { Button } from "../../components/Button";
import {
  InputDiv,
  LoginBox,
  LoginFormParagraph,
  LoginFormTitle,
  StyledLoginDiv,
  StyledLoginForm,
} from "./style";
import { Input } from "../../components/Input";
import { Link, useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { iLoginForm, loginSchema } from "./loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserContext } from "../../providers/UserContext";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<iLoginForm>({ resolver: zodResolver(loginSchema) });

  const { setPage } = useContext(PanelContext);
  const { userLogin } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    setPage({ page: "login" });
  }, [setPage]);

  useEffect(() => {
    if (localStorage.getItem("token") && localStorage.getItem("user")) {
      navigate("/dashboard");
    }
  });

  const submit: SubmitHandler<iLoginForm> = (formData: iLoginForm) => {
    userLogin(formData);
    reset();
  };

  return (
    <>
      <Container>
        <Header />

        <StyledLoginDiv>
          <LoginBox>
            <StyledLoginForm onSubmit={handleSubmit(submit)} noValidate>
              <LoginFormTitle>Acesse o Contact List</LoginFormTitle>
              <LoginFormParagraph>
                Preencha os campos corretamente para fazer login
              </LoginFormParagraph>

              <InputDiv>
                <Input
                  type="email"
                  autoComplete="email"
                  placeholder="E-mail"
                  {...register("email")}
                  error={errors.email}
                />
                <Input
                  type="password"
                  autoComplete="current-password"
                  placeholder="Senha"
                  {...register("password")}
                  error={errors.password}
                />
              </InputDiv>

              <Button text="Entrar" onClick={() => {}} />

              <LoginFormParagraph>Nao é cadastrado?</LoginFormParagraph>

              <Link to="/register">Cadastre-se</Link>
            </StyledLoginForm>
          </LoginBox>
        </StyledLoginDiv>
      </Container>
      <Footer />
    </>
  );
};
