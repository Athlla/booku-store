import { GetServerSideProps } from 'next'

import Layout from 'components/Layout'
import Booklist from 'components/Book/Booklist'
import Pagination from 'components/Pagination'

import { ICategory } from 'Interfaces/category'
import { IBook } from 'Interfaces/book'

interface Props {
  books: IBook[]
  category: {
    id: number
    name: string
  }
  page: {
    currentPage: number
    totalPage: number
  }
}

const Categories = ({ books, category, page }: Props) => {
  return (
    <Layout title="Categories | Booku">
      <h3 className="text-2xl font-bold">{category.name}</h3>
      <Booklist books={books} />
      {page.totalPage > 1 && (
        <Pagination
          current={page.currentPage}
          total={page.totalPage}
          category={category}
        />
      )}
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
      `https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-books?categoryId=${catId}&size=300`
    )
  ).json()

  const paginationBooks = books.slice((+page - 1) * 30, +page * 30)

  return {
    props: {
      books: paginationBooks,
      page: {
        currentPage: +page,
        totalPage: Math.ceil(books.length / 30),
      },
      category: {
        id: catId,
        name: categories.find((cat) => cat.id === +catId)?.name,
      },
    },
  }
}
