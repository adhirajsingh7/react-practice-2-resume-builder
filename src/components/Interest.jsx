import React from 'react'

const Interest = ({interests}) => {
  return (
    <>
    <div>Interest</div>
    <ul>
    {
      interests.map((item ,key)=> {
        return (
            <li key={key}>{item}</li>
        )
      } )
    }
    </ul>
    
    </>
  )
}

export default Interest