import React from 'react'

const Frontend = () => {
  return (
    <div className="skills-content">
        <h3 className="skills-title">Frontend developer</h3>

        <div className="skills-box">
            <div className="skills-group">
                <div className="skills-data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills-name">HTML</h3>
                        <span className="skills-level">Intermediário</span>
                    </div>
                </div>
                
                <div className="skills-data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills-name">CSS</h3>
                        <span className="skills-level">Intermediário</span>
                    </div>
                </div>

                <div className="skills-data">
                    <i className="bx bx-badge-check"></i>   

                    <div>
                        <h3 className="skills-name">JavaScript</h3>
                        <span className="skills-level">Avançado</span>
                    </div>
                </div>
            </div>
            <div className="skills-group">
                <div className="skills-data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills-name">Bootstrap</h3>
                        <span className="skills-level">Intermediário</span>
                    </div>
                </div>
                
                <div className="skills-data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills-name">React</h3>
                        <span className="skills-level">Intermediário</span>
                    </div>
                </div>

                <div className="skills-data">
                    <i className="bx bx-badge-check"></i>   

                    <div>
                        <h3 className="skills-name">Git</h3>
                        <span className="skills-level">Básico</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Frontend