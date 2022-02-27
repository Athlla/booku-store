import { GetStaticProps } from 'next'

import Layout from 'components/Layout'
import Categories from 'components/Categories'

import { ICategory } from 'Interfaces/category'
import { IBook } from 'Interfaces/book'
import Booklist from 'components/Book/Booklist'

interface Props {
  categories: ICategory[]
  books: IBook[]
}

const Home = ({ categories, books }: Props) => {
  return (
    <Layout title="Booku | Home">
      <div className="md:max-h-lg h-80 w-full md:h-[50vh]">
        <figure className="flex h-full w-full flex-col justify-center gap-8 overflow-hidden rounded-2xl bg-[url('/hero.jpg')] bg-cover p-8 text-white">
          <blockquote className="text-xl font-bold md:w-4/5 md:text-4xl">
            A great book should leave you with many experiences, and slightly
            exhausted at the end. You live several lives while reading.
          </blockquote>
          <figcaption className="text-lg">
            <cite>- William Styron</cite>
          </figcaption>
        </figure>
      </div>
      <Categories data={categories} />
      <h2 className="my-6 text-2xl font-semibold">
        Popular in {categories[0].name}
      </h2>
      <Booklist books={books} />
    </Layout>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const categories = await (
    await fetch(
      'https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-categories'
    )
  ).json()

  const books = await (
    await fetch(
      'https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-books?categoryId=1&size=10'
    )
  ).json()

  return {
    props: {
      categories,
      books,
    },
  }
}
