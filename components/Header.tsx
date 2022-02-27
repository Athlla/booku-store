import { FormEvent } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import {
  BookmarkIcon,
  BookOpenIcon,
  SearchIcon,
} from '@heroicons/react/outline'

const Header = () => {
  const router = useRouter()

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const target = e.target as typeof e.target & {
      search: { value: string }
    }

    if (target.search.value === '') {
      return
    }

    router.push({
      pathname: '/search',
      query: { q: target.search.value },
    })
  }

  return (
    <header className="container flex items-center justify-between w-11/12 h-16 gap-4">
      <Link href="/">
        <a>
          <div className="flex gap-1 text-xl font-bold">
            <BookOpenIcon className="w-6 h-6 sm:translate-y-1" />
            <h2 className="hidden sm:block">Booku</h2>
          </div>
        </a>
      </Link>
      <form
        onSubmit={submitHandler}
        className="flex items-center flex-1 max-w-sm gap-2 px-2 py-1 bg-gray-200 rounded-lg"
      >
        <input
          type="text"
          name="search"
          className="flex-1 font-semibold bg-transparent focus:outline-none"
          placeholder="Search"
          autoComplete="off"
        />
        <SearchIcon className="w-4 h-4" />
      </form>
      <BookmarkIcon className="w-6 h-6 cursor-pointer" />
    </header>
  )
}

export default Header
