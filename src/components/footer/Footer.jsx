import React from 'react'
import "./footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container container">
                <h1 className="footer-title">Faveri</h1>
                <ul className="footer-list">
                    <li>
                        <a href="#about" className="footer-link">Sobre</a>
                    </li>
                    <li>
                        <a href="#portfolio" className="footer-link">Projetos</a>
                    </li>
                    <li>
                        <a href="#testimonials" className="footer-link">Recomendações</a>
                    </li>
                </ul>
                <div className="footer-social">
                    <a href="https://www.facebook.com/leonardo.defaveri.9/" className="footer-social-link" target="_blank" rel='noreferrer'>
                        <i className='bx bxl-facebook'></i>
                    </a>

                    <a href="https://www.instagram.com/leodf41/" className="footer-social-link" target="_blank" rel='noreferrer'>
                        <i className='bx bxl-instagram'></i>
                    </a>

                    <a href="https://github.com/Leodf/" className="footer-social-link" target="_blank" rel='noreferrer'>
                        <i className='bx bxl-github'></i>
                    </a>

                    <a href="https://www.linkedin.com/in/leonardo-de-faveri/" className="footer-social-link" target="_blank" rel='noreferrer'>
                        <i className='bx bxl-linkedin'></i>
                    </a>
                </div>

                <span className='footer-copy'>
                    &#169; Leonardo de Faveri. Todos os direitos reservados
                </span>
            </div>
        </footer>
    )
}

export default Footer