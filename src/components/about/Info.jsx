import React from 'react'

const Info = () => {
  return (
    <div className="about-info grid">
        <div className="about-box">
            <i className="bx bx-award about-icon"></i>
            <h3 className="about-title">Experiência</h3>
            <span className="about-subtitle">2 anos</span>
        </div>

        <div className="about-box">
            <i className="bx bx-briefcase-alt about-icon"></i>
            <h3 className="about-title">Projetos</h3>
            <span className="about-subtitle">2 publicados</span>
        </div>

        <div className="about-box">
            <i className="bx bx-support about-icon"></i>
            <h3 className="about-title">Suporte</h3>
            <span className="about-subtitle">Online 24/7</span>
        </div>
    </div>
  )
}

export default Info