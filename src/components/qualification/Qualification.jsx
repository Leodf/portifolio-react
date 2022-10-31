import React, { useState } from 'react'
import './qualification.css'

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1)
  
    const toggleTab = index => {
    setToggleState(index)
  }

  return (
    <section className="qualification section">
        <h2 className="section-title">Qualificações</h2>
        <span className="section-subtitle">Meu portfolio</span>

        <div className="qualification-container container">
            <div className="qualification-tabs">
                <div 
                    className={
                        toggleState === 1 ? 
                        "qualification-button button-flex qualification-active" 
                        : "qualification-button button-flex"
                    }
                    onClick={() => toggleTab(1)}
                >
                    <i className="uil uil-graduation-cap qualification-icon"></i> Educação
                </div>

                <div 
                    className={
                        toggleState === 2 ? 
                        "qualification-button button-flex qualification-active" 
                        : "qualification-button button-flex"
                    }
                    onClick={() => toggleTab(2)}
                >
                    <i className="uil uil-briefcase qualification-icon"></i> Experiência
                </div>
            </div>

            <div className="qualification-sections">
                <div className={toggleState === 1 ? "qualification-content qualification-content-active" : "qualification-content"}>
                    <div className="qualification-data">
                        <div>
                            <h3 className="qualification-title">Web Design</h3>
                            <span className="qualification-subtitle">
                                Spain - Institute
                            </span>
                            <div className="qualification-calender">
                                <i className="uil uil-calendar-alt"></i> 2021 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification-rounder"></span>
                            <span className="qualification-line"></span>
                        </div>
                    </div>

                    <div className="qualification-data">
                        <div></div>

                        <div>
                            <span className="qualification-rounder"></span>
                            <div className="qualification-line"></div>
                        </div>

                        <div>
                            <h3 className="qualification-title">Art Director</h3>
                            <span className="qualification-subtitle">
                                Spain - Institute
                            </span>
                            <div className="qualification-calender">
                                <i className="uil uil-calendar-alt"></i> 2020 - 2021
                            </div>
                        </div>
                    </div>

                    <div className="qualification-data">
                        <div>
                            <h3 className="qualification-title">Web Developer</h3>
                            <span className="qualification-subtitle">
                                Spain - Institute
                            </span>
                            <div className="qualification-calender">
                                <i className="uil uil-calendar-alt"></i> 2018 - 2020
                            </div>
                        </div>

                        <div>
                            <span className="qualification-rounder"></span>
                            <span className="qualification-line"></span>
                        </div>
                    </div>

                    <div className="qualification-data">
                        <div></div>

                        <div>
                            <span className="qualification-rounder"></span>
                            <div className="qualification-line"></div>
                        </div>

                        <div>
                            <h3 className="qualification-title">UX Expert</h3>
                            <span className="qualification-subtitle">
                                Spain - Institute
                            </span>
                            <div className="qualification-calender">
                                <i className="uil uil-calendar-alt"></i> 2017 - 2018
                            </div>
                        </div>
                    </div>
                </div>

                <div className={toggleState === 2 ? "qualification-content qualification-content-active" : "qualification-content"}>
                    <div className="qualification-data">
                        <div>
                            <h3 className="qualification-title">Product Designer</h3>
                            <span className="qualification-subtitle">
                                Microsoft - Spain
                            </span>
                            <div className="qualification-calender">
                                <i className="uil uil-calendar-alt"></i> 2021 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification-rounder"></span>
                            <span className="qualification-line"></span>
                        </div>
                    </div>

                    <div className="qualification-data">
                        <div></div>

                        <div>
                            <span className="qualification-rounder"></span>
                            <div className="qualification-line"></div>
                        </div>

                        <div>
                            <h3 className="qualification-title">UX Designer</h3>
                            <span className="qualification-subtitle">
                                Apple Inc - Spain
                            </span>
                            <div className="qualification-calender">
                                <i className="uil uil-calendar-alt"></i> 2020 - 2021
                            </div>
                        </div>
                    </div>

                    <div className="qualification-data">
                        <div>
                            <h3 className="qualification-title">Web Designer</h3>
                            <span className="qualification-subtitle">
                                Figma - Spain
                            </span>
                            <div className="qualification-calender">
                                <i className="uil uil-calendar-alt"></i> 2018 - 2020
                            </div>
                        </div>

                        <div>
                            <span className="qualification-rounder"></span>
                            <span className="qualification-line"></span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification