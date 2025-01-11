import './App.css';
import MuiTest from './pages/MuiTest';
import Layout from './common/Layout';
import BookDetail from './pages/books/BookDetail';
import BookIndex from './pages/books/BookIndex';
import BookEdit from './pages/books/BookEdit';
import { Routes,Route } from 'react-router-dom'
import BookSearch from './pages/books/BookSearch';
import { useState, useEffect } from 'react'


function App() {
  const STORAGE_KEY = 'books'
  // const [books,setBooks] = useState([])
  const [books,setBooks] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    const initialValue = JSON.parse(saved)
    return initialValue || []
  })
  const removeBook = (id) =>{
      const newList = books.filter((book,index) => index !== id ? book:null)
      setBooks(newList)
  }
            const addBook = (newBook) => {
                if(!newBook) return
                setBooks(
                    [...books,newBook]
                )
            }

            useEffect(()=>{
                if(!localStorage.getItem(STORAGE_KEY)) {
                setBooks(JSON.parse(localStorage.getItem(STORAGE_KEY)))
                }
            },[])
            useEffect(()=>{
                localStorage.setItem(STORAGE_KEY, JSON.stringify(books))
            },[books])

  return (
    <>
    <Routes >
    <Route  element={<Layout />} >
    <Route index element={<BookIndex books={books} />}/>
    <Route path="search" element={<BookSearch books={books} setBooks={setBooks} />} />
    <Route path="edit" element={<BookEdit />} >
      <Route path=":id" element={<BookDetail books={books} setBooks={setBooks} />} />
    </Route>
    <Route path="mui-test" element={<MuiTest />} />
    </Route>
    </Routes>
    </>
  );
}

export default App;