import { kebabCase } from 'lib/kebabCase'
import { useRouter } from 'next/router'

interface Props {
  current: number
  total: number
  category: {
    id: number
    name: string
  }
}

const Pagination = ({ current, total, category }: Props) => {
  const router = useRouter()

  console.log(`${router.asPath}?page=$`)

  const handleClick = (page: number) => {
    router.push(`${kebabCase(category.name)}-${category.id}?page=${page}`)
  }

  return (
    <div className="flex justify-center w-full gap-4 my-8">
      {[...Array(total)].map((_, i) => (
        <button
          key={i}
          onClick={() => handleClick(i + 1)}
          className={`text rounded-full border-2 border-black px-4 py-2 font-bold transition hover:bg-gray-300 ${
            i + 1 === current ? 'bg-slate-700 text-white' : 'bg-white'
          }`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  )
}

export default Pagination
