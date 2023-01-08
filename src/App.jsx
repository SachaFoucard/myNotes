import { useState, useEffect } from 'react'
import './App.css'
import Note from './Components/Note'

function App() {
  const [hide, HideList] = useState(true)
  const [list, SetList] = useState([])
  const [title, SetTitle] = useState()
  const [text, SetText] = useState()
  const [date, SetDate] = useState(new Date())

  useEffect(() => {
    SetList(list)
  }, [])

  const SortList = (a, b) => {
    const sortedList = [...list].sort((a, b) => {
      return a.date > b.date ? 1 : -1})
    SetList(sortedList)
  }



  const SendNote = () => {
    let NewNote = {
      title,
      text,
      date
    };
    if(!title || !text ||!date){
      alert("Fields Empty Check it an other time")
    }
    else{
    SetList((prev) => [...prev, NewNote])
    }
  }

  return (

    <>
      <button onClick={() => HideList(!hide)}>{!hide ? 'show':'hide'}</button>
      <button onClick={() => SortList()}>Sort List</button>
      <div className='Notes'>
        <h1 className='title'>Enter a note</h1>
        <input onChange={(e) => SetTitle(e.target.value)} type="text" placeholder='Enter a Title'></input>
        <textarea onChange={(e) => SetText(e.target.value)} type="text" placeholder='Enter a text'></textarea>
        <input onChange={(e) => SetDate(e.target.value)} type="date" placeholder='Enter a date'></input>
        <button onClick={() => SendNote()}>Add note</button>

        {

          list.length == 0 ? <h2>No Notes Yet</h2> : hide && list.map((item, index) => <Note key={index} {...item} />
          )
        }
      </div>
    </>
  )
}

export default App
