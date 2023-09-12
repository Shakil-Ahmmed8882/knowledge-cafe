import { useState } from 'react'
import './App.css'
import Blogs from './assets/Components/Blogs'
import BookMarks from './assets/Components/BookMarks'
import Header from './assets/Components/Header'
import Blog from './assets/Components/Blog'

function App() {

  // Book mark use state
  const [books, setBooks] = useState([])

  const BookMarkHandleClick = (blog) => {
    setBooks([...books,blog])
  }



  // use state for reading time calculation
  const [readingTime, setReadingTime] = useState(0)
  // handle reading time
  const handleReadingTime = (time,id) =>{
    setReadingTime(readingTime + time)

    //remove the read books
    const remainingBooks = books.filter(book => book.id !== id);
    console.log(remainingBooks)
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
