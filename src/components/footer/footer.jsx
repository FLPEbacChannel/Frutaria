import { Container } from './styles';
import { FaWhatsapp } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";

export function Footer() {
    return (
        <Container id="contacts">
                <h1>&copy; Frutaria do Zé - 2026</h1>
                <div className='contacts-box'>
                    <h2>Contato</h2>
                    <div className='info-box'>
                        <FaWhatsapp />
                        <a className="link" href="https://wa.me/5542999033921" target="_blank" rel="noopener noreferrer">Clique aqui</a>   
                    </div>
                    <div className='info-box'>
                        <FiGithub />
                        <a className="link" href="https://github.com/FLPProgrammer">Clique aqui</a>
                    </div>
                    <div className='info-box'>
                        <CiLinkedin />
                        <a  className="link" href="https://www.linkedin.com/in/felipe-jos%C3%A9-de-lima-6338b233b/">Clique aqui</a>
                    </div>
                </div>
        </Container>
    )
}