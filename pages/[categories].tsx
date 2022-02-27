import { GetServerSideProps } from 'next'

import Layout from 'components/Layout'
import { IBook } from 'Interfaces/book'
import Booklist from 'components/Book/Booklist'
import { ICategory } from 'Interfaces/category'

interface Props {
  books: IBook[]
  category: string
  page: {
    currentPage: number
    totalPage: number
  }
}

const Categories = ({ books, category, page }: Props) => {
  return (
    <Layout title="Categories | Booku">
      <h3 className="text-2xl font-bold">{category}</h3>
      <Booklist books={books} />
    </Layout>
  )
}

export default Categories

export const getServerSideProps: GetServerSideProps = async (context) => {
  const [catId] = (context.params?.categories as string).split('-').slice(-1)

  const page = context.query?.page ?? 1

  const categories: ICategory[] = await (
    await fetch(
      'https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-categories'
    )
  ).json()

  const books: IBook[] = await (
    await fetch(
      `https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-books?categoryId=${catId}&size=30`
    )
  ).json()

  const paginationBooks = books.slice((+page - 1) * 30, +page * 30)

  return {
    props: {
      books: paginationBooks,
      page: {
        current: +page,
        totalPage: Math.ceil(books.length / 30),
      },
      category: categories.find((cat) => cat.id === +catId)?.name,
    },
  }
}
