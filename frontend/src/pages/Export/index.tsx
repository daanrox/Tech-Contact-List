import { Container } from "../../components/Container";
import { Footer } from "../../components/Footer";
import { StyledHeader } from "../../components/Header/style";
import logoHeader from "../../assets/img/logo-white.png";
import { StyledExportBody } from "./style";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";
import { useContext, useEffect } from "react";
import { UserContext } from "../../providers/UserContext";
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import html2pdf from 'html2pdf.js';
import { toast } from "react-toastify";
import { MdEmail } from "react-icons/md";

export const Export = () => {
  const { user, contactsList } = useContext(UserContext);

  const navigate = useNavigate()

  const formatDate = (dateString:string) => {
    const date = new Date(dateString);
  
    const options = {
      locale: ptBR,
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    };
  
    const formattedDate = format(date, "dd 'de' MMM. 'de' yyyy", options);
  
    return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  };



  useEffect(() => {
    const generatePDF = () => {
      setTimeout(() => {
        const content = document.getElementById('exportContent');
  
        if (content) {
          html2pdf(content, {
            margin: 10,
            filename: 'exported-document.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 1 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
          }).then(() => {
            toast.success('PDF gerado e baixado');
          });
        } else {
          toast.error('Element not found.');
        }
      }, 20);
    };
  
    generatePDF();
  }, []);

  return (
    <>
    <div id='exportContent'>

      <Container >
        <StyledHeader>
          <div className="header__container">
            <img className="header__logo" src={logoHeader} />
            <Button text="Voltar" onClick={()=>{navigate('/dashboard')}}/>
          </div>
        </StyledHeader>

        <StyledExportBody>
          <div className="exportUserDetails">
            <h2>Usuário</h2>
            <div className="exportUserName">
              <FaUserLarge className="exportUserNameIcon" />
              <p>{user?.name}</p>
            </div>
            <div className="exportUserPhone">
              <FaPhoneAlt className="exportUserPhoneIcon" />
              <p>{user?.phone}</p>
            </div>
            <div className="exportUserEmail">
              <IoMdMail className="exportUserEmailIcon" />
              <p>{user?.email}</p>
            </div>
          </div>

          <div className="exportContactsDetails">
            <h2>Contatos</h2>

            <div className="exportContactsContainer">
                {contactsList.map((contact) => (
                    <div key={contact.id} className="exportContactCard">
                        <div className="exportContactCardLeft">
                        <p>{contact.name}</p>
                        <p>Adicionado em {formatDate(contact.created_at)}</p>
                        </div>
                        <div className="exportContactCardRight">
                            <div>
                                <FaPhoneAlt />
                                <p>{contact.phone}</p>
                            </div>
                            <div>
                                <MdEmail />
                                <p>{contact.email}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* <table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Telefone</th>
                  <th>Email</th>
                  <th>Adicionado em</th>
                </tr>
              </thead>
              <tbody>
                {contactsList.map((contact, index) => (
                  <tr key={index}>
                    <td>{contact.name}</td>
                    <td>{contact.phone}</td>
                    <td>{contact.email}</td>
                    <td>{formatDate(contact.created_at)}</td>
                  </tr>
                ))}
              </tbody>
            </table> */}
          </div>
        </StyledExportBody>
      </Container>
      <Footer />
    </div>
    </>
  );
};

