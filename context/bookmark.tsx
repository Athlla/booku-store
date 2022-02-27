import { IBook } from 'Interfaces/book'
import { createContext, ReactNode, useEffect, useState } from 'react'

type initialValueType = {
  bookmark: IBook[]
  toggleBookmark: (book: IBook) => void
}

const initialValue: initialValueType = {
  bookmark: [],
  toggleBookmark: () => {},
}

export const BookmarkContext = createContext(initialValue)

const BookmarkProvider = ({ children }: { children: ReactNode }) => {
  const [bookmark, setBookmark] = useState<IBook[]>([])

  useEffect(() => {
    const bookmarkList = localStorage.getItem('bookmark')
    setBookmark(bookmarkList !== null ? JSON.parse(bookmarkList) : [])
  }, [])

  useEffect(() => {
    if (bookmark === []) {
      return
    }
    localStorage.setItem('bookmark', JSON.stringify(bookmark))
  }, [bookmark])

  const toggleBookmark = (book: IBook) => {
    const newBookmark = [...bookmark]

    if (bookmark.some((bm) => bm.id === book.id)) {
      return setBookmark(newBookmark.filter((bm) => bm.id !== book.id))
    }

    newBookmark.push(book)
    setBookmark(newBookmark)
  }

  const value = {
    bookmark,
    toggleBookmark,
  }

  return (
    <BookmarkContext.Provider value={value}>
      {children}
    </BookmarkContext.Provider>
  )
}

export default BookmarkProvider
