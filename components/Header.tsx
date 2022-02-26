import { BookmarkIcon, BookOpenIcon } from '@heroicons/react/outline'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="container flex items-center justify-between w-11/12 h-16">
      <div className="flex gap-1 text-xl font-bold">
        <BookOpenIcon className="w-6 h-6 translate-y-1" />
        <h2>Booku</h2>
      </div>
    </header>
  )
}

export default Header
