import React from 'react'

const Education = ({education}) => {
  return (
    <>
    <div>Education</div>
    <ul>
    {
      education.map((item,key)=>{
        return (
          <li key={key}>{item}</li>
        )
      })
    }
    </ul>
    </>
  )
}

export default Education