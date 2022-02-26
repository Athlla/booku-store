import type { GetStaticProps, NextPage } from 'next'

import Layout from 'components/Layout'

const Home: NextPage = () => {
  return (
    <Layout title="Booku | Home">
      <figure className="flex h-80 w-full flex-col justify-center gap-8 overflow-hidden rounded-2xl bg-[url('/hero.jpg')] bg-cover p-8 text-white md:h-[500px]">
        <blockquote className="text-xl font-bold md:w-4/5 md:text-4xl">
          A great book should leave you with many experiences, and slightly
          exhausted at the end. You live several lives while reading.
        </blockquote>
        <figcaption className="text-lg">
          <cite>- William Styron</cite>
        </figcaption>
      </figure>
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

  return {
    props: {
      categories,
    },
  }
}
