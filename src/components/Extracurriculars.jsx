import React from 'react'

const Extracurriculars = ({extracurriculars}) => {
  return (
    <>
    <div>Extra-Curriculars</div>
    <ul>
    {
      extracurriculars.map((item,key)=>{
        return (
          <li key={key}>{item}</li>
        )
      })
    }
    </ul>
    </>
  )
}

export default Extracurriculars