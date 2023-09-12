import { useEffect, useState } from 'react'
import './App.css'
import Blogs from './assets/Components/Blogs'
import BookMarks from './assets/Components/BookMarks'
import Header from './assets/Components/Header'
import { setItemInLocalStorage,getBookmarkFromLocalStorage } from '../public/Utility/localStorage'


function App() {

  // Book mark use state
  const [books, setBooks] = useState([])

  const BookMarkHandleClick = (blog,id) => {
    setBooks([...books,blog])
    setItemInLocalStorage(id)
  }


  // use effect to set in local storage
   //......

  

  // use state for reading time calculation
  const [readingTime, setReadingTime] = useState(0)
  // handle reading time
  const handleReadingTime = (time,id) =>{
    setReadingTime(readingTime + time)

    //remove the read books
    const remainingBooks = books.filter(book => book.id !== id);
    setBooks(remainingBooks)
  }


  return (
    <>
    <div>
    <Header></Header>
    <div className='md:flex max-w-6xl mx-auto'>
    <Blogs BookMarkHandleClick={BookMarkHandleClick}
    handleReadingTime={handleReadingTime}
    ></Blogs>
    <BookMarks
     bookMark={books}
     handleReadingTime={handleReadingTime}
     readingTime={readingTime}
    ></BookMarks>
    </div>
    </div>
    </>
  )
}

export default App
