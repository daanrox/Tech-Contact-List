import { useContext } from "react";
import { StyledUserDetails } from "./style";
import { UserContext } from "../../providers/UserContext";
import ReactLoading from "react-loading";
import { MdOutlineEmail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { PiExport } from "react-icons/pi";
import { useNavigate } from "react-router-dom";


export const UserDetails = () => {
  const { user } = useContext(UserContext);

  const navigate = useNavigate()

  return (
    <>
      <StyledUserDetails>
        {user ? (
          <>
            <h1> Olá, {user.name}!</h1>
            <div className="userBody">
              <div className="userDetails">
                <div className="userLines">
                  <MdOutlineEmail />
                  <p>{user.email}</p>
                </div>
                <div className="userLines">
                  <LuPhone />
                  <p>{user.phone}</p>
                </div>
              </div>
              <div className='exportDetails' onClick={()=>{navigate('/export')}}>
                <PiExport className='exportDetailsIcon'/>
                <p>Exportar Contatos</p>
              </div>

            </div>
          </>
        ) : (
          <>
            <div className="loading__div">
              <ReactLoading
                type="spin"
                color="var(--color-dark)"
                height={"4rem"}
                width={"4rem"}
              />
            </div>
          </>
        )}
      </StyledUserDetails>
    </>
  );
};
