import React from 'react'

const Skills = ({skills}) => {
  return (
    <>
    <div>Skills</div>
    <ul>
    {
      skills.map((item,key)=>{
        return (
          <li key={key}>{item}</li>
        )
      })
    }
    </ul>
    </>
  )
}

export default Skills