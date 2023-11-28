import { useContext } from "react";
import { StyledUserDetails } from "./style";
import { UserContext } from "../../providers/UserContext";
import ReactLoading from 'react-loading';

export const UserDetails = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <StyledUserDetails>
        {user ? (
          <>
            <h1> Olá, {user.name}!</h1>
            <div>
              <p>
                Seu número: <span>{user.phone}</span>
              </p>
              <p>
                Seu email: <span>{user.email}</span>
              </p>
            </div>{" "}
          </>
        ) : (
          <>
          <div className="loading__div">
            <ReactLoading type='spin' color ='var(--color-dark)' height={'4rem'} width={'4rem'} />
          </div>
          </>
        )}
      </StyledUserDetails>
    </>
  );
};
