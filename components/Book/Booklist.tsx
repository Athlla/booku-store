import BookItem from './BookItem'

import { IBook } from 'Interfaces/book'

interface Props {
  category: string
  books: IBook[]
}

const Booklist = ({ books, category }: Props) => {
  return (
    <div className="mt-8">
      <h2 className="mb-6 text-2xl font-semibold">Popular in {category}</h2>
      <div className="flex flex-wrap -m-2 md:-m-4">
        {books?.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </div>
    </div>
  )
}

export default Booklist
