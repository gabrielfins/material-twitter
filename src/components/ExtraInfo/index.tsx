import './style.scss';
import { MdCopyright } from 'react-icons/md';

export default function ExtraInfo() {
    return (
        <div className="extra-info-content">
            <div className="extra-info-links">
                <button className="extra-info-button">Termos</button>
                <button className="extra-info-button">Política de Privacidade</button>
                <button className="extra-info-button">Cookies</button>
                <button className="extra-info-button">Informações de Anúncios</button>
                <button className="extra-info-button">Sobre</button>
                <button className="extra-info-button">Status</button>
                <button className="extra-info-button">Empresas</button>
                <button className="extra-info-button">Desenvolvedores</button>
            </div>
            <div className="extra-info-copyright">
                <MdCopyright size="1.3em" className="extra-info-copyright-icon" /><p className="extra-info-copyright-text"> 2021 Twitter, Inc.</p>
            </div>
        </div>
    );
}