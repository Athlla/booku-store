import BookItem from './BookItem'

import { IBook } from 'Interfaces/book'
import { ReactNode } from 'react'

interface Props {
  books: IBook[]
}

const Booklist = ({ books }: Props) => {
  return (
    <div className="mt-8">
      <div className="flex flex-wrap mt-8 -m-2 md:-m-4">
        {books?.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </div>
    </div>
  )
}

export default Booklist
