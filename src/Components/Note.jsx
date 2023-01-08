import React from 'react'

export default function Note({date,title,text}) {
  return (
    <div className='danger'>
        <h1>Title:{title}</h1>
        <p>text: {text}</p>
        <p>Date : {date}</p>
    </div>
  )
}
