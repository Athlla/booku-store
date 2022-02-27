import { GetServerSideProps } from 'next'
import Image from 'next/image'
import { BookOpenIcon, ClockIcon, MenuAlt3Icon } from '@heroicons/react/outline'

import Layout from 'components/Layout'

import { IBook } from 'Interfaces/book'

interface Props {
  result: IBook
}

const Book = ({ result }: Props) => {
  return (
    <Layout title="Book | Booku" className="md:mt-16">
      <div className="flex w-full max-w-lg gap-4 pb-5 mx-auto mb-6 shadow-lg">
        <div className="relative w-1/3 overflow-hidden aspect-2/3 rounded-2xl ">
          <Image src={result.cover_url} layout="fill" alt={result.title} />
        </div>
        <div className="flex flex-col justify-center flex-1 gap-4">
          <h3 className="text-2xl font-bold">{result.title}</h3>
          <p className="text-sm font-medium text-gray-600">
            {result.authors.join(', ')}
          </p>
          <div className="hidden py-2 md:flex">
            <div className="border-r-[1px] pr-4 text-center">
              <div className="flex items-center gap-1">
                <MenuAlt3Icon className="w-3 h-3" />
                <p className="text-xs">Chapters</p>
              </div>
              <p className="text-lg font-semibold">{result.sections.length}</p>
            </div>
            <div className="select-none border-l-[1px] pl-4 text-center">
              <div className="flex items-center gap-1">
                <ClockIcon className="w-3 h-3" />
                <p className="text-xs">Durations</p>
              </div>
              <p className="text-lg font-semibold">
                {Math.ceil(result.audio_length / 60)}m
              </p>
            </div>
          </div>
          <div className="hidden gap-1 py-4 md:flex">
            <button className="flex items-center justify-center w-32 h-10 gap-2 font-bold text-white rounded-l-full bg-slate-800">
              <BookOpenIcon className="w-4 h-4" />
              <span>Read</span>
            </button>
            <button className="flex items-center justify-center w-32 h-10 gap-2 font-bold border rounded-r-full border-slate-800 text-slate-800">
              <BookOpenIcon className="w-4 h-4" />
              <span>Listen</span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col max-w-3xl mx-auto">
        <div className="flex justify-center py-2 mb-4 md:hidden">
          <div className="border-r-[1px] pr-4 text-center">
            <div className="flex items-center gap-1">
              <MenuAlt3Icon className="w-3 h-3" />
              <p className="text-xs">Chapters</p>
            </div>
            <p className="text-lg font-semibold">{result.sections.length}</p>
          </div>
          <div className="select-none border-l-[1px] pl-4 text-center">
            <div className="flex items-center gap-1">
              <ClockIcon className="w-3 h-3" />
              <p className="text-xs">Durations</p>
            </div>
            <p className="text-lg font-semibold">
              {Math.ceil(result.audio_length / 60)}m
            </p>
          </div>
        </div>
        <div className="mb-6">
          <p className="mb-2 text-sm font-medium underline">Description</p>
          <p>{result.description}</p>
        </div>
        <div className="">
          <h4 className="font-medium">Table of contents</h4>
          {result.sections.map((section, i) => (
            <div key={i} className="flex py-1 text-indigo-700 cursor-pointer">
              <p className="w-8 text-center">{i + 1}</p>
              <h5 className="">{section.title}</h5>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Book

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const [id] = (params?.id as string).split('-').slice(-1)

  const categories = await (
    await fetch(
      'https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-categories'
    )
  ).json()

  for (let i = 0; i < categories.length; i++) {
    const results: IBook[] = await (
      await fetch(
        `https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-books?categoryId=${categories[i].id}&size=300`
      )
    ).json()

    if (results.some((res) => res.id === +id)) {
      return {
        props: {
          result: results.find((res) => res.id === +id),
        },
      }
    }
  }

  return {
    notFound: true,
  }
}
