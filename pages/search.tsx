import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'

import Layout from 'components/Layout'

import { IBook } from 'Interfaces/book'
import Booklist from 'components/Book/Booklist'

interface Props {
  results: IBook[]
}

const Search = ({ results }: Props) => {
  const { query } = useRouter()

  return (
    <Layout title="Search | Booku">
      <p>
        Result for <strong>"{query.q}"</strong>
      </p>
      <Booklist books={results} />
    </Layout>
  )
}

export default Search

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { q } = context.query

  const books: IBook[] = await (
    await fetch(
      'https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-books?categoryId=1&size=300'
    )
  ).json()

  const results = books.filter(
    (book) =>
      book.title.toLowerCase().includes(q as string) ||
      book.authors
        .join(' ')
        .toLowerCase()
        .includes(q as string)
  )

  if (!q) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {
      results,
    },
  }
}
