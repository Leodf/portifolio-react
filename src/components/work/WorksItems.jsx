import React from 'react'

const WorksItems = ({item}) => {
  return (
    <div className="work-card" key={item.id}>
        <img src={item.image} alt={item.title} className='work-img' />
        <h3 className="work-title">{item.title}</h3>
        <a href={item.link} rel="noreferrer" target="_blank" className="work-button">
            Link <i className="bx bx-right-arrow-alt work-button-icon"></i>
        </a>
    </div>
  )
}

export default WorksItems