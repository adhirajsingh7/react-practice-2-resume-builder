import React from 'react'

const Experience = ({experience}) => {
  return (
    <>
    <div>Experience</div>
    <ul>
    {
      experience.map((item,key)=>{
        return (
          <div key={key}>
          <li>Year : {item.year}</li>
          <li>Company : {item.company}</li>
          <li>Role : {item.role}</li>
          </div>
          )
        })
        
      }
      </ul>
    </>
  )
}

export default Experience