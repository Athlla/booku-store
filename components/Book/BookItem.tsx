import Image from 'next/image'
import Link from 'next/link'

import { IBook } from 'Interfaces/book'

const BookItem = ({ id, title, cover_url, authors }: IBook) => {
  const kebabCase = (words: string) => {
    const arr = words.toLowerCase().split(' ')
    return arr.join('-')
  }

  return (
    <Link
      // href={{
      //   pathname: `/book/[slug]`,
      //   query: { slug: id },
      // }}
      href={`/book/${kebabCase(title)}-${id}`}
    >
      <a className="w-1/2 px-2 pb-4 cursor-pointer sm:w-1/3 md:w-1/4 md:px-4 md:pb-8 lg:w-1/5 xl:w-1/6">
        <div className="relative w-full px-4 mb-4 aspect-2/3">
          <Image
            className="rounded-xl"
            src={cover_url}
            layout="fill"
            objectFit="cover"
            objectPosition="top"
            alt={title}
          />
        </div>
        <h4 className="font-medium truncate ">{title}</h4>
        <p className="truncate">{authors.join(', ')}</p>
      </a>
    </Link>
  )
}

export default BookItem
