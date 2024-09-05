import React from 'react'

const notFound = ({son}) => {
  return (
    <div className={`${son === false ? 'not-act' : ""} not`}>
      <img src="https://i.pinimg.com/originals/54/b7/59/54b7594da47ddcc3ed668f39ebd9be87.png" alt="" />
    </div>
  )
}

export default notFound