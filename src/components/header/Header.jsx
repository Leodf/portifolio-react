import React, { useState } from 'react'
import './header.css'

const Header = () => {
    // ====== change background Header =======
    window.addEventListener("scroll", function () {
        const header = this.document.querySelector('.header')
        if(this.scrollY >= 80) header.classList.add('scroll-header')
        else header.classList.remove('scroll-header')
    })
    // ====== Toggle Menu =======
    const [Toggle, showMenu] = useState(false)
    const [activeNav, setActiveNav] = useState("#home")
    return (
    <header className='header'>
        <nav className="nav container">
            <a href="index.html" className='nav-logo'><span>Leo</span>nardo</a>

            <div className={Toggle ? "nav-menu show-menu" : "nav-menu"}>
                <ul className="nav-list grid">
                    <li className="nav-item">
                        <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'nav-link active-link' : 'nav-link'}>
                            <i className="uil uil-estate nav-icon"></i> Home
                        </a>
                    </li>
                    
                    <li className="nav-item">
                        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'nav-link active-link' : 'nav-link'}>
                            <i className="uil uil-user nav-icon"></i> Sobre
                        </a>
                    </li>

                    <li className="nav-item">
                        <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'nav-link active-link' : 'nav-link'}>
                            <i className="uil uil-scenery nav-icon"></i> Portfolio
                        </a>
                    </li>

                    <li className="nav-item">
                        <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'nav-link active-link' : 'nav-link'}>
                            <i className="uil uil-message nav-icon"></i> Contato
                        </a>
                    </li>

                </ul>

                <i className="uil uil-times nav-close" onClick={() => showMenu(!Toggle)}></i>
            </div>

            <div className="nav-toggle" onClick={() => showMenu(!Toggle)}>
                <i className="uil uil-apps"></i>
            </div>
        </nav>
    </header>
  )
}

export default Header